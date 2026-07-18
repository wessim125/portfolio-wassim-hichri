import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

type Props = {
  params: {
    slug: string;
  };
};

export default function DemoPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || (!project.demoVideo && !project.gallery?.length)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-8 py-12">

        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href={`/projects/${slug}`}
            className="text-blue-400 hover:underline"
          >
            ← Retour au projet
          </Link>
          <Link
            href="/projects"
            className="text-slate-300 hover:text-white hover:underline"
          >
            Voir tous les projets
          </Link>
        </div>

        <h1 className="text-5xl font-black mt-6">
          {project.title}
        </h1>

        <p className="text-slate-400 mt-3">
          {project.subtitle}
        </p>

        <div className="mt-10 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
          {project.demoVideo ? (
            <video
              controls
              autoPlay
              className="w-full"
            >
              <source src={project.demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
              {project.gallery?.map((image) => (
                <div key={image} className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
                  <img
                    src={image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </main>
  );
}