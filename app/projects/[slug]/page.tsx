import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return {
      title: "Projet introuvable | Wassim Hichri",
      description: "Ce projet n'existe pas.",
    };
  }

  return {
    title: `${project.title} | Wassim Hichri`,
    description: project.subtitle,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const projectIndex = projects.findIndex((project) => project.slug === params.slug);
  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const hasDemo = Boolean(project?.demoVideo || project?.gallery?.length);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Retour aux projets
        </Link>

        <div className="mt-8 rounded-3xl bg-white p-10 shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-black text-slate-950">{project.title}</h1>
              <p className="mt-4 text-lg text-slate-600">{project.subtitle}</p>
              <p className="mt-6 text-slate-700 leading-relaxed text-lg">{project.description}</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {project.role ? (
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Rôle</p>
                    <p className="mt-2 text-slate-800 font-semibold">{project.role}</p>
                  </div>
                ) : null}
                {project.duration ? (
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Durée</p>
                    <p className="mt-2 text-slate-800 font-semibold">{project.duration}</p>
                  </div>
                ) : null}
                {project.domain ? (
                  <div className="rounded-3xl bg-slate-50 p-5 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Domaine</p>
                    <p className="mt-2 text-slate-800 font-semibold">{project.domain}</p>
                  </div>
                ) : null}
              </div>

              {project.features?.length ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-950">Fonctionnalités clés</h2>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.useCases?.length ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-950">Cas d'utilisation</h2>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                    {project.useCases.map((useCase) => (
                      <li key={useCase}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.results?.length ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-950">Résultats</h2>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:w-80">
              {hasDemo ? (
                <Link
                  href={`/projects/${project.slug}/demo`}
                  className="block rounded-2xl bg-slate-900 px-5 py-3 text-center text-white font-semibold hover:bg-slate-800"
                >
                  ▶ Voir la démo
                </Link>
              ) : null}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-slate-300 px-5 py-3 text-center text-slate-900 font-semibold hover:bg-slate-100"
                >
                  Démo en direct
                </a>
              ) : null}

              <div className="mt-8 rounded-3xl bg-white p-4 text-slate-700">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Technologies</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-100 transition"
              >
                ← {prevProject.title}
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-100 transition"
              >
                {nextProject.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}