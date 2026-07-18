import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-text-primary tracking-tight hover:text-primary transition-colors">
          Portfolio
        </Link>
        <div className="flex gap-6 text-sm font-medium text-text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projets</Link>
          <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}