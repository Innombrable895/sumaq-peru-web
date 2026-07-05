# Asociación Cultural Sumaq Perú – Guía Inicial del Proyecto Web

## Estructura recomendada del proyecto

```plaintext
sumaq-peru-web/
│
├── index.html                 # Inicio
├── nosotros.html              # Historia / misión
├── actividades.html           # Eventos y talleres
├── galeria.html               # Fotos y videos
├── contacto.html              # Contacto
├── noticias.html              # Noticias o blog (opcional)
│
├── assets/                    # Recursos de la web
│   │
│   ├── css/
│   │   ├── style.css          # Estilos principales
│   │   ├── responsive.css     # Adaptación móvil
│   │   ├── variables.css      # Colores y fuentes
│   │   └── animations.css     # Animaciones
│   │
│   ├── js/
│   │   ├── main.js            # JS principal
│   │   ├── menu.js            # Navbar / menú móvil
│   │   ├── gallery.js         # Galería
│   │   ├── slider.js          # Carrusel
│   │   └── form.js            # Formulario contacto
│   │
│   ├── images/
│   │   │
│   │   ├── logo/
│   │   │   ├── logo.png
│   │   │   ├── logo-white.png
│   │   │   └── favicon.png
│   │   │
│   │   ├── hero/
│   │   ├── eventos/
│   │   ├── galeria/
│   │   ├── equipo/
│   │   └── backgrounds/
│   │
│   ├── icons/
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── whatsapp.svg
│   │   └── menu.svg
│   │
│   └── fonts/
│
├── components/
│   ├── header.html
│   ├── navbar.html
│   ├── footer.html
│   └── social-links.html
│
├── docs/
│   ├── estatutos.pdf
│   ├── programas.pdf
│   └── calendario.pdf
│
├── backend/
│   ├── sendMail.php
│   └── database/
│
├── favicon.ico
├── README.md
└── .gitignore
```

---

## ¿Qué es `assets/`?

`assets/` es una carpeta que almacena todos los recursos de la web que no son páginas HTML.

Ejemplo:

```plaintext
assets/
│
├── css/        # estilos
├── js/         # JavaScript
├── images/     # imágenes y logo
├── icons/      # iconos
└── fonts/      # fuentes
```

Ejemplo de uso:

### CSS

```html
<link rel="stylesheet" href="assets/css/style.css">
```

### Imagen

```html
<img src="assets/images/logo.png" alt="Logo">
```

---

## Archivos del logo

### `logo.png`
Logo principal de la asociación.

Se usa en:

- Header
- Navbar
- Página principal
- Footer

Ejemplo:

```html
<img src="assets/images/logo/logo.png" alt="Sumaq Perú">
```

---

### `logo-white.png`
Versión blanca o clara del logo.

Se usa cuando el fondo es oscuro.

Ejemplo:

- Footer oscuro
- Banner oscuro
- Menú con fondo oscuro

Ejemplo:

```html
<img src="assets/images/logo/logo-white.png" alt="Sumaq Perú">
```

---

### `favicon.ico`
Mini icono del navegador.

Se ve en:

- Pestañas
- Favoritos
- Historial

Ejemplo:

```html
<link rel="icon" href="favicon.ico">
```

---

## Estructura mínima para empezar rápido

```plaintext
sumaq-peru-web/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── logo/
│
└── favicon.ico
```

---

## Logo creado para Asociación Cultural Sumaq Perú

Se generaron tres variantes:

1. `logo.png` → Logo principal
2. `logo-white.png` → Logo blanco para fondos oscuros
3. `favicon.ico` → Icono para navegador

Inspirado en elementos culturales peruanos y andinos:

- Montañas
- Ave estilizada
- Patrones textiles andinos
- Colores rojo, dorado y tonos tierra
