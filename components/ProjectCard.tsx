import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60">
      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {project.niche}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
        View project
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </div>
  );
}