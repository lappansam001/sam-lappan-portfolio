import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      {/* Hero — two columns */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left: intro (takes 2 of 3 columns) */}
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Sam Lappan
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            I turn manual business processes into simple{" "}
            <span className="text-blue-600">web tools.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Self-taught AI web developer with a business background. I find the
            manual, tedious processes that slow teams down — and build the
            systems that make them disappear.
          </p>
        </div>

        {/* Right: at-a-glance panel */}
        <aside className="rounded-2xl bg-[#1a1f2e] p-6 ring-1 ring-white/10">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Role</dt>
              <dd className="mt-0.5 font-medium text-white">AI Web Developer</dd>
            </div>
            <div>
              <dt className="text-gray-500">Qualifications</dt>
              <dd className="mt-0.5 font-medium text-white">Business Innovation &amp; Marketing</dd>
            </div>
            <div>
              <dt className="text-gray-500">Focus</dt>
              <dd className="mt-0.5 font-medium text-white">Internal tools &amp; automation</dd>
            </div>
            <div>
              <dt className="text-gray-500">Shipped</dt>
              <dd className="mt-0.5 font-medium text-white">5 tools in production</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Selected work */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900">Selected work</h2>
        <p className="mt-2 text-gray-600">
          Five tools built and shipped for a national publisher.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </section>

 {/* About */}
      <section className="mt-20 max-w-3xl">
       <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
        <p className=" mt-6 text-base leading-relaxed text-gray-700">
          I came to development from a business background — a degree in
          Business, Innovation &amp; Entrepreneurship, majoring in Marketing —
          and taught myself to build. It means I look at a problem from both
          sides: what the business needs, and how to build it. I built and now
          solely run Scholastic Australia&apos;s automation function, progressing
          from n8n workflow automation to shipping full-stack Next.js /
          PostgreSQL applications used across both the Australian and New
          Zealand businesses.
        </p>
      </section>

      {/* Beyond the four tools */}
      <section className="mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900">Beyond the four tools</h2>
        <p className="mt-2 text-gray-600">
          Shipping the tools is one thing — keeping them secure, deployed, and running in
          production is the other job I do.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">Security &amp; Remediation</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
              <li>
                Closed a high-severity auth bypass that allowed unauthenticated retrieval of
                internal sales and revenue data from an analytics API.
              </li>
              <li>
                Resolved ~9 CodeQL alerts across two apps and cleared every Dependabot
                vulnerability on one — <code className="text-gray-800">npm audit</code>: 0 remaining.
              </li>
              <li>
                Shipped a regression-tested Next.js upgrade closing 9 CVEs, including an
                unauthenticated upload endpoint feeding a vulnerable spreadsheet parser.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">Deployment &amp; Operations</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
              <li>
                Migrated 3 production Next.js apps from ad-hoc file-copy deploys to a
                git-based model on a Windows server (PM2 + IIS), across ~15 co-hosted apps.
              </li>
              <li>
                Designed a CI/CD pipeline (GitHub Actions + self-hosted runners) with a
                branch → staging → live release workflow.
              </li>
              <li>
                Failure-safe by design: a failed build can never restart the app on broken
                code — the previous good version stays live.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">Database &amp; Data Operations</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
              <li>
                Migrated PostgreSQL databases between server and local with{" "}
                <code className="text-gray-800">pg_dump</code>/<code className="text-gray-800">pg_restore</code>,
                verified with row-count comparisons before promoting.
              </li>
              <li>
                Repointed Next.js/Prisma apps to restored or alternate databases with zero
                downtime and zero data loss.
              </li>
              <li>
                Built a multi-source ISBN enrichment pipeline feeding two external
                databases into one unified frontend view.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}