LENOVOTECH / THINKCENTRE — DESPLIEGUE EN VERCEL

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
