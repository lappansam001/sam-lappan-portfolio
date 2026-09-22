import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import DemoVideo from "@/components/DemoVideo";
import DemoBanner from "@/components/DemoBanner";
import { ProjectDemoPager } from "@/components/UI/project-demo-pager";

const CARD_CLASSNAME =
  "rounded-2xl border border-blue-100/70 bg-blue-50/45 shadow-xl shadow-black/10 backdrop-blur-sm";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectContent = (
    <div className="relative pb-8">
      <div className="relative space-y-16 px-6 pt-16 sm:px-10 lg:px-16 xl:px-24">
        <div className="pointer-events-auto max-w-4xl">
          <Link href="/" className="text-sm font-medium text-blue-600 transition-opacity hover:opacity-70">
            ← Back to all work
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {project.niche}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-auto space-y-12">
          <div className={`${CARD_CLASSNAME} grid grid-cols-1 gap-10 p-8 sm:grid-cols-[2fr_3fr_2fr]`}>
            <section>
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">The problem</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">The solution</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{project.solution}</p>
            </section>

            <section>
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">The impact</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{project.impact}</p>
            </section>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {project.howItWorks && (
              <div className={`${CARD_CLASSNAME} p-6`}>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">How it works</h2>
                <ol className="mt-4 space-y-5">
                  {project.howItWorks.map((step, i) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {project.highlights && (
              <div className={`${CARD_CLASSNAME} p-6`}>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">Key numbers</h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {project.video && (
          <div className="pointer-events-auto space-y-12">
            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-widest text-gray-400">
                Recorded Walkthrough
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-500">
                A quick tour of the tool in action.
              </p>
              <div className="mt-4">
                <DemoVideo src={project.video} poster={project.screenshots?.[0]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (!project.demoUrl) {
    return <main className="w-full">{projectContent}</main>;
  }

  const demoContent = (
    <>
      <DemoBanner />
      <div className="relative left-1/2 w-screen -translate-x-1/2 border-b border-gray-200">
        <iframe
          src={project.demoUrl}
          title={`${project.title} demo`}
          className="h-[900px] w-full"
        />
      </div>
    </>
  );

  return (
    <main className="w-full">
      <ProjectDemoPager project={projectContent} demo={demoContent} />
    </main>
  );
}
