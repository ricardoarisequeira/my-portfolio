import content from "./content.json";

// Everything the site shows is derived from content.json. Adding a version or a
// branch is a data change: rows, lanes, routes and the graph follow from it.

export const person = content.person;

const images = import.meta.glob("./assets/**/*.{webp,png,jpg}", {
  eager: true,
  import: "default",
});
export const asset = (src) => images[`./assets/${src}`];

const latestVersion = content.main[0].version;

// Rows of the history graph, top to bottom: open branches first (their tips are
// the newest commits), then main from the current release down to 1.0.
export const entries = [
  ...content.branches.map((b) => ({
    ...b,
    kind: "branch",
    path: `/${b.slug}`,
    label: b.slug,
    badge: `/${b.slug}`,
    tab: `branch: ${b.slug}`,
  })),
  ...content.main.map((v) => ({
    ...v,
    kind: "main",
    slug: v.version,
    path: v.version === latestVersion ? "/" : `/${v.version}`,
    label: v.version,
    badge: v.version,
    tab: "main",
    latest: v.version === latestVersion,
  })),
].map((e, row) => ({ ...e, row }));

export const latest = entries.find((e) => e.latest);
export const mainEntries = entries.filter((e) => e.kind === "main");
export const branchEntries = entries.filter((e) => e.kind === "branch");

const bySlug = new Map(entries.map((e) => [e.slug, e]));
export const bySlugOrNull = (slug) => bySlug.get(slug) ?? null;

// Every URL that serves a page. The latest release answers on "/" and on its
// own number, so a link to /6.0 keeps meaning 6.0 after 7.0 ships.
export const routes = ["/", ...entries.map((e) => `/${e.slug}`)];

export function entryForPath(pathname) {
  const slug = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, "");
  if (slug === "") return latest;
  return bySlug.get(slug) ?? null;
}

// Older and newer only make sense along main. A branch points back to where it
// forked and to the latest release.
export function neighbours(entry) {
  if (entry.kind === "branch") {
    return { forkedFrom: bySlug.get(entry.forkedFrom) };
  }
  const i = mainEntries.indexOf(entry);
  return { older: mainEntries[i + 1], newer: mainEntries[i - 1] };
}

// Graph geometry, in abstract units: `t` is the row (0 at the top), `l` is the
// lane (0 is main). Each orientation maps these to pixels or percentages.
function forkRow(branch) {
  return bySlug.get(branch.forkedFrom).row;
}

// Branches that fork later sit in inner lanes, so no two lines ever cross.
const lanes = new Map(
  [...branchEntries]
    .sort((a, b) => forkRow(a) - forkRow(b))
    .map((b, i) => [b.slug, i + 1])
);

export const laneCount = lanes.size + 1;
export const laneOf = (entry) => (entry.kind === "main" ? 0 : lanes.get(entry.slug));

// Segments the graph draws. `id` lets the graph light up an entry's ancestry.
export const segments = [
  ...mainEntries.slice(0, -1).map((e, i) => ({
    id: `main-${e.slug}`,
    kind: "line",
    from: { t: e.row, l: 0 },
    to: { t: mainEntries[i + 1].row, l: 0 },
  })),
  ...branchEntries.map((b) => {
    const f = forkRow(b);
    const l = laneOf(b);
    return {
      id: `branch-${b.slug}`,
      kind: "fork",
      from: { t: f, l: 0 },
      bend: { t: f - 0.8, l },
      to: { t: b.row, l },
    };
  }),
];

// What a version contains: every commit below it on its own line, plus main
// below the fork point for a branch.
export function ancestry(entry) {
  const lit = new Set();
  let from = entry;
  if (entry.kind === "branch") {
    lit.add(`branch-${entry.slug}`);
    from = bySlug.get(entry.forkedFrom);
  }
  lit.add(from.slug);
  mainEntries.slice(mainEntries.indexOf(from)).forEach((e, i, rest) => {
    lit.add(e.slug);
    if (i < rest.length - 1) lit.add(`main-${e.slug}`);
  });
  lit.add(entry.slug);
  return lit;
}

// Every skill installed so far: the groups in content.json, plus anything a
// version's stack lists that no group does, under "Other".
export const dependencies = (() => {
  const groups = Object.entries(content.stackGroups).map(([group, items]) => ({ group, items }));
  const grouped = new Set(groups.flatMap((g) => g.items));
  const other = [...new Set(entries.flatMap((e) => e.stack ?? []))].filter((n) => !grouped.has(n));
  if (other.length) groups.push({ group: "Other", items: other });
  return groups;
})();

export const plain = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function pageTitle(entry) {
  if (!entry) return `Version not found · ${person.name}`;
  if (entry.latest) return `${person.name}, release notes`;
  if (entry.kind === "branch") return `Ricardo /${entry.slug}, ${entry.name} · ${person.name}`;
  return `Ricardo ${entry.version}, ${entry.name} · ${person.name}`;
}
