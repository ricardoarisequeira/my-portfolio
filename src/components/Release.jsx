import { asset, dependencies, latest, neighbours, plain } from "../history";
import { setTldr } from "../router";
import { Inline, Link } from "./Link";

const GROUPS = {
  breaking: { label: "Breaking", accent: "magenta" },
  added: { label: "Added", accent: "green" },
  changed: { label: "Changed", accent: "sky" },
  known: { label: "Known issues", accent: "yellow" },
};
const ORDER = ["breaking", "added", "changed", "known"];

const accent = (name) => ({ "--accent": `var(--${name})` });

export function Tabs({ entry, tldr }) {
  return (
    <div className="tabs">
      <span className="tab">{entry?.tab ?? "main"}</span>
      <div className="switch" role="group" aria-label="Detail">
        <button type="button" aria-pressed={tldr} onClick={() => setTldr(true)}>
          TL;DR
        </button>
        <button type="button" aria-pressed={!tldr} onClick={() => setTldr(false)}>
          Full notes
        </button>
      </div>
    </div>
  );
}

function Notice({ entry }) {
  if (entry.latest) return null;
  const branch = entry.kind === "branch";
  return (
    <div className={`notice ${branch ? "notice-branch" : "notice-old"}`}>
      <p>
        {branch
          ? "You are on a side branch. It runs alongside the day job and has not been merged into main."
          : "You are reading an old version of Ricardo. Some of this has been improved since."}
      </p>
      <Link className="button" to={latest.path}>
        {branch ? "Back to main" : `Go to ${latest.version}, the latest`}
      </Link>
    </div>
  );
}

function Changelog({ notes }) {
  const groups = [...notes].sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));
  return groups.map((g) => (
    <section className="group" key={g.type}>
      <h2 className="tag" style={accent(GROUPS[g.type].accent)}>
        <span>{GROUPS[g.type].label}</span>
      </h2>
      <ul className="items">
        {g.items.map((text) => (
          <li key={text}>
            <Inline text={text} />
          </li>
        ))}
      </ul>
    </section>
  ));
}

// An older version lists the stack it ran on. The latest release lists
// everything installed so far.
function Stack({ entry }) {
  if (!entry.latest) {
    if (!entry.stack) return null;
    return (
      <section className="group">
        <h2 className="tag" style={accent("teal")}>
          <span>Dependencies</span>
        </h2>
        <ul className="deps">
          {entry.stack.map((name) => (
            <li key={name} className="dep">
              {name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <section className="group">
      <h2 className="tag" style={accent("teal")}>
        <span>Dependencies</span>
      </h2>
      <div className="dep-table">
        <p className="dep-lead">Everything installed so far.</p>
        {dependencies.map(({ group, items }) => (
          <div className="dep-row" key={group}>
            <h3>{group}</h3>
            <ul className="deps">
              {items.map((name) => (
                <li key={name} className="dep">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Photos({ photos }) {
  return (
    <div className="photos">
      {photos.map((p) => (
        <img
          key={p.src}
          src={asset(p.src)}
          srcSet={`${asset(p.src.replace(".webp", "-320.webp"))} 320w, ${asset(p.src)} 600w`}
          sizes="(max-width: 640px) 45vw, 180px"
          alt={p.alt}
          width="600"
          height="750"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

const name = (e) => (e.kind === "branch" ? `/${e.slug}` : `${e.version} ${e.name}`);

function Pager({ entry }) {
  const { older, newer, forkedFrom } = neighbours(entry);
  const links = [
    older && { to: older, hint: "Older", side: "l" },
    forkedFrom && { to: forkedFrom, hint: "Forked from", side: "l" },
    newer && { to: newer, hint: newer.latest ? "Newer, the latest" : "Newer", side: "r" },
  ].filter(Boolean);
  if (!links.length) return null;
  return (
    <nav className="pager" aria-label="Older and newer versions">
      {links.map((l) => (
        <Link key={l.hint} to={l.to.path} className={l.side}>
          <small>{l.hint}</small>
          <b>{name(l.to)}</b>
        </Link>
      ))}
    </nav>
  );
}

export default function Release({ entry, tldr, direction, headingRef }) {
  return (
    <article className="sheet" style={accent(entry.accent)}>
      <Notice entry={entry} key={entry.kind} />
      <h1 className="title" tabIndex={-1} ref={headingRef}>
        Ricardo{" "}
        <span className={`badge ${entry.kind}`} key={entry.slug}>
          {entry.badge}
        </span>
      </h1>
      <div className="swap" key={entry.slug} data-direction={direction}>
        <p className="when">{entry.when}</p>
        <p className={plain(entry.summary).length > 140 ? "sum long" : "sum"}>
          <Inline text={entry.summary} />
        </p>
        <Full open={!tldr}>
          <Changelog notes={entry.notes} />
          <Stack entry={entry} />
          {entry.photos && <Photos photos={entry.photos} />}
        </Full>
      </div>
      <Pager entry={entry} />
    </article>
  );
}

// The full notes fold away in TL;DR mode. `inert` takes them out of the tab
// order and the accessibility tree while they are closed.
function Full({ open, children }) {
  return (
    <div className="full" inert={!open}>
      <div className="full-inner">{children}</div>
    </div>
  );
}

export function NotFound() {
  return (
    <article className="sheet" style={accent("yellow")}>
      <h1 className="title" tabIndex={-1}>
        Ricardo{" "}
        <span className="badge">404</span>
      </h1>
      <p className="sum">This version of Ricardo was never released.</p>
      <div className="pager">
        <Link to={latest.path} className="l">
          <small>Latest release</small>
          <b>{name(latest)}</b>
        </Link>
      </div>
    </article>
  );
}
