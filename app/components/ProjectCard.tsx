import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  tags: string[];
}

export default function ProjectCard({ title, description, slug, tags }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-background border border-border text-text-muted text-xs px-2.5 py-1 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}