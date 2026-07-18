# Portfolio — Wassim Hichri

Portfolio d'AI Engineer construit avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.
Thème sombre inspiré d'un éditeur de code (VS Code), avec une animation de graphe d'agents dans le hero.

## 1. Installer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## 2. Ce qu'il faut personnaliser avant de publier

Tout le contenu (projets, expériences, compétences) est centralisé dans **`lib/data.ts`** —
c'est le seul fichier à modifier pour changer les textes.

À remplacer :
- `lib/data.ts` : liens GitHub réels (`githubUrl`), liens de démo (`demoUrl`), descriptions des projets
- `app/page.tsx` : email (`wassim@example.com`), lien LinkedIn, lien GitHub
- `public/resume.pdf` : place ton vrai CV ici (le bouton "Download Resume" pointe vers ce fichier)
- Ajoute une photo si tu veux dans `public/` et intègre-la dans le Hero (`app/page.tsx`)

## 3. Déployer sur Vercel (gratuit)

1. Crée un dépôt GitHub et pousse ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/portfolio.git
   git push -u origin main
   ```
2. Va sur https://vercel.com, connecte ton compte GitHub.
3. Clique "New Project", sélectionne le dépôt.
4. Laisse les réglages par défaut (Vercel détecte Next.js automatiquement) et clique "Deploy".
5. Ton site sera en ligne sur `https://ton-projet.vercel.app` en ~1 minute.

Chaque `git push` sur `main` redéploie automatiquement.

## Structure

```
app/
  page.tsx              → page d'accueil (hero, about, experience, projects, skills, contact)
  layout.tsx             → polices + metadata
  globals.css
  components/
    Nav.tsx               → barre de navigation façon explorateur de fichiers
    AgentGraph.tsx         → animation SVG du hero
    ProjectCard.tsx        → carte de projet
  projects/[slug]/page.tsx → page détaillée générée pour chaque projet
lib/
  data.ts                 → contenu : projets, expérience, compétences
```
