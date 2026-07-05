/**
 * COMPONENTES - JavaScript
 * Maneja interactividad del header, navbar y footer
 */

// ============================================
// MENÚ MÓVIL - Toggle y cierre
// ============================================

// Carga de componentes HTML desde carpeta /components y luego inicializa la UI
async function loadComponent(name, containerSelector) {
  try {
    const res = await fetch(`components/${name}.html`);
    if (!res.ok) throw new Error('No se pudo cargar ' + name);
    const html = await res.text();
    const container = document.querySelector(containerSelector);
    if (container) container.innerHTML = html;
  } catch (err) {
    console.warn(err);
  }
}

async function loadAllComponents() {
  await Promise.all([
    loadComponent('header', '#site-header'),
    loadComponent('navbar', '#site-navbar'),
    loadComponent('footer', '#site-footer')
  ]);
}

// Inicialización de la interfaz que depende de elementos cargados
function initUI() {
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const navbar = document.getElementById('navbar');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  if (menuClose && navList) {
    menuClose.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', function(event) {
    if (!navbar) return;
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnToggle = menuToggle && menuToggle.contains(event.target);

    if (!isClickInsideNavbar && !isClickOnToggle && navList) {
      navList.classList.remove('active');
    }
  });

  setActiveNavLink();
  initGalleryReels();

  function setActiveNavLink() {
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    const normalizedPath = pathname === '' ? '/' : pathname;

    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '/';
      const hrefPath = href === '/' ? '/' : href.replace(/\/+$/, '');

      let isActive = false;
      if (hrefPath === '/') {
        isActive = normalizedPath === '/' || normalizedPath === '/index' || normalizedPath === '/index.html';
      } else {
        isActive = normalizedPath === hrefPath || normalizedPath.startsWith(hrefPath + '/');
      }

      link.classList.toggle('active', isActive);
    });
  }

  function initGalleryReels() {
    const galleryCards = document.querySelectorAll('.gallery-card');
    if (!galleryCards.length) return;

    const updateActiveCard = () => {
      const viewportMid = window.innerHeight * 0.45;
      let activeCard = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      galleryCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMid);

        if (distance < closestDistance) {
          closestDistance = distance;
          activeCard = card;
        }
      });

      galleryCards.forEach(card => {
        card.classList.toggle('is-active', card === activeCard);
      });
    };

    updateActiveCard();
    window.addEventListener('scroll', updateActiveCard, { passive: true });
    window.addEventListener('resize', updateActiveCard);
  }

  window.addEventListener('popstate', setActiveNavLink);

  // NAVBAR STICKY
  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
      } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      }
    }
  });

  // SCROLL SUAVE - Anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// Cargar componentes y luego ejecutar init
document.addEventListener('DOMContentLoaded', async function() {
  await loadAllComponents();
  initUI();
});

// NAVEGACIÓN ENTRE RUTAS AL HACER SCROLL (wheel)
;(function() {
  let locked = false;
  const DELAY = 900; // ms entre cambios

  function getNavOrder() {
    return Array.from(document.querySelectorAll('.nav-link')).map(l => l.getAttribute('href'))
      .filter(Boolean);
  }

  function currentIndex(order) {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    // normalize: convert '/' to '/'
    for (let i = 0; i < order.length; i++) {
      const href = order[i];
      if (href === path || href === path + '/' || (href === '/' && path === '/')) return i;
      // also check last segment
      const last = href.split('/').filter(Boolean).pop();
      const curLast = path.split('/').filter(Boolean).pop();
      if (last && curLast && last === curLast) return i;
    }
    return -1;
  }

  function goTo(index, order) {
    if (index < 0 || index >= order.length) return;
    locked = true;
    window.location.href = order[index];
    setTimeout(() => { locked = false }, DELAY + 200);
  }

  (function() {
    let accum = 0;
    let lastDir = 0;
    const ACCUM_THRESHOLD = 300; // px acumulados necesarios para navegar (aumentado)

    window.addEventListener('wheel', function(e) {
      if (locked) return;
      const order = getNavOrder();
      if (!order.length) return;
      const idx = currentIndex(order);
      if (idx === -1) return;
      if (Math.abs(e.deltaY) < 8) return; // ignorar micro-scrolls muy pequeños

      const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const atBottom = (window.innerHeight + window.scrollY) >= (scrollHeight - 4);
      const atTop = window.scrollY <= 4;

      const dir = e.deltaY > 0 ? 1 : -1;
      if (dir !== lastDir) {
        accum = 0; // reiniciar acumulador si cambia la dirección
      }
      lastDir = dir;

      // Acumular sólo si estamos en el borde correspondiente
      if (dir > 0) {
        if (atBottom) accum += e.deltaY;
        else { accum = 0; return; }
      } else {
        if (atTop) accum += Math.abs(e.deltaY);
        else { accum = 0; return; }
      }

      if (accum >= ACCUM_THRESHOLD) {
        if (dir > 0) goTo(idx + 1, order);
        else goTo(idx - 1, order);
        accum = 0;
      }
    }, { passive: true });
  })();
})();

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Cierra el menú móvil
 */
function closeMenu() {
  const navList = document.querySelector('.nav-list');
  if (navList) {
    navList.classList.remove('active');
  }
}

/**
 * Abre el menú móvil
 */
function openMenu() {
  const navList = document.querySelector('.nav-list');
  if (navList) {
    navList.classList.add('active');
  }
}

/**
 * Toggle del menú móvil
 */
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  if (navList) {
    navList.classList.toggle('active');
  }
}
