import { useRef, useState } from "react";
import { ancestry, entries, laneCount, laneOf, segments } from "../history";
import { navigate } from "../router";
import { Link } from "./Link";

// The history graph is the navigation. On wide screens main runs down the rail
// with branches forking off to the right; on phones the same graph lies on its
// side, oldest on the left, so every node fits without scrolling.

const ROW = 46; // vertical: px per row
const LANE = 22; // vertical: px per lane
const X0 = 11; // vertical: centre of the main lane
const TRACK = 24; // horizontal: px per lane
const N = entries.length;

const vertical = ({ t, l }) => `${X0 + l * LANE} ${t * ROW + ROW / 2}`;
const horizontal = ({ t, l }) =>
  `${(N - 1 - t + 0.5) * 100} ${(laneCount - 1 - l) * TRACK + TRACK / 2}`;

function d(seg, pt) {
  if (seg.kind === "line") return `M${pt(seg.from)} L${pt(seg.to)}`;
  const mid = (seg.from.t + seg.bend.t) / 2;
  const c1 = pt({ t: mid, l: seg.from.l });
  const c2 = pt({ t: mid, l: seg.bend.l });
  return `M${pt(seg.from)} C${c1} ${c2} ${pt(seg.bend)} L${pt(seg.to)}`;
}

function Lines({ pt, lit, className, ...size }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" {...size}>
      {segments.map((seg) => (
        <path
          key={seg.id}
          d={d(seg, pt)}
          className={lit.has(seg.id) ? "seg lit" : "seg"}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

// Up and right are newer, down and left are older, in both orientations.
const STEP = { ArrowUp: -1, ArrowRight: -1, ArrowDown: 1, ArrowLeft: 1 };

export default function Graph({ current }) {
  const [hover, setHover] = useState(null);
  const links = useRef([]);
  const lit = hover ?? current ? ancestry(hover ?? current) : new Set();

  function onKeyDown(e) {
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    const from = links.current.indexOf(document.activeElement);
    let to;
    if (e.key in STEP) to = from + STEP[e.key];
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = N - 1;
    else return;
    e.preventDefault();
    e.stopPropagation();
    const next = entries[Math.max(0, Math.min(N - 1, to))];
    links.current[next.row].focus();
    navigate(next.path, { focus: false });
  }

  return (
    <div
      className="graph"
      style={{ "--rows": N, "--lanes": laneCount, "--row": `${ROW}px`, "--lane": `${LANE}px`, "--track": `${TRACK}px` }}
      onPointerLeave={() => setHover(null)}
    >
      <Lines className="lines-v" pt={vertical} lit={lit} width={X0 * 2 + (laneCount - 1) * LANE} height={N * ROW} />
      <Lines
        className="lines-h"
        pt={horizontal}
        lit={lit}
        viewBox={`0 0 ${N * 100} ${laneCount * TRACK}`}
        preserveAspectRatio="none"
      />
      <ul onKeyDown={onKeyDown}>
        {entries.map((e) => {
          const on = current?.slug === e.slug;
          return (
            <li key={e.slug} style={{ "--r": e.row, "--l": laneOf(e) }}>
              <Link
                to={e.path}
                focus={false}
                ref={(el) => (links.current[e.row] = el)}
                tabIndex={on || (!current && e.latest) ? 0 : -1}
                aria-current={on ? "page" : undefined}
                className={[on && "on", lit.has(e.slug) && "lit", e.kind].filter(Boolean).join(" ")}
                onPointerEnter={() => setHover(e)}
              >
                <span className="dot" aria-hidden="true" />
                <span className="num">{e.label}</span>
                <span className="long">
                  {e.kind === "branch" ? <em> branch</em> : ` ${e.name}`}
                  {e.latest && <em> latest</em>}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
