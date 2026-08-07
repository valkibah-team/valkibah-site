# Valkibah — Sitio web

Identidad digital de Valkibah: Venture Builder que conecta personas, ideas
y talento para crear productos, experiencias y negocios con impacto.

## Estructura del proyecto

```
valkibah-site/
├── index.html              → página principal (todas las secciones)
├── css/
│   ├── styles.css          → design system: colores, tipografía, espaciado
│   └── components.css      → estilos de cada sección (navbar, hero, cards…)
├── js/
│   └── main.js              → tema claro/oscuro, menú móvil, animaciones, formulario
├── assets/
│   └── img/
│       ├── logo-valkibah.png
│       ├── logo-valpa.png
│       ├── logo-mokino.png
│       └── team/            → fotografías del equipo
└── README.md
```

No hay build ni dependencias: es HTML, CSS y JS puros. Se puede abrir
`index.html` directamente en el navegador para revisarlo en local.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `valkibah-site`).
2. Sube el contenido de esta carpeta a la raíz del repositorio
   (`index.html` debe quedar en la raíz, no dentro de una subcarpeta).
3. Ve a **Settings → Pages**.
4. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/root`.
5. Guarda. GitHub publicará el sitio en unos minutos en una URL como:
   `https://tu-usuario.github.io/valkibah-site/`

Si más adelante quieres un dominio propio (por ejemplo `valkibah.com`),
se agrega un archivo `CNAME` en la raíz con el dominio, y se configura el
DNS del dominio apuntando a GitHub Pages.

## Reemplazar contenido pendiente

- **Fotos del equipo**: agrega los archivos en `assets/img/team/` y
  reemplaza el bloque `.team-photo-placeholder` de esa persona en
  `index.html` por una etiqueta `<img>` (usa el bloque de Eduardo Rico
  como referencia).
- **Colaboradores**: reemplaza los `<div class="colaborador-slot">`
  vacíos en la sección `#colaboradores` por `<img>` con el logo de cada
  aliado.
- **Testimonios**: reemplaza las tarjetas `.testimonio-ghost` en la
  sección `#testimonios` por el contenido real (cita, nombre, cargo, foto).

## Formulario de contacto

El formulario actual arma un `mailto:` con los datos capturados, ya que
el sitio es estático y no tiene backend propio. Si más adelante quieres
que los mensajes lleguen sin que la persona tenga que confirmar el envío
desde su correo, conecta el `<form id="contactForm">` a un servicio como
[Formspree](https://formspree.io) o [Getform](https://getform.io), o a un
endpoint propio, y ajusta el manejador en `js/main.js`.

## Modo claro / oscuro

El sitio inicia en el tema que prefiera el sistema operativo de la
persona, y recuerda la elección manual (botón en la barra de navegación)
en `localStorage`.
