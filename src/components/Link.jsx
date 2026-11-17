import { onLinkClick } from "../router";

// A real <a href>, so it works without JS, opens in a new tab with a modifier
// key and is announced as a link. Plain clicks stay inside the app.
export function Link({ to, focus, children, ...props }) {
  return (
    <a href={to} onClick={(e) => onLinkClick(e, to, { focus })} {...props}>
      {children}
    </a>
  );
}

const MARKUP = /\[([^\]]+)\]\(([^)]+)\)/g;

// Changelog lines are plain strings with [label](href) links in them.
export function Inline({ text }) {
  const out = [];
  let last = 0;
  for (const m of text.matchAll(MARKUP)) {
    const [whole, label, href] = m;
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} to={href}>{label}</Link>
      ) : (
        <a key={m.index} href={href}>{label}</a>
      )
    );
    last = m.index + whole.length;
  }
  out.push(text.slice(last));
  return out;
}
