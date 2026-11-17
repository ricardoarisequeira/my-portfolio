// Renders every page to static HTML after the client and server builds, so each
// version and branch has its own file, title and description, and survives a
// refresh on any static host.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssr = join(root, "dist-ssr");

const { render, routes, person } = await import(join(ssr, "entry-server.js"));
const template = await readFile(join(dist, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const canonicals = new Set();

function page(url) {
  const { html, title, description, canonical } = render(url);
  if (canonical) canonicals.add(canonical);
  const meta = [
    `<meta name="description" content="${escape(description)}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:image:alt" content="${escape(`Ricardo, the release notes of ${person.name}`)}" />`,
    canonical &&
      `<link rel="canonical" href="${person.site}${canonical}" />\n    <meta property="og:url" content="${person.site}${canonical}" />`,
    !canonical && `<meta name="robots" content="noindex" />`,
  ].filter(Boolean);
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace("<!--meta-->", meta.join("\n    "))
    .replace("<!--app-->", html);
}

async function write(file, contents) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents);
}

for (const url of routes) {
  const file = url === "/" ? join(dist, "index.html") : join(dist, url.slice(1), "index.html");
  await write(file, page(url));
}
await write(join(dist, "404.html"), page("/404"));

// Netlify: serve /5.0 from /5.0/index.html without a redirect to /5.0/.
const rewrites = routes.filter((r) => r !== "/").map((r) => `${r}  ${r}/index.html  200`);
await write(join(dist, "_redirects"), rewrites.join("\n") + "\n");

const today = new Date().toISOString().slice(0, 10);
await write(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [...canonicals]
      .map((r) => `  <url><loc>${person.site}${r}</loc><lastmod>${today}</lastmod></url>`)
      .join("\n") +
    `\n</urlset>\n`
);

await rm(ssr, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages and 404.html`);
