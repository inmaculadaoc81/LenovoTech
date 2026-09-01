LENOVOTECH / THINKCENTRE — DESPLIEGUE EN VERCEL

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 3/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola LenovoTech!" en el CTA del hero y en el botón
  flotante. (Los mensajes de bienvenida del chatbot n8n, "¡Hola! 👋
  Soy Fátima...", no se han tocado: no son el mensaje de WhatsApp, son
  el saludo inicial del propio chat.)
- BUG REAL — confirmado el bug que describió el cliente: el menú móvil
  (#mobileMenu, con atributo hidden) no tenía ningún listener que lo
  cerrara al pulsar un enlace, así que se quedaba abierto tras
  navegar. Añadido un script que oculta el menú al hacer clic en
  cualquiera de sus enlaces.
- Verificado: los dos únicos iconos con width/height fijos en el hero
  (22x22 sobre viewBox 32x32, y 20x20 sobre viewBox 24x24) son
  cuadrados en ambos casos, sin deformación.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — botones del hero (.cta) con border-radius de solo 15px y
  sin oscurecimiento en hover (solo tenían un efecto de elevación
  translateY). Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en whatsapp/pickup y fondo negro sólido en
  el botón de teléfono al pasar el ratón, manteniendo el efecto de
  elevación ya existente.

Dominio:
https://thinkcentre.es/

⚠️ AVISO — COLISIÓN DE DOMINIO (no resuelta, no tocada):
El repositorio "lenovorepair" (LenovoRepair® — Servicio Técnico y
Reparación Lenovo en VALLADOLID) usa exactamente el mismo dominio
thinkcentre.es. Mismo patrón que se dio con DysonValladolid y
ThermomixValladolid: probablemente la versión de Valladolid copió por
error el dominio de este repositorio (Madrid). No se ha tocado nada
aquí; pendiente de confirmar el dominio real de lenovorepair cuando se
procese ese repositorio.

Google Analytics:
G-J5ECPSYT2D

Variables SMTP compartidas necesarias en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[tu contraseña SMTP configurada en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

IMPORTANTE:
- El correo no aparece visible en la web. Solo se utiliza en /api/contacto.
- Tras añadir o modificar variables, haz Redeploy.
- Para comprobar las variables, abre /api/contacto. Deben aparecer en true.
- El formulario se queda en la página y envía mediante fetch().
- Se han incluido los tres CTA del hero, Google Business/Maps, Cal.com, YouTube,
  Google Analytics, diagnóstico gratuito y botones flotantes separados.

CHATBOT:
Se incluye la interfaz visual y las posiciones/z-index consolidadas:
ventana > botón del bot > WhatsApp. Ya conectado al webhook real de
n8n compartido de la familia (commit anterior "Conecta el chatbot al
flujo n8n real"), en español.

REVISIÓN ADICIONAL (esta pasada):
- Ya estaba bien: Google Analytics (coincide con el código dado),
  schema.org LocalBusiness completo (areaServed, sameAs), meta og:*/
  robots, webhook del chat ya real y en español, api/contacto.js con
  SMTP + nodemailer. No se ha modificado ninguno de estos.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar /
  Política de privacidad → https://kelatos.com/privacy-policy/), con
  diseño apilado a ancho completo en móvil.
- Sección SEO: no existía. Añadida sección "Guía" (id="guia", enlazada
  en el menú de escritorio y móvil) con contenido propio sobre averías
  habituales en equipos Lenovo.
- Borde blanco del botón del chat: faltaba. Añadido.
- .phone-pill: el texto largo ("Atención Telefónica 24 horas 365
  días") deformaba la píldora del menú. Acortado a solo el número
  (mismo número, +34 918 29 06 56) y añadido white-space:nowrap como
  salvaguarda.
- H1 de portada reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales), incluye la marca: "Tu Lenovo no
  funciona. Nosotros nos encargamos de repararlo." Tamaño del H1
  aumentado ligeramente: clamp(42-68px) → clamp(46-74px) en
  escritorio, 43px → 48px en móvil.

REVISIÓN ADICIONAL — 2 BUGS REALES (a petición del cliente, "se ve mal
en móvil"):
- El panel #mobileMenu no usaba ningún estilo real: era un div con
  solo padding/background inline, sin borde ni bloques por enlace, así
  que al abrirlo los enlaces aparecían como texto plano separado por
  "·" en dos líneas irregulares (justo lo que se veía en la captura).
  Reescrito con la clase .mobile-menu estándar de la familia (enlaces
  en bloque, con separador entre ellos), y añadido también el
  teléfono al final del panel.
- El icono del chat n8n aparecía flotando a media página, no encima
  del botón de WhatsApp: los selectores CSS (.chat-window-toggle,
  .chat-window-wrapper) no estaban delimitados a #n8n-chat ni tenían
  el fallback [class*="..."] (mismo problema encontrado en el
  proyecto Next.js "fixyourpc"), así que probablemente no coincidían
  con las clases reales que pinta el widget y este caía en su
  posicionamiento por defecto. Reescrito con el patrón robusto de la
  familia (#n8n-chat + [class*="..."]) y bottom recalculado para que
  quede justo encima de .float-wa (bottom:100px escritorio, 94px
  móvil, frente a los 22px de WhatsApp).

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona" usada en varios repos.
  Reescrito con síntoma específico y estructura distinta: "Tu Lenovo
  se bloquea o no arranca. Lo solucionamos." (9 palabras).
- BUG REAL — dos textos decorativos gigantes sin reducción de tamaño
  en móvil/tablet: ".problems:after" ("LENOVO", 180px) y
  ".data-art:before" ("DATOS", 115px). Añadida reducción en tablet
  (100px/75px) y móvil (56px/46px). El de "THINKCENTRE" ya se
  ocultaba en móvil, no se ha tocado.
- BUG REAL — ninguno de los dos botones CTA del hero (WhatsApp ni
  teléfono) tenía icono. Añadidos ambos (verificado con cuidado el
  cierre de las etiquetas </a>, tras el fallo detectado en TechMac).
- BUG REAL — el formulario no tenía ninguna casilla de consentimiento
  de política de privacidad. Añadida, con enlace a
  https://kelatos.com/privacy-policy/ en azul y subrayado.
- Añadida franja de aviso de servicio técnico independiente debajo
  del menú (no existía).
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Verificado: schema.org ya usaba correctamente el teléfono de la
  caja de información; formulario correctamente conectado a
  /api/contacto.
