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
}

export const projects: Project []=[
{
    slug: "cms-au-nz",
    title: "Custom CMS & AI Page Builder",
    niche: "Replaced Scholastic's commercial CMS with one built from scratch, now running both Australia and New Zealand",
    problem:
      "Scholastic paid for a commercial CMS to build campaign pages. Every unusual page idea needed a developer, and running the same setup for both Australia and New Zealand meant paying for it twice.",
    solution:
      "I built a CMS and page builder from scratch, sharing one codebase across both countries. Marketing staff get a drag and drop builder with ready made blocks like banners, forms, and product carousels, all styled to match the brand. They can also type a plain English prompt and have AI generate a whole page or section, with brand rules built in so it can't go off brand. A built in AI chatbot answers common staff questions, and the product catalogue stays connected to the Product Intelligence database.",
    impact:
      "The commercial CMS is gone. Marketing can build, preview, and publish pages themselves without waiting on a developer, and every piece of content now lives on Scholastic's own servers instead of a third party's.",
    highlights: [
      "One system runs both Australia and New Zealand",
      "20 database models",
      "22 ready made content blocks",
      "AI can generate whole pages from a prompt",
      "Built in AI chatbot for support questions",
      "Product catalogue stays connected to the Product Intelligence database",
    ],
    howItWorks: [
      { title: "Compose", description: "Add a section from the block library, then drag it to reorder the page." },
      { title: "Edit", description: "Select any section to edit its text, colours, fonts and spacing live on the page." },
      { title: "Preview", description: "Switch between desktop and mobile to check the page before it goes live." },
      { title: "Publish", description: "Flip the status and save. That's the same flow staff use every day. (AI generation and publishing to both countries are part of the real product, not this demo.)" },
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
    niche: "Automatic chemical safety checks for Scholastic's toy buying team",
    problem:
      "Before buying toys and craft products, staff had to check every chemical ingredient against Australian government safety lists by hand. Getting a clear answer on whether a product was legal to sell took specialist time the team didn't always have.",
    solution:
      "A buyer uploads a product's ingredient list and gets an instant first pass safety check. The tool looks up every chemical across three government databases, including one with over 40,000 records, works out its hazard classification, and runs it through around 750 rules to decide which safety tests are needed. A 'safe' result still needs a manager's approval, and every check is logged.",
    impact:
      "A check that used to need a specialist and a lot of time now takes seconds. There's now an approval step and a full record of every check, which didn't exist before. It's built and described honestly as a first pass screening tool that supports a buying decision, not a certification.",
    highlights: [
      "Checks 3 Australian government databases",
      "Searches over 40,000 chemical records",
      "About 750 rules decide the required safety tests",
      "Works out hazard classifications automatically",
      "Every 'safe' result needs manager approval",
      "Full record kept for every check",
    ],
    howItWorks: [
      { title: "Upload", description: "A buyer uploads a product's ingredient list." },
      { title: "Check", description: "Every chemical is checked against 3 government databases with over 40,000 records." },
      { title: "Classify", description: "Hazard codes and around 750 rules decide which safety tests are needed." },
      { title: "Approve", description: "A 'safe' result still needs a manager's sign off, and it's all logged." },
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
  },

  {
    slug: "sales-submission-tool",
    title: "Retail Submission & Sales Analytics Tool",
    niche: "Turned a two week spreadsheet job into a one minute task, then grew into a live sales dashboard",
    problem:
      "Every month, the sales team built submission spreadsheets for 13 retailers entirely by hand, copying each column across from a master list into each retailer's own format. Matching up sales and returns data from up to seven separate files was just as slow, and the whole cycle took a team the better part of two weeks.",
    solution:
      "Upload the master title list and the tool generates all 13 correctly formatted retailer files in about a minute. A second part of the tool takes in up to seven sales and returns files, matches them by ISBN, and feeds the results into a live dashboard with a retailer leaderboard and lookup tool. I also built a separate pipeline that cleaned and merged around 130,000 product records from an old system, fixing invalid ISBNs and filtering out a large batch of placeholder data along the way.",
    impact:
      "A job that used to take a team the better part of two weeks now runs in about a minute once the files are uploaded. The team can now see sales performance on a live dashboard instead of rebuilding spreadsheets from scratch every month, and the old product data is now clean and usable instead of being written off.",
    highlights: [
      "Generates 13 retailer files in about a minute",
      "Matches up to 7 sales and returns files by ISBN",
      "Handles over 75,000 rows per upload",
      "Live dashboard with a retailer leaderboard and lookup tool",
      "Cleaned and merged about 130,000 product records",
      "Found and filtered out a large batch of placeholder data",
    ],
    howItWorks: [
      { title: "Upload", description: "Drop in the monthly master title list." },
      { title: "Generate", description: "All 13 retailer formatted files are produced in about a minute." },
      { title: "Reconcile", description: "Up to 7 sales and returns files are matched by ISBN." },
      { title: "Analyze", description: "Results feed a live dashboard, leaderboard, and lookup tool." },
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
    niche: "One tool for booking travel and tracking costs for the Book Fair field team",
    problem:
      "Booking accommodation for Book Fair drivers across five states meant writing emails by hand, filling out paperwork, and tracking bookings across scattered spreadsheets. Nothing was connected, so bookings and invoices were easy to miss.",
    solution:
      "I built one tool with its own secure login that handles the whole process. A coordinator picks a driver and a place to stay, and the tool creates the booking email and the payment paperwork in one click. It tracks every booking on one dashboard from sent to invoiced, sends alerts for check ins, check outs, and unpaid invoices, and generates the right accounting codes automatically.",
    impact:
      "Booking travel now takes one click instead of several manual steps, and nothing falls through the cracks. The alert system flags every check in, check out, and unpaid invoice, and accounting codes come out correct every time.",
    highlights: [
      "Secure login built from scratch",
      "Books drivers across 5 states",
      "Creates the booking email and paperwork in one click",
      "Alerts for check ins, check outs, and unpaid invoices",
      "Accounting codes generated automatically",
    ],
    howItWorks: [
      { title: "Select", description: "Pick a driver and accommodation from the managed directory." },
      { title: "Generate", description: "A booking email and payment form are created in one click." },
      { title: "Track", description: "A dashboard follows every booking, state by state, from sent to invoiced." },
      { title: "Notify", description: "Alerts flag check ins, check outs, and overdue invoices automatically." },
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
]