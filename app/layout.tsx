import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Wassim Hichri | Portfolio",
  description: "AI Engineer • Generative & Agentic AI Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}