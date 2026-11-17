import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";

const content = JSON.parse(readFileSync(new URL("./src/content.json", import.meta.url), "utf8"));

// Version URLs like /5.0 look like files with a ".0" extension, so the dev and
// preview servers would 404 on them. Send every known page to its HTML.
const slugs = new Set([
  ...content.main.map((v) => v.version),
  ...content.branches.map((b) => b.slug),
]);

function pages({ prerendered }) {
  return (req, _res, next) => {
    const [path, query] = req.url.split("?");
    const slug = path.replace(/^\/+|\/+$/g, "");
    if (slugs.has(slug)) {
      const html = prerendered ? `/${slug}/index.html` : "/index.html";
      req.url = query ? `${html}?${query}` : html;
    }
    next();
  };
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "version-pages",
      configureServer(server) {
        server.middlewares.use(pages({ prerendered: false }));
      },
      configurePreviewServer(server) {
        server.middlewares.use(pages({ prerendered: true }));
      },
    },
  ],
});
