import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="space-y-8 py-6 max-w-3xl mx-auto">
      <div className="border-b border-border pb-4">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Professional Experience</h1>
        <p className="text-text-secondary text-sm mt-1">Mon parcours d'ingénieur en IA et science des données.</p>
      </div>

      <div className="relative border-l-2 border-border ml-4 space-y-12 pl-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            {/* Indicateur d'année sur la ligne */}
            <div className="absolute -left-[35px] top-0.5 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              {exp.year}
            </div>

            <div className="space-y-2 bg-surface border border-border rounded-xl p-6 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-text-primary">{exp.role}</h2>
                <p className="text-sm font-semibold text-blue-600">{exp.company} <span className="text-text-muted font-normal">| {exp.location}</span></p>
              </div>
              <ul className="space-y-2 pt-2">
                {exp.steps.map((step) => (
                  <li key={step} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">↓</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}