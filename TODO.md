# Redesign to-do

Work in progress on the `redesign/versions` branch. `main` is still the live site.

To pick this up: `git checkout redesign/versions && npm install && npm run dev`, or ask Claude to "pick up TODO.md". Tick items with `[x]` as you go and delete them once done.

All content lives in `src/content.json`; see the README for how versions, branches and skills are structured.

## 1. Facts only I can give

- [ ] **Hotelspecials (6.0)**: the thinnest page and the first one people read.
  - What do the services I build do (search, bookings, pricing, partners…)?
  - Which AWS services (Lambda, ECS, DynamoDB…)? Terraform or other IaC?
  - Team size, and anything shipped or improved that I can say publicly.
- [ ] **One headline result** for the 6.0 summary: scale, users or a launch, from freiheit.com or Hotelspecials.
- [ ] **Years of experience**: the summary says "more than five"; Altran + freiheit.com + Hotelspecials adds up to almost six.
- [ ] **Where each skill was used.** These appear only in the 6.0 Dependencies list until placed in a version's `stack`:
  Docker, Terraform, Jenkins, Azure, Azure DevOps, Google Cloud, Datadog, Grafana, TypeScript, React, Tailwind, HTML and CSS, REST APIs, data modelling, Agile, technical writing, responsive design, UX.
- [ ] **MSc (3.0)**: specialisation, thesis topic, projects or courses worth naming, final grade if I want it shown.
- [ ] **BSc (1.0)**: anything beyond the degree and the two diplomas.
- [ ] **freiheit.com (4.0)**: for any of the four projects, my role, team size and one concrete outcome.
- [ ] **Altran (2.0)**: client or project, if I can say.
- [ ] **Sabbatical (5.0)**: what the seasonal jobs actually were.
- [ ] **Nook**: is it live, in beta, or a waitlist? The page currently says "in development".
- [ ] **Spoken languages**: Portuguese and English are listed. Add Dutch if it's true.

## 2. Copy to approve, rewrite or delete

Facts come from me or the old site; these wordings or claims were written for me.

- [ ] 6.0 summary: "Software engineer with more than five years of building cloud products, mobile apps and backends for clients like Germany's largest car manufacturer, and leading a team of six along the way. Now building Go microservices on AWS at Hotelspecials in Haarlem, with an app of my own, Nook, on a side branch."
- [ ] 6.0: "Moved to the Netherlands."
- [ ] 6.0: "Back on a desk after a year without one."
- [ ] 6.0: "Will bring up sourdough unprompted."
- [ ] 6.0: "Off the clock: the garden, the kitchen, and any trail within reach."
- [ ] 5.0 summary: "…coming back with skills no sprint teaches."
- [ ] 5.0: "A lot of trails."
- [ ] 5.0: "The trip paid for itself, one seasonal job at a time."
- [ ] 5.0: "Communication, adaptability and resilience, tested in new countries, new teams and new languages every few months." ("new languages" is a guess)
- [ ] 4.0 summary: "Nearly four years…" and "for some of Germany's biggest companies" and "my first time leading a team"
- [ ] 4.0: "built for smooth performance and a polished UX"
- [ ] 3.0 summary: "Back to Técnico for the master's, with a year of industry behind me."
- [ ] 3.0: "Came back with a year of industry experience and better questions."
- [ ] 2.0 summary: "First job in the industry…"
- [ ] 2.0: "Code now has users."
- [ ] 1.0: "No production experience yet."
- [ ] Nook: "Runs on evenings and weekends."
- [ ] Contact card: "Contact the maintainer" / "Questions, ideas or just a hello."
- [ ] 6.0 Dependencies: "Everything installed so far."
- [ ] 404 page: "This version of Ricardo was never released."

## 3. Decisions before merging to `main`

- [ ] **Old photos in git history** still contain GPS location data (removed from the working tree, not from history). Rewrite history or leave it?
- [ ] **Netlify build settings**: build command `npm run build`, publish directory `dist`. Check before merging; the prerender step depends on it.
- [ ] **Test on real devices**: verified so far in Chromium only. Check Safari, Firefox and a real phone, and ideally a screen reader.
- [ ] **Social image** (`public/og.png`) shows "6.0". Regenerate it when 7.0 ships.

## 4. Optional ideas

- [ ] Make the title a little larger on 360px phones now that the mascot is gone.
- [ ] Compact contact links in the desktop rail instead of the full card, if the card feels heavy.
