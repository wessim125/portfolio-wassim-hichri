import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC", // Fond principal très clair (Slate 50)
        surface: "#FFFFFF",    // Surface des cartes et éléments (Blanc pur)
        text: {
          primary: "#0F172A",   // Texte principal ultra-lisible (Slate 900)
          secondary: "#475569", // Texte secondaire (Slate 600)
          muted: "#64748B",     // Texte désactivé ou discret (Slate 500)
        },
        primary: "#3B82F6",     // Bleu moderne pour les accents majeurs
        secondary: "#10B981",   // Vert émeraude pour les succès/projets
        border: "#E2E8F0",      // Bordures fines et subtiles (Slate 200)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;