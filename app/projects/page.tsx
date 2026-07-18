import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects | Wassim Hichri",
  description: "All AI Engineering & Agentic AI projects by Wassim Hichri.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="mb-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-5xl font-black">Projets</h1>
              <p className="text-slate-500 mt-3 max-w-2xl">
                Présentation des projets clés réalisés en IA, Agentic AI et systèmes multi-agents. Chaque fiche projet explique le rôle, les défis et les résultats métier pour faciliter la lecture des recruteurs.
              </p>
            </div>
            <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold">
                {project.title}
              </h2>

              <p className="text-sm text-blue-600 mt-2">
                {project.subtitle}
              </p>

              <p className="text-sm text-slate-500 mt-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-100 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3">

                <Link
                  href={`/projects/${project.slug}`}
                  className="block w-full rounded-xl bg-blue-600 text-white py-3 text-center font-semibold hover:bg-blue-700"
                >
                  Voir le projet
                </Link>

                <div className="flex gap-3">

                  {(project.demoVideo || project.gallery?.length) && (
                    <Link
                      href={`/projects/${project.slug}/demo`}
                      className="flex-1 rounded-xl bg-slate-900 text-white py-3 text-center font-semibold hover:bg-slate-700"
                    >
                      ▶ Démo
                    </Link>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}