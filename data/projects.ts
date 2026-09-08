export type Project = {
  slug: string          // URL-friendly id, e.g. "toy-safety-checker"
  title: string
  niche: string         // short tagline shown on the card
  problem: string
  solution: string
  impact: string
  highlights?: string[] // short punchy stat/feature bullets shown in the page sidebar
  howItWorks?: { title: string; description: string }[] // numbered step list shown alongside the narrative
  techStack: string[]
  demoUrl?: string      // live embed URL (optional — may use screenshots instead)
  screenshots?: string[] // fallback images if no live demo
  video?: string
  sampleFiles?: { label: string; url: string }[] // downloadable sample input files for the demo
}

export const projects: Project []=[
{
    slug: "cms-au-nz",
    title: "Custom CMS & AI Page Builder",
    niche: "Built and now solely maintain Scholastic's in-house CMS — a full-stack replacement for their commercial platform across Australia & New Zealand",
    problem:
      "Scholastic's marketing team relied on a commercial CMS to build and publish campaign pages. It meant ongoing vendor costs, being locked into whatever features that vendor chose to support, and form data and content living on a third-party platform. Every non-standard page idea needed a developer — and running the same setup for both the Australian and New Zealand businesses meant paying for it twice.",
    solution:
      "A full-stack CMS and visual page builder built from scratch on a 20-model Prisma/PostgreSQL schema, architected as one codebase serving two databases so the same app runs both markets without duplicating code. Marketing staff compose pages on a no-code drag-and-drop canvas from a library of 22 content block types — hero banners, card grids, forms, product carousels — all pre-styled in Scholastic's brand identity. An AI layer (Claude) generates entire pages or single sections from a plain-English prompt, with brand rules enforced server-side so generated output can't drift off-brand. A built-in AI support chatbot walks staff through a decision-tree triage flow for common questions, and a live product-catalogue integration keeps book data in sync automatically.",
    impact:
      "Replaced the commercial CMS entirely and now runs both the Australian and New Zealand businesses on one platform. Non-technical staff build, preview, and publish on-brand pages themselves — no vendor, no developer in the loop — and because it's owned in-house, all content and form data lives on Scholastic's own servers. I built it, and I'm the one who keeps it running in production.",
    highlights: [
      "One codebase, two databases — architected for multi-market reuse across AU & NZ",
      "20-model Prisma/PostgreSQL schema",
      "22 pre-styled content block types",
      "AI page generation with brand rules enforced server-side",
      "AI support chatbot with decision-tree triage",
      "Live product-catalogue integration",
    ],
    howItWorks: [
      { title: "Compose", description: "Drag section blocks onto the canvas from a 22-block library, all pre-styled to brand." },
      { title: "Generate (optional)", description: "Describe a page in plain English and let Claude draft it, with brand rules enforced server-side." },
      { title: "Preview", description: "Check desktop and mobile rendering before anything goes live." },
      { title: "Publish", description: "Push live across AU or NZ — no developer, no vendor ticket." },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Claude API",
      "Sharp",
      "Tailwind CSS",
    ],
    demoUrl: "/demos/cms-demo.html",
    screenshots: ["/screenshots/cms-builder.png", "/screenshots/cms-published.png"],
  },

  {
    slug: "toy-safety-checker",
    title: "Toy Safety Compliance Checker",
    niche: "Automated chemical-safety screening for Scholastic's toy buying team",
    problem:
      "Before importing toys and craft products, Scholastic's purchasing team had to check every product's chemical ingredients against Australian government safety databases by hand — cross-referencing CAS numbers, working out GHS hazard classifications, and figuring out which physical safety tests applied, all manually. Getting a clear answer to 'is this legal to sell in Australia?' took specialist time the team didn't always have.",
    solution:
      "A web tool where a buyer uploads a product's ingredient list and gets an instant first-pass safety screen. It cross-references every chemical by CAS number against three Australian government datasets — including the 40,000+ row AICIS Chemical Inventory — derives the applicable GHS hazard codes, and runs the result through a ~750-rule engine to determine which physical safety tests are required for the Australian and/or New Zealand markets. Governance is built in: any 'safe' classification has to pass an admin-approval gate, and every product carries a full audit trail of who checked what and when.",
    impact:
      "Replaced a manual, specialist-dependent checking workflow. A non-specialist buyer can now screen a product in seconds instead of waiting on expert review, with an approval gate and audit trail that didn't exist before. It's deliberately built and positioned as a first-pass screening tool that informs purchasing decisions — not a certification — an honest framing that's a strength, not a limitation.",
    highlights: [
      "Cross-references 3 Australian government datasets",
      "40,000+ row AICIS Chemical Inventory",
      "~750-rule engine derives required physical safety tests",
      "GHS hazard code derivation from CAS numbers",
      "Admin-approval gate on every 'safe' classification",
      "Full per-product audit trail",
    ],
    howItWorks: [
      { title: "Upload", description: "A buyer uploads a product's ingredient list with CAS numbers." },
      { title: "Cross-reference", description: "Every chemical is checked against 3 government datasets, including the 40,000+ row AICIS Inventory." },
      { title: "Classify", description: "GHS hazard codes and a ~750-rule engine determine required physical safety tests." },
      { title: "Approve", description: "A 'safe' result still needs admin sign-off, logged to a full audit trail." },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "iron-session",
      "Zod",
      "Vitest",
      "Tailwind CSS",
    ],
    demoUrl: "/demos/toy-safety-demo.html",
    screenshots: ["/screenshots/toy-safety-checker.png", "/screenshots/toy-safety-results.png"],
    sampleFiles: [
      { label: "Air Dry Clay (Low Risk)", url: "/downloads/toy-safety/air-dry-clay-ingredients.xlsx" },
      { label: "Novelty Slime Kit (Action Required)", url: "/downloads/toy-safety/slime-kit-ingredients.xlsx" },
    ],
  },

  {
    slug: "sales-submission-tool",
    title: "Retail Submission & Sales Analytics Tool",
    niche: "Turned a ~2-week monthly spreadsheet marathon into a ~1-minute generation step — and grew into a live sales analytics dashboard",
    problem:
      "Every month, Scholastic's sales team built submission spreadsheets for 13 retail accounts entirely by hand — VLOOKUP-ing each column across from a master title list into each retailer's own format and filtering rules, one column at a time. Sell-through reporting was worse: manually reconciling up to seven separate sales and returns exports by ISBN, in spreadsheets never built to handle real-world messy data. The full monthly cycle took a team the better part of two weeks.",
    solution:
      "A web tool that automates the process end to end. Upload the master title list and it generates all 13 correctly formatted retailer submissions in about a minute. A second flow ingests up to seven sales and returns files — handling 75,000+ rows with defensive parsing built for messy real-world Excel exports — and reconciles them by ISBN into a persistent, append-only dataset that feeds a live analytics dashboard, a retailer leaderboard, and an ISBN lookup tool. A separate ISBN enrichment pipeline (a re-runnable Node.js ETL) imports roughly 130,000 product records from an external CRM using a non-destructive 'fill-blank, never-overwrite' merge, validates every ISBN-10/13 checksum (catching ~15 corrupted records along the way), and pulls metadata from a second data source into one unified view — including diagnosing and excluding a systemic data-quality issue where ~97% of the source's author records turned out to be placeholder test data, while still recovering the legitimate ~35% of real pricing and release data underneath it.",
    impact:
      "A process that used to take a team the better part of two weeks now runs in about a minute once source files are uploaded, with sell-through reconciliation and a live dashboard replacing what used to be scattered spreadsheets rebuilt from scratch every month. The ISBN enrichment work turned an external, unreliable data source into a usable asset instead of writing it off.",
    highlights: [
      "Generates 13 retailer submissions in ~1 minute",
      "Reconciles up to 7 sales/returns files by ISBN",
      "Handles 75,000+ rows per ingestion run",
      "Live analytics dashboard, leaderboard & ISBN lookup",
      "ISBN enrichment ETL: ~130,000 records imported",
      "Diagnosed a 97% placeholder-data issue in source records",
    ],
    howItWorks: [
      { title: "Upload", description: "Drop in the monthly master title list." },
      { title: "Generate", description: "All 13 retailer-formatted submissions are produced in about a minute." },
      { title: "Reconcile", description: "Up to 7 sales/returns files are ingested and matched by ISBN." },
      { title: "Analyze", description: "Results feed a live dashboard, leaderboard, and ISBN lookup." },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JSZip",
      "Recharts",
      "Node.js ETL",
      "Tailwind CSS",
    ],
    demoUrl: "/demos/sales-submission-demo.html",
    screenshots: ["/screenshots/submission-tool.png", "/screenshots/submission-sellthru.png"],
  },

  {
    slug: "travel-booking-tool",
    title: "Travel Booking & Charge Management Tool",
    niche: "End-to-end accommodation booking and expense tracking for Scholastic's Book Fair field teams",
    problem:
      "Coordinating accommodation for Scholastic's Book Fair drivers across five states was a manual, multi-step slog: spending wasted time writing booking request emails, filling out chargeback authorisation PDFs, tracking which bookings were confirmed or invoiced in scattered spreadsheets, and manually coding each expense into the NetSuite accounting system. Nothing was connected, so things slipped through the cracks.",
    solution:
      "A single Next.js tool that runs the whole workflow, built from scratch with its own authentication — HMAC-SHA256 signed session cookies verified in Edge middleware, with passwords hashed server-side using bcrypt. A coordinator picks a driver and accommodation from a managed directory and the tool generates the booking request email and a filled-in Corporate Credit Card Charge Authority PDF in one click. A state-by-state dashboard tracks every booking through a charge log from sent to confirmed to invoiced, a live notifications feed surfaces upcoming check-ins, check-outs, and overdue invoices automatically, and the tool auto-generates cost-centre and NetSuite codes so accounting entries come out consistent every time.",
    impact:
      "Replaced a scattered manual process — handwritten emails, manually filled PDFs, disconnected spreadsheets, and hand-coded accounting entries — with one connected workflow with its own secure login. Bookings can no longer fall through the cracks: the notification system flags every check-in, checkout, and unpaid invoice, and accounting codes come out correctly formatted every time.",
    highlights: [
      "Own authentication: HMAC-SHA256 signed cookies + bcrypt",
      "Books drivers across 5 Australian states",
      "One-click booking email + Charge Authority PDF",
      "Live notifications for check-in/out & overdue invoices",
      "Auto-generated cost-centre / NetSuite codes",
    ],
    howItWorks: [
      { title: "Select", description: "Pick a driver and accommodation from the managed directory." },
      { title: "Generate", description: "A booking email and Charge Authority PDF are created in one click." },
      { title: "Track", description: "A state-by-state dashboard follows every booking from sent to invoiced." },
      { title: "Notify", description: "Live alerts surface check-ins, check-outs, and overdue invoices automatically." },
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "pdf-lib",
      "SheetJS",
    ],
    demoUrl: "/demos/travel-booking-demo.html",
    screenshots: ["/screenshots/travel-booking.png", "/screenshots/travel-notifications.png"],
  },

  {
    slug: "books-in-homes-converter",
    title: "Books in Homes Data Converter",
    niche: "One-click reformatting of raw program data into an upload-ready template",
    problem:
      "Scholastic's Books in Homes program data arrived as a raw export that had to be manually reshaped into a specific template before it could be uploaded — re-typing fields into new columns, working out the right program level and contract for each school, and applying sponsor and book-allocation rules by hand, row by row. Tedious, slow, and easy to get wrong.",
    solution:
      "A browser tool that does the whole reformat in one click. A staff member drops in the raw export and the tool parses each row, derives the correct values using the program's real business rules (extracting the term and year, mapping program type to the right level and contract, setting sponsor and book-bag flags), writes everything into the correct template, and downloads the finished file ready to upload. Everything runs locally in the browser — no data leaves the user's machine.",
    impact:
      "Turned a manual, error-prone reformatting job into a single drag-and-drop step. The business rules that a person used to apply by hand for every row are now applied automatically and identically every time, removing the transcription mistakes that come with manual data entry.",
    highlights: [
      "Runs entirely client-side — no data leaves the browser",
      "Applies program business rules row-by-row automatically",
    ],
    howItWorks: [
      { title: "Drop in", description: "Upload the raw program export." },
      { title: "Transform", description: "Business rules are applied row-by-row automatically." },
      { title: "Download", description: "Get an upload-ready file, formatted correctly every time." },
    ],
    techStack: [
      "JavaScript",
      "HTML5",
      "SheetJS",
    ],
    screenshots: ["/screenshots/books-in-homes.png"],
  },
]