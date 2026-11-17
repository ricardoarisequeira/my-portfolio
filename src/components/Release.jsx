import { asset, branchEntries, latest, neighbours, person } from "../history";
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

// The last letter of "Ricardo" is the mascot. Awake on the current release,
// asleep on old versions, glancing sideways from a branch.
function Face({ mood }) {
  return (
    <span className="face" data-mood={mood}>
      <span className="sr-only">o</span>
      <i aria-hidden="true" />
      <i aria-hidden="true" />
    </span>
  );
}

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

function Parallel() {
  return (
    <section className="group">
      <h2 className="tag" style={accent("periwinkle")}>
        <span>In parallel</span>
      </h2>
      <ul className="items branches">
        {branchEntries.map((b) => (
          <li key={b.slug}>
            <Link to={b.path}>Ricardo /{b.slug}</Link>
            <span>
              {b.pitch} {b.status}.
            </span>
          </li>
        ))}
      </ul>
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

function Request() {
  return (
    <section className="request" aria-labelledby="request">
      <h2 id="request">Request a feature for 7.0</h2>
      <p>Ideas, questions and bug reports go straight to the maintainer.</p>
      <div className="contact">
        <a className="button" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        {person.links.map((l) => (
          <a key={l.label} href={l.url}>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Release({ entry, tldr, direction, headingRef }) {
  const mood = entry.latest ? "awake" : entry.kind === "branch" ? "aside" : "asleep";
  return (
    <article className="sheet" style={accent(entry.accent)}>
      <Notice entry={entry} key={entry.kind} />
      <h1 className="title" tabIndex={-1} ref={headingRef} aria-label={`Ricardo ${entry.badge}`}>
        <span className="word">
          Ricard
          <Face mood={mood} />
        </span>{" "}
        <span className={`badge ${entry.kind}`} key={entry.slug}>
          {entry.badge}
        </span>
      </h1>
      <div className="swap" key={entry.slug} data-direction={direction}>
        <p className="when">{entry.when}</p>
        <p className="sum">
          <Inline text={entry.summary} />
        </p>
        <Full open={!tldr}>
          <Changelog notes={entry.notes} />
          {entry.latest && <Parallel />}
          {entry.photos && <Photos photos={entry.photos} />}
        </Full>
      </div>
      <Pager entry={entry} />
      {entry.latest && <Request />}
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
      <h1 className="title" tabIndex={-1} aria-label="Ricardo 404">
        <span className="word">
          Ricard
          <Face mood="asleep" />
        </span>{" "}
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
