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
            slow, manual processes that hold a team back, and build simple
            tools to replace them.
          </p>
        </div>

        {/* Right: at-a-glance panel */}
        <aside className="self-start rounded-2xl bg-[#1a1f2e] p-6 ring-1 ring-blue-400/80 shadow-[0_0_25px_rgba(59,130,246,0.75),0_0_60px_rgba(59,130,246,0.5),0_0_90px_rgba(59,130,246,0.3)]">
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
              <dd className="mt-0.5 font-medium text-white">4 tools in production</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Selected work */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900">Selected work</h2>
        <p className="mt-2 text-gray-600">
          Four tools built and shipped for a national publisher.
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
          I started out working in Scholastic&apos;s warehouse, and that&apos;s
          how I found my way into a sales support internship with the
          company. I have a degree in Business, Innovation and
          Entrepreneurship, majoring in Marketing, and I taught myself to
          build software from there. That means I look at a problem from both
          sides: what the business needs, and how to build it. I built and
          now run Scholastic Australia&apos;s automation function, starting
          with simple workflow automation and growing into full web apps used
          across Australia and New Zealand.
        </p>
      </section>

      {/* References */}
      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900">References</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          Available upon request.
        </p>
      </section>
    </main>
  );
}