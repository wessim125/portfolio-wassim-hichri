import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { projects, experiences } from "@/lib/data";

export default function DashboardHome() {
  const skillCategories = [
    {
      title: "🤖 Agentic AI & Generative AI",
      skills: ["LangGraph", "Multi-Agent Systems", "LLMs", "RAG", "MCP", "CrewAI", "OpenAI", "Ollama", "LangChain"],
    },
    {
      title: "🧠 Deep Learning & Core AI",
      skills: ["PyTorch", "Transformers", "VLMs", "Reinforcement Learning", "Computer Vision", "NLP", "TensorFlow", "Scikit-learn"],
    },
    {
      title: "⚙️ Backend & Architecture",
      skills: ["Python", "FastAPI", "Flask", "SQL", "C/C++", "Java", "JavaScript"],
    },
    {
      title: "🌐 MLOps & Cloud Infrastructure",
      skills: ["Docker", "Kubernetes", "Terraform", "Helm", "CI/CD", "GitHub Actions", "GCP"],
    },
    {
      title: "💾 Data Platforms & Vector Stores",
      skills: ["ChromaDB", "FAISS", "PostgreSQL", "MongoDB", "Prometheus", "Grafana"],
    },
  ];

  const featuredTech = ["Multi-Agent Systems", "LangChain", "LangGraph", "Deep Learning", "Computer Vision", "NLP"];

  const certifications = [
    {
      school: "Stanford",
      title: "Supervised ML: Regression & Classification",
      url: "https://coursera.org/share/caa21be89c51c7416def316ca56d8d1e",
    },
    {
      school: "Stanford",
      title: "Advanced Learning Algorithms",
      url: "https://coursera.org/share/4342a8f4d09db72d45f04fc312b75b9f",
    },
    {
      school: "NVIDIA",
      title: "Getting Started with Deep Learning",
      url: "https://learn.nvidia.com/certificates?id",
    },
    {
      school: "Stanford",
      title: "Unsupervised Learning, Recommenders, RL",
      url: "https://coursera.org/share/75b5bb3817bf39e9a54b7f4c780c8377",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-600">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-blue-200/30 to-indigo-100/20 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-emerald-100/30 to-teal-50/20 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-purple-100/20 to-blue-50/30 blur-[120px] pointer-events-none -z-10" />

      <div className="space-y-24 py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-10 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-750 pointer-events-none" />

          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600/[0.06] border border-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Available for Elite Roles • 2026
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Wassim Hichri
              </h1>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
                AI Engineer &bull; Agentic AI & Generative AI
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-4">
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/projects"
                  className="group/btn relative bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-slate-900/10 transition-all duration-300 text-sm overflow-hidden text-center"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-0" />
                </Link>

                <a
                  href="/cv hichri_wassim.pdf"
                  download="cv hichri_wassim.pdf"
                  className="bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-800 px-6 py-3 rounded-xl font-semibold shadow-sm transition-all duration-300 text-sm text-center"
                >
                  Download CV
                </a>
              </div>

              <div className="flex items-center gap-5 text-xs font-bold text-slate-400 uppercase tracking-widest sm:border-l sm:border-slate-200 sm:pl-6">
                <a href="https://github.com/wessim125" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/wassim-hichri-205007354" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:hichriwassim84@gmail.com" className="hover:text-blue-600 transition-colors">
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {featuredTech.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-lg tracking-tight"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative group/photo shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover/photo:opacity-40 transition-opacity duration-500" />
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-white p-2.5 border border-slate-200/60 shadow-xl relative z-10 transition-transform duration-500 group-hover/photo:scale-[1.02]">
              <div className="w-full h-full rounded-2xl bg-slate-50 overflow-hidden relative border border-slate-100">
                <img
                  src="/wassim.jpg"
                  alt="Wassim Hichri"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover/photo:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. BENTO BUNDLE: ABOUT & EDUCATION ================= */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
    <div className="space-y-5">
      <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">
        About Me
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        AI Engineer, Generative &amp; Agentic AI
      </h2>

      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
        <p>
          I am an{" "}
          <strong className="text-slate-900 font-semibold">
            AI Engineer
          </strong>{" "}
          passionate about designing intelligent systems that can reason,
          learn, perceive, and act autonomously.
        </p>

        <p>
          My work focuses on{" "}
          <strong className="text-slate-900 font-semibold">
            Generative AI, Large Language Models (LLMs), Agentic AI,
            Multi-Agent Systems, Retrieval-Augmented Generation (RAG),
            Natural Language Processing, and Computer Vision
          </strong>
          , with the goal of building AI solutions that address complex
          real-world challenges.
        </p>

        <p>
          Backed by a strong foundation in{" "}
          <strong className="text-slate-900 font-semibold">
            Applied Mathematics, Machine Learning, and Artificial Intelligence
          </strong>
          , I enjoy turning innovative ideas into intelligent applications
          that are reliable, scalable, and impactful.
        </p>

        <p>
          I am driven by the vision of creating the next generation of AI
          systems that empower people, augment decision-making, and deliver
          meaningful business value.
        </p>
      </div>
    </div>
  </div>

  {/* Education Card */}
  <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
    {/* Garde ici ton contenu Education existant */}
  </div>



          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1.7fr]">
            <div className="space-y-6">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                <div className="space-y-6 relative z-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-400">Education</div>
                  <div className="space-y-5">
                    <div className="relative pl-4 border-l-2 border-blue-500/40">
                      <h3 className="font-bold text-base tracking-tight text-white">ENSIT Tunis</h3>
                      <p className="text-xs text-slate-400 font-medium">Engineering Degree — Applied Mathematics & Modeling</p>
                      <p className="text-xs text-slate-400 font-medium">Master Research Program in Data Science (M2)</p>
                      <span className="inline-block text-[10px] bg-white/10 text-blue-300 font-bold px-2 py-0.5 rounded mt-1">2023 - 2026</span>
                    </div>
                    <div className="relative pl-4 border-l-2 border-slate-700">
                      <h3 className="font-bold text-base tracking-tight text-slate-200">IPEIN Nabeul</h3>
                      <p className="text-xs text-slate-400">Classe Préparatoire (Physics & Chemistry)</p>
                      <span className="inline-block text-[10px] bg-white/10 text-slate-400 font-bold px-2 py-0.5 rounded mt-1">2021 - 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Langues</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Compétences linguistiques</h3>
                <ul className="mt-4 space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <strong className="text-slate-900">Français</strong> — Courant
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <strong className="text-slate-900">Anglais</strong> — B2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <strong className="text-slate-900">Russe</strong> — A1
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
        {/* ================= 3. FEATURED PROJECTS ================= */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-4">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600">Selected Works</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 group transition-colors">
              View All Projects <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="group/card bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover/card:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 tracking-tight uppercase">{project.subtitle}</p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 pt-1">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-slate-50 text-slate-600 border border-slate-100 text-[10px] px-2.5 py-1 rounded-md font-medium tracking-tight">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="block text-center text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-100 py-2.5 rounded-xl transition-all duration-300"
                  >
                    Voir le projet
                  </Link>

                  <div className="flex gap-2">
                    {(project.demoVideo || project.gallery?.length) && (
                      <Link
                        href={`/projects/${project.slug}/demo`}
                        className="flex-1 text-center text-xs font-bold text-white bg-slate-900 hover:bg-slate-700 py-2.5 rounded-xl transition-all duration-300"
                      >
                        ▶ Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. EXPERIENCE ================= */}
        <section id="experience" className="space-y-8">
          <div className="space-y-1 border-b border-slate-200/60 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-600">Timeline</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative bg-white/50 border border-slate-200/60 rounded-2xl p-6 shadow-sm group hover:bg-white transition-colors duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100/50 px-2.5 py-0.5 rounded-md text-center">{exp.year}</span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-teal-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{exp.role}</h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {exp.company} &bull; {exp.location}
                    </p>
                  </div>
                  <ul className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100 space-y-1.5 list-disc list-inside">
                    {exp.steps.slice(0, 3).map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. SKILLS ================= */}
        <section className="space-y-8">
          <div className="space-y-1 border-b border-slate-200/60 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600">Stack</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-white border border-slate-200/50 rounded-2xl p-5 shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-50/60 hover:bg-blue-50 hover:text-blue-600 border border-slate-100/80 hover:border-blue-200/50 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. CERTIFICATIONS ================= */}
        <section className="space-y-8">
          <div className="space-y-1 border-b border-slate-200/60 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">Validation</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-indigo-300/60 transition-all duration-300 group/cert"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600 font-bold text-lg group-hover/cert:bg-indigo-600 group-hover/cert:text-white transition-colors duration-300">
                  &Xi;
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    {cert.school}
                    <span className="text-indigo-500 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">↗</span>
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight group-hover/cert:text-indigo-600 transition-colors">
                    {cert.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= 7. ASSOCIATIVE ENGAGEMENT ================= */}
        <section className="space-y-8">
          <div className="space-y-1 border-b border-slate-200/60 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">Engagement</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Vie associative</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm">
              <img src="/images/wassim1.jpg" alt="Atelier IA" className="w-full h-44 object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2026</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Atelier IA</h3>
                <p className="mt-2 text-sm text-slate-600">Organisation d’un atelier technique sur l’IA et le Machine Learning.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 gap-1">
                <img src="/images/hack1.png" alt="Hackathon 1" className="w-full h-24 object-cover" />
                <img src="/images/hack2.png" alt="Hackathon 2" className="w-full h-24 object-cover" />
                <img src="/images/hack3.png" alt="Hackathon 3" className="w-full h-24 object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2025</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Hackathon</h3>
                <p className="mt-2 text-sm text-slate-600">Participation à un hackathon inter-écoles pour résoudre un défi technique.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm">
              <img src="/images/masmoudi.png" alt="Masmoudi" className="w-full h-44 object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2024</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Conférence</h3>
                <p className="mt-2 text-sm text-slate-600">Organisation d’une conférence sur l’innovation et l’esprit d’entreprendre.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 8. CONTACT ================= */}
        <section id="contact" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto space-y-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2 relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-white/5 px-2.5 py-1 rounded-md">Get in Touch</span>
            <h2 className="text-3xl font-black tracking-tight">Contact Me</h2>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">Prêt à collaborer sur des projets d'envergure ou à intégrer vos équipes IA.</p>
          </div>

          <ContactForm />
        </section>
      </div>
    </div>
  );
}