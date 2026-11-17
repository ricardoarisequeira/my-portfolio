import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { entryForPath, pageTitle, plain } from "./history";
import { setServerUrl } from "./router";

export { routes, person } from "./history";

export function render(url) {
  setServerUrl(url);
  const entry = entryForPath(url);
  return {
    html: renderToString(<App />),
    title: pageTitle(entry),
    description: !entry
      ? "This version of Ricardo was never released."
      : url === "/"
        ? `The release notes of Ricardo Sequeira. ${plain(entry.summary)}`
        : plain(entry.summary),
    canonical: entry?.path ?? null,
  };
}
