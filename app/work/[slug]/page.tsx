import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import DemoVideo from "@/components/DemoVideo";
import DemoBanner from "@/components/DemoBanner";
import ParticleDrift from "@/components/UI/particle-drift";
import { ParallaxLayer } from "@/components/UI/parallax-layer";
import { FlipCard } from "@/components/UI/flip-card";

const CARD_CLASSNAME =
  "rounded-2xl border border-blue-100/70 bg-blue-50/45 shadow-[0_6px_0_0_rgba(59,130,246,0.3),0_24px_38px_-16px_rgba(15,23,42,0.35)]";

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

  return (
    <main className="w-full px-6 pb-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="relative pb-16">
        <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2">
          <ParallaxLayer strength={100}>
            <ParticleDrift className="h-full w-full" mode="light" density={2} />
          </ParallaxLayer>
        </div>

        <div className="relative space-y-16 pt-16 pointer-events-none">
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

          <div className="pointer-events-auto grid grid-cols-1 gap-12 lg:grid-cols-3">
            <FlipCard
              label="Problem, Solution & Impact"
              cardClassName={CARD_CLASSNAME}
              contentPadding="p-8"
              minHeightClassName="min-h-[420px]"
              className="lg:col-span-2"
            >
              <div className="space-y-10">
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
            </FlipCard>

            <div className="space-y-12 lg:sticky lg:top-8 lg:h-fit lg:self-start">
              {project.howItWorks && (
                <FlipCard
                  label="How It Works"
                  cardClassName={CARD_CLASSNAME}
                  contentPadding="p-6"
                  minHeightClassName="min-h-[220px]"
                >
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
                </FlipCard>
              )}

              {project.highlights && (
                <FlipCard
                  label="Key Numbers"
                  cardClassName={CARD_CLASSNAME}
                  contentPadding="p-6"
                  minHeightClassName="min-h-[220px]"
                >
                  <h2 className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">Key numbers</h2>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </FlipCard>
              )}
            </div>
          </div>

          {project.demoUrl && (
            <div className="pointer-events-auto space-y-12">
              {/* Recorded walkthrough */}
              {project.video && (
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
              )}

              {/* Sample input files */}
              {project.sampleFiles && (
                <div>
                  <h2 className="font-display text-xl font-bold uppercase tracking-widest text-gray-400">
                    Sample Files to Try
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Download a sample ingredient list, then upload it into the demo below to see the real CAS-matching engine run on it.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.sampleFiles.map((file) => (
                      <a
                        key={file.url}
                        href={file.url}
                        download
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
                      >
                        ↓ {file.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {project.demoUrl && (
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
      )}
    </main>
  );
}