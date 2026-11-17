import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Graph from "./components/Graph";
import { Link } from "./components/Link";
import Release, { NotFound, Tabs } from "./components/Release";
import { entries, entryForPath, pageTitle, person } from "./history";
import { lastNavigation, navigate, useUrl } from "./router";

// useLayoutEffect warns during server rendering; the prerender never runs effects.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function isTyping(el) {
  return el?.closest?.("input, textarea, select, [contenteditable=true]");
}

export default function App() {
  const { pathname, tldr } = useUrl();
  const entry = entryForPath(pathname);
  const heading = useRef(null);
  const [announce, setAnnounce] = useState("");

  // Which way the visitor travelled, so the notes slide in from that side.
  const previousRow = useRef(entry?.row);
  const direction =
    entry && previousRow.current !== undefined ? Math.sign(entry.row - previousRow.current) : 0;

  useEffect(() => {
    if (previousRow.current === entry?.row) return;
    previousRow.current = entry?.row;
    document.title = pageTitle(entry);
    if (!entry) return;
    setAnnounce(`Ricardo ${entry.badge}, ${entry.name}`);
    if (!lastNavigation().focus) return;
    const h = heading.current;
    const sheetTop = h?.closest("main").getBoundingClientRect().top ?? 0;
    if (sheetTop < 0) h.closest("main").scrollIntoView({ block: "start" });
    h?.focus({ preventScroll: true });
  }, [entry]);

  // The TL;DR state lives on <html> so the prerendered page can set it before
  // the first paint (see index.html).
  useIsoLayoutEffect(() => {
    document.documentElement.classList.toggle("tldr", tldr);
  }, [tldr]);

  // Left and right walk the history from anywhere on the page. Up and down are
  // left alone so the page still scrolls; inside the graph all four work.
  useEffect(() => {
    function onKey(e) {
      if (e.defaultPrevented || e.altKey || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (isTyping(e.target) || !entry) return;
      const next = entries[entry.row + (e.key === "ArrowLeft" ? 1 : -1)];
      if (next) navigate(next.path, { focus: false });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [entry]);

  return (
    <div className="page">
      <a className="skip" href="#notes">
        Skip to the release notes
      </a>
      <div className="wrap">
        <header className="rail">
          <p className="who">
            <Link to="/">{person.name}</Link>
            <span>release history</span>
          </p>
          <nav aria-label="Release history">
            <Graph current={entry} />
          </nav>
          <p className="hint">
            <kbd>←</kbd> <kbd>→</kbd> walk the history
          </p>
        </header>
        <main id="notes" className="notes">
          <Tabs entry={entry} tldr={tldr} />
          {entry ? (
            <Release entry={entry} tldr={tldr} direction={direction} headingRef={heading} />
          ) : (
            <NotFound />
          )}
        </main>
      </div>
      <p className="sr-only" aria-live="polite">
        {announce}
      </p>
    </div>
  );
}
