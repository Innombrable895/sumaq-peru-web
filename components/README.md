# Guía de Integración de Componentes

## Estructura de Componentes

Se han creado tres componentes principales para tu sitio web:

### 1. **Header** (`components/header.html`)
- Logo de la asociación
- Título "SUMAQ PERÚ"
- Tagline "Asociación Cultural Andina"
- Botón de menú para versión móvil

### 2. **Navbar** (`components/navbar.html`)
- Menú de navegación principal
- Enlaces a todas las páginas
- Responsive (se adapta a móvil)
- Menú hamburguesa en pantallas pequeñas

### 3. **Footer** (`components/footer.html`)
- Logo blanco
- Descripción breve
- Enlaces rápidos
- Información de contacto
- Iconos de redes sociales (Facebook, Instagram, WhatsApp)
- Copyright

---

## Cómo Integrar en tus Páginas HTML

### Paso 1: Incluir los estilos CSS

En la sección `<head>` de cada página HTML, agrega:

```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/responsive.css">
<link rel="stylesheet" href="assets/css/animations.css">
```

### Paso 2: Incluir el Header, Navbar y Footer

En el `<body>` de cada página, usa la siguiente estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sumaq Perú - Asociación Cultural</title>
    
    <!-- ESTILOS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    
    <!-- FAVICON -->
    <link rel="icon" href="favicon.ico">
</head>
<body>

    <!-- HEADER -->
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="Sumaq Perú - Asociación Cultural">
                </a>
            </div>
            <div class="header-content">
                <h1 class="header-title">SUMAQ PERÚ</h1>
                <p class="header-tagline">Asociación Cultural Andina</p>
            </div>
            <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">
                <img src="assets/icons/menu.svg" alt="Menú">
            </button>
        </div>
    </header>

    <!-- NAVBAR -->
    <nav class="navbar" id="navbar">
        <div class="navbar-container">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Inicio</a>
                </li>
                <li class="nav-item">
                    <a href="nosotros.html" class="nav-link">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a href="actividades.html" class="nav-link">Actividades</a>
                </li>
                <li class="nav-item">
                    <a href="galeria.html" class="nav-link">Galería</a>
                </li>
                <li class="nav-item">
                    <a href="contacto.html" class="nav-link">Contacto</a>
                </li>
            </ul>
            <button class="menu-close" id="menuClose" aria-label="Cerrar menú">
                <span class="close-icon">&times;</span>
            </button>
        </div>
    </nav>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="main-content">
        <!-- Tu contenido aquí -->
    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section footer-about">
                <img src="assets/images/logo/logo-white.png" alt="Sumaq Perú" class="footer-logo">
                <p class="footer-description">
                    Asociación Cultural Sumaq Perú, dedicada a preservar y promover la riqueza cultural andina.
                </p>
            </div>
            <div class="footer-section footer-links">
                <h3 class="footer-title">Enlaces Rápidos</h3>
                <ul class="footer-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="actividades.html">Actividades</a></li>
                    <li><a href="galeria.html">Galería</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-section footer-contact">
                <h3 class="footer-title">Contacto</h3>
                <ul class="footer-list">
                    <li><strong>Email:</strong> <a href="mailto:info@sumaqperu.org">info@sumaqperu.org</a></li>
                    <li><strong>Teléfono:</strong> <a href="tel:+51987654321">+51 987 654 321</a></li>
                    <li><strong>Ubicación:</strong> Lima, Perú</li>
                </ul>
            </div>
            <div class="footer-section footer-social">
                <h3 class="footer-title">Síguenos</h3>
                <div class="social-links">
                    <a href="https://facebook.com/sumaqperu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="assets/icons/facebook.svg" alt="Facebook">
                    </a>
                    <a href="https://instagram.com/sumaqperu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="assets/icons/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <img src="assets/icons/whatsapp.svg" alt="WhatsApp">
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Asociación Cultural Sumaq Perú. Todos los derechos reservados.</p>
        </div>
    </footer>

    <!-- JAVASCRIPT -->
    <script src="assets/js/components.js"></script>
</body>
</html>
```

---

## Archivos Creados

### Componentes HTML
- `components/header.html` - Encabezado
- `components/navbar.html` - Navegación
- `components/footer.html` - Pie de página

### Estilos CSS
- `assets/css/components.css` - Estilos de los componentes + responsive

### JavaScript
- `assets/js/components.js` - Funcionalidad interactiva

---

## Características

### Header
✅ Logo responsive  
✅ Título y tagline  
✅ Botón menú móvil  
✅ Gradiente de colores andinos  
✅ Sombra y efectos hover

### Navbar
✅ Menú sticky (fijo al scroll)  
✅ Navegación móvil con hamburguesa  
✅ Marcado del enlace activo  
✅ Transiciones suaves  
✅ Cierre automático al hacer clic en enlace

### Footer
✅ Logo blanco para fondo oscuro  
✅ Descripción de la asociación  
✅ Enlaces rápidos  
✅ Datos de contacto  
✅ Redes sociales interactivas  
✅ Copyright  
✅ Grid responsive

---

## Personalización

### Colores
Los colores principales están basados en la identidad de Sumaq Perú:
- **Marrón**: `#8B4513`
- **Dorado**: `#CD853F` y `#FFD700`
- **Gris oscuro**: `#333` y `#1a1a1a`

Para cambiar, edita `assets/css/components.css`

### Enlaces
Actualiza los datos de contacto y redes sociales en `components/footer.html`:
- Email
- Teléfono
- URLs de redes sociales
- Ubicación

### Logo
Asegúrate de tener los archivos de logo en:
- `assets/images/logo/logo.png` (versión color)
- `assets/images/logo/logo-white.png` (versión blanca)

### Iconos
Los iconos SVG deben estar en `assets/icons/`:
- `menu.svg`
- `facebook.svg`
- `instagram.svg`
- `whatsapp.svg`

---

## Funciones JavaScript Disponibles

En `assets/js/components.js` hay funciones helper que puedes usar:

```javascript
// Cerrar el menú móvil
closeMenu();

// Abrir el menú móvil
openMenu();

// Toggle (alternar) el menú
toggleMenu();
```

---

## Responsive Design

Los componentes se adaptan automáticamente a:
- 📱 Móvil (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

Breakpoints principales:
- `@media (max-width: 768px)` - Tablet y móvil
- `@media (max-width: 480px)` - Móvil pequeño

---

## Notas Importantes

1. **Cambia los datos de contacto** - Los teléfonos y emails son placeholders
2. **Actualiza URLs de redes sociales** - Las URLs actuales son ejemplos
3. **Asegura la estructura de carpetas** - Los paths deben coincidir exactamente
4. **Incluye los archivos JS y CSS** - Necesarios para funcionalidad completa

¡Listo para usar! 🎉
