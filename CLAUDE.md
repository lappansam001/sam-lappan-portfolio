@AGENTS.md
# Portfolio Website — Project Context

## What this is
A personal portfolio website for Sam Lappan — a self-taught AI web developer with a
business background (Bachelor in Business, Innovation & Entrepreneurship, majoring in
Marketing). The site showcases 5 internal tools built for Scholastic Australia.

Core positioning: **"I turn complicated Excel processes into simple web tools."**
The throughline across every project: spotting a tedious manual business process and
replacing it with software.

## Tech Stack
- Next.js 16.2.9 (App Router)
- React 19
- TypeScript
- Tailwind CSS **v4** (IMPORTANT: v4, not v3)
- Deploy target: Vercel + custom domain (not set up yet)

### Tailwind v4 notes (we hit these)
- Activate with a single line in `globals.css`: `@import "tailwindcss";`
  (NOT the old v3 three-directive `@tailwind base/components/utilities;`)
- There is NO `tailwind.config.ts` by default in v4 — config is done in CSS.
- The user prefers writing plain CSS for global/body styles rather than `@apply`.
  `globals.css` body styles are written as plain CSS, not utility classes.

## Design Decisions (locked in)
- **Navigation:** Grid of project cards on the homepage → individual project pages.
- **Demo embedding:** Side-by-side (live demo / description) on project pages.
- **Visual style:** Professional / corporate clean.
- **Routes:** `/` homepage, `/work/[slug]` for each project.

## How the user wants to work
- Build in SMALL SECTIONS, one at a time. Do not dump whole pages.
- For each section: (1) explain WHAT we're building and WHY, (2) give the exact code
  to paste, (3) wait for the user to paste/run and confirm before moving on.
- The user is learning — explain reasoning, not just code. They have built a few
  Next.js projects with Claude Code before but are not yet expert.
- The user does NOT want to just type code blindly; they want to understand each step.

## Demo strategy (IMPORTANT)
The 3 database apps (CMS, Toy Safety, Submissions) and the 2 backend-dependent HTML
tools CANNOT run live in an iframe (they need Postgres / auth / API routes).
DECISION: build frontend-only HTML "mockups" with hardcoded fake data for the
interactive embeds. These are demo props and MUST be labelled "interactive preview"
to stay honest. Build the real site FIRST with screenshots as placeholders, then swap
in mockups one at a time later. `demoUrl` will point at mockups when ready;
`screenshots` is the placeholder until then.

### Data hygiene for mockups (MUST do before publishing)
Several source files contain real private data. When building mockups, replace:
- Travel Booking tool: 8 real driver names + mobile numbers, real manager names,
  company ABN, real motel contact details → all must become fake placeholders.
- Books in Homes converter: real sponsor names ("Ausenco Foundation",
  "Rotary Club of Kenthurst") → genericise.
- Toy Safety / Submissions: a real DB password appears in source docs (the
  `.env` files in those projects, not this repo) — never copy it into this repo
  or into any mockup/demo. Confirm it has been rotated if it was ever used
  against a real database.

## Data Layer
`data/projects.ts` is the single source of truth. One `Project` type, one
`projects: Project[]` array. Adding a project later = add one object, nothing else.

```ts
export type Project = {
  slug: string
  title: string
  niche: string          // short tagline shown on the card
  problem: string
  solution: string
  impact: string
  techStack: string[]
  demoUrl?: string       // live mockup URL (optional)
  screenshots?: string[] // placeholder until mockups built
}
```

## Screenshots — assets needed, not wired up yet
`data/projects.ts` references screenshot files that don't exist yet, and as of
2026-08-13 nothing in the UI actually renders them as `<img>` elements (the
`screenshots` field is only ever passed as an unused video poster prop, and no
project currently sets `video`). Building the gallery/component that displays
them is still open — do that once real screenshots are ready to drop in, not
before, so it isn't built against content that doesn't exist.

