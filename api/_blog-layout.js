// Piezas de página compartidas por /api/blog.js y /api/blog/[slug].js: mismo header, footer, botón flotante de
// WhatsApp y aviso de cookies que ya tiene index.html, para que el blog se vea como una sección más del sitio.
// LenovoTech no tiene un header con id="mainMenu" como el resto de la familia (usa un botón con onclick directo
// sobre #mobileMenu) — se respeta ese mismo patrón aquí en vez de forzar el de otros repos.
const HEADER = `<header><div class="wrap nav"><a href="/"><img class="logo" src="/assets/logo-servico-tecnico-reparacion-ordenador-portatil-laptop-pc-lenovo-madrid.jpg" alt="ThinkCentre LenovoTech"></a><nav><a href="/#problemas">Qué le pasa</a><a href="/#datos">Tus datos</a><a href="/#recogida">Recogida</a><a href="/#cita">Pedir cita</a><a href="/#guia">Guía</a><a href="/blog">Blog</a><a href="/#contacto">Contacto</a><a class="phone-pill" href="tel:+34918290656">+34 918 29 06 56</a></nav><button class="menu-btn" onclick="document.getElementById('mobileMenu').hidden=!document.getElementById('mobileMenu').hidden">Menú</button></div><div id="mobileMenu" class="mobile-menu" hidden><a href="/#problemas">Qué le pasa</a><a href="/#datos">Tus datos</a><a href="/#recogida">Recogida</a><a href="/#cita">Pedir cita</a><a href="/#guia">Guía</a><a href="/blog">Blog</a><a href="/#contacto">Contacto</a><a href="tel:+34918290656">+34 918 29 06 56</a></div><script>document.querySelectorAll("#mobileMenu a").forEach(function(a){a.addEventListener("click",function(){document.getElementById("mobileMenu").hidden=true;});});</script></header><div class="disclaimer-bar">Somos un servicio técnico independiente. No vemos equipos en garantía.</div>`;

const FOOTER = `<footer><div class="wrap footer"><img src="/assets/logo-servico-tecnico-reparacion-ordenador-portatil-laptop-pc-lenovo-madrid.jpg" alt="ThinkCentre"><div>LenovoTech | ThinkCentre | Servicio Técnico Lenovo · Madrid</div><a href="https://maps.app.goo.gl/jhFVft6AcvbF5AAf7" target="_blank" rel="noopener">Ubicación y reseñas</a></div></footer>`;

const FLOAT_WA = `<a class="float-wa" href="https://api.whatsapp.com/send?phone=34649970128&text=%C2%A1Hola%20LenovoTech!" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg></a>`;

const COOKIE_BANNER = `<div id="cookie-banner" class="cookie-banner" hidden>
  <p>Utilizamos cookies y tecnologías similares propias y de terceros, de sesión o persistentes, para hacer funcionar de manera segura nuestra página web y personalizar su contenido. Igualmente, utilizamos cookies para medir y obtener datos de la navegación que realizas y para ajustar la publicidad a tus gustos y preferencias. Puedes aceptar el uso de cookies a continuación.</p>
  <div class="cookie-actions">
    <button type="button" class="cookie-btn" id="cookie-accept">Aceptar</button>
    <button type="button" class="cookie-btn" id="cookie-reject">Rechazar</button>
    <a class="cookie-btn cookie-link" href="https://kelatos.com/privacy-policy/" target="_blank" rel="noopener">Política de privacidad</a>
  </div>
  <button type="button" class="cookie-close" id="cookie-close" aria-label="Cerrar">&times;</button>
</div>
<style>
.cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#22262f;color:#fff;padding:20px 56px 20px 20px;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;text-align:center;box-shadow:0 -8px 30px rgba(0,0,0,.25);font-family:Arial,Helvetica,sans-serif}
.cookie-banner:not([hidden]){display:flex}
.cookie-banner p{margin:0;max-width:900px;font-size:13.5px;line-height:1.5;flex:1 1 500px;color:#fff}
.cookie-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;flex:0 0 auto}
.cookie-btn{display:inline-block;border:0;background:#1fb6ad;color:#fff!important;font-weight:700;font-size:13.5px;padding:10px 18px;border-radius:6px;cursor:pointer;text-decoration:none;white-space:nowrap}
.cookie-btn:hover{background:#189d95}
.cookie-close{position:absolute;top:10px;right:14px;background:transparent;border:0;color:#aab0bb;font-size:22px;line-height:1;cursor:pointer;padding:6px 8px}
.cookie-close:hover{color:#fff}
@media(max-width:700px){
  .cookie-banner{padding:18px 40px 18px 16px;text-align:left}
  .cookie-banner p{font-size:12.5px}
  .cookie-actions{flex-direction:column;align-items:stretch;width:100%}
  .cookie-btn{width:100%;text-align:center;padding:12px 16px}
}
</style>
<script>
(function(){
  var KEY='kelatos_cookie_consent';
  var banner=document.getElementById('cookie-banner');
  if(!banner) return;
  var already=false;
  try{ already=!!localStorage.getItem(KEY); }catch(e){}
  if(already){ banner.hidden=true; return; }
  banner.hidden=false;
  function setConsent(value){
    try{ localStorage.setItem(KEY,value); }catch(e){}
    banner.hidden=true;
  }
  var a=document.getElementById('cookie-accept'); if(a) a.addEventListener('click',function(){setConsent('accepted')});
  var r=document.getElementById('cookie-reject'); if(r) r.addEventListener('click',function(){setConsent('rejected')});
  var c=document.getElementById('cookie-close'); if(c) c.addEventListener('click',function(){setConsent('dismissed')});
})();
</script>`;

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function paginaLayout({ title, description, canonical, ogImage, body, tipo = "website" }) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || "")}">
<link rel="canonical" href="${esc(canonical)}">
<link rel="icon" href="/assets/ico-servico-tecnico-reparacion-ordenador-portatil-laptop-pc-lenovo-madrid.jpg">
<link rel="stylesheet" href="/assets/blog.css">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description || "")}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:type" content="${tipo}">
${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">` : ""}
<meta name="robots" content="index,follow">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J5ECPSYT2D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J5ECPSYT2D');</script>
</head><body>
${HEADER}
<main>${body}</main>
${FOOTER}
${FLOAT_WA}
${COOKIE_BANNER}
</body></html>`;
}

function tarjetaArticulo(p) {
  return `<a class="blog-card" href="/blog/${esc(p.slug)}">
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">` : `<div class="blog-card-noimg" aria-hidden="true"></div>`}
    <div class="blog-card-body">
      <span class="blog-cat">${esc(p.category || "")}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description || "")}</p>
      <span class="blog-meta">${esc(p.date || "")} · ${esc(p.readingMinutes || 1)} min</span>
    </div>
  </a>`;
}

function pagina404() {
  return paginaLayout({
    title: "Artículo no encontrado | LenovoTech",
    description: "El artículo que buscas no existe o ha sido movido.",
    canonical: "https://thinkcentre.es/blog",
    body: `<section class="blog-hero"><div class="wrap"><h1 class="title">Artículo no encontrado</h1><p class="lead">Puede que el enlace esté caducado o ya no exista. <a href="/blog">Vuelve al blog</a>.</p></div></section>`,
  });
}

module.exports = { paginaLayout, tarjetaArticulo, pagina404, esc };
