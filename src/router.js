import { useSyncExternalStore } from "react";

// A router for a flat set of pages. Versions push history entries so the back
// button walks them; the TL;DR switch replaces the current entry so it does not.

const listeners = new Set();
let serverUrl = "/";
let lastNav = { focus: false };

const emit = () => listeners.forEach((fn) => fn());

function subscribe(fn) {
  listeners.add(fn);
  const onPop = () => {
    lastNav = { focus: true };
    fn();
  };
  window.addEventListener("popstate", onPop);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("popstate", onPop);
  };
}

const read = () => window.location.pathname + window.location.search;

export function setServerUrl(url) {
  serverUrl = url;
}

export function useUrl() {
  const url = useSyncExternalStore(subscribe, read, () => serverUrl);
  const [pathname, search = ""] = url.split("?");
  return { pathname, tldr: new URLSearchParams(search).has("tldr") };
}

export const lastNavigation = () => lastNav;

const withTldr = (path, tldr) => (tldr ? `${path}?tldr` : path);

// `focus` moves keyboard focus to the new page heading. The graph turns it off
// so arrow keys can keep walking the history from where they are.
export function navigate(path, { focus = true } = {}) {
  const tldr = new URLSearchParams(window.location.search).has("tldr");
  const next = withTldr(path, tldr);
  if (next === read()) return;
  lastNav = { focus };
  window.history.pushState(null, "", next);
  emit();
}

export function setTldr(on) {
  window.history.replaceState(null, "", withTldr(window.location.pathname, on));
  emit();
}

// Plain left clicks on internal links go through the router; anything with a
// modifier key (new tab, new window) is left to the browser.
export function onLinkClick(event, path, options) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(path, options);
}