Drop real screenshots into `public/screenshots/` using these exact filenames
(already referenced in `data/projects.ts`, so no code change needed once the
files exist):
- `cms-builder.png`, `cms-published.png` — cms-au-nz
  (already has a full interactive demo; screenshots here are just a fallback)
- `submission-tool.png`, `submission-sellthru.png` — sales-submission-tool
  (may become unnecessary if this project gets a full interactive demo instead —
  see the Build Order section)
- `travel-booking.png`, `travel-notifications.png` — travel-booking-tool
  (already has a full interactive demo; screenshots here are just a fallback)
- `toy-safety-checker.png`, `toy-safety-results.png` — toy-safety-checker
  (already has a full interactive demo; screenshots here are just a fallback)
- `books-in-homes.png` — books-in-homes-converter

Suggested format: PNG, ~1600px wide, 16:10-ish aspect ratio for visual
consistency across the set. Redact/blur any real staff names, emails, or
internal data before exporting — same data-hygiene rule as the demos.

## The 5 Projects (final lineup)
1. **cms-au-nz** — Custom CMS & AI Page Builder. Replaced a commercial CMS for
   Scholastic across AU & NZ. Visual drag-drop builder + Claude AI page generation.
   (Scholastic can be named publicly — user confirmed. Still worth user double-checking
   they're cleared to disclose "replaced their commercial CMS".)
2. **toy-safety-checker** — Toy Safety Compliance Checker. Screens product chemical
   ingredient lists against Australian govt safety databases. First-pass screening,
   NOT certification (keep this honest framing — it's a strength).
3. **sales-submission-tool** — Retail Submission & Sell-Thru Generator. Turns a
   ~2-week manual spreadsheet process (VLOOKUP per column across 13 retailers + 7-CSV
   sell-thru wrangling) into seconds. Phrase as "the better part of two weeks" — the
   "seconds" refers to the generation step once files are uploaded.
4. **travel-booking-tool** — Travel Booking & Charge Management Tool. End-to-end:
   generates booking emails + chargeback PDFs, tracks bookings across 5 states,
   notifications for check-in/out/overdue invoices, auto-generates NetSuite codes.
5. **books-in-homes-converter** — Books in Homes Data Converter. One-click reformat of
   raw program data into an upload-ready template, applying business rules per row.

(Dropped: a "Trade Major Detail Tool" — too small and not actually used in practice.)

## Hero Copy (draft — not final, user to react when rested)
- Headline: "I turn complicated Excel processes into simple web tools."
- Subline: "Self-taught AI web developer with a business background. I look at the
  manual, tedious processes that slow teams down — and build the systems that make
  them disappear."
- Supporting: "Five tools, built and shipped for a national publisher. Each one
  replaced a spreadsheet, a manual workflow, or an external piece of software."

Open questions for the user:
- "complicated Excel processes" vs broader "manual business processes"?
- Lead with self-taught/business angle, or lead with the work?

## Portfolio purpose
User is keeping options open (job / freelance / showcase). Keep hero copy
outcome-neutral so it works for any audience.

## Build Order / Progress
- [x] Phase 1 — Scaffold (create-next-app, Tailwind v4 fixed, blank page verified)
- [x] Phase 2 — Data layer: `data/projects.ts` with all 5 project objects
- [ ] Phase 3 — Homepage: layout shell + nav, hero section (about the user),
      project card grid
- [ ] Phase 4 — Project pages: `/work/[slug]`, problem/solution/impact sections,
      demo-or-screenshots, tech stack
- [ ] Phase 5 — Polish + deploy: metadata/OG, Vercel, custom domain
- [~] Later — Build interactive mockups, swap in for screenshots one at a time
      (done: toy-safety-checker, travel-booking-tool, sales-submission-tool,
      cms-au-nz — only books-in-homes-converter still needs one)
- [ ] Still needed — an "about me" section/intro (the main current gap)

## Next step when resuming
Finalise hero copy direction (2 open questions above), then build the homepage layout
shell + hero section as the first small section. Keep it one section at a time.