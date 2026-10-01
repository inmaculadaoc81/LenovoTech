// GET /blog (vía rewrite de vercel.json) — listado de artículos publicados, leídos en vivo de la API de Kelatos.
const { paginaLayout, tarjetaArticulo } = require("./_blog-layout");

const API_BASE = process.env.KELATOS_BLOG_API || "https://db.affirmatechnology.com/kelatos-api";
const ORG_KEY = "servicio_tecnico_lenovo";

module.exports = async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/publico/blog?org=${ORG_KEY}`);
    const data = await r.json().catch(() => null);
    const posts = data && data.ok && Array.isArray(data.posts) ? data.posts : [];
    const html = paginaLayout({
      title: "Blog | LenovoTech Servicio Técnico Lenovo",
      description: "Guías sobre averías, mantenimiento y reparación de ordenadores portátiles y de sobremesa Lenovo.",
      canonical: "https://thinkcentre.es/blog",
      body: `<section class="blog-hero"><div class="wrap"><div class="kicker">Blog LenovoTech</div><h1 class="title">Averías, mantenimiento y reparación de tu Lenovo</h1><p class="lead">Guías claras para entender qué le pasa a tu portátil o sobremesa Lenovo — y cuándo conviene repararlo.</p></div></section>
<section class="blog-list"><div class="wrap">${
        posts.length ? `<div class="blog-grid">${posts.map(tarjetaArticulo).join("")}</div>` : `<p class="lead">Todavía no hay artículos publicados. Vuelve pronto.</p>`
      }</div></section>`,
    });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=120");
    res.status(200).send(html);
  } catch (e) {
    console.error(e);
    res.status(502).send("No se pudo cargar el blog. Inténtalo de nuevo en unos minutos.");
  }
};
