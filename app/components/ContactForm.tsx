"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"" | "sending" | "sent" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Veuillez remplir tous les champs avant d'envoyer le message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.error || "Impossible d'envoyer le message.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setErrorMessage("Impossible d'envoyer le message. Réessayez plus tard.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative z-10 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="contact-name" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Nom
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500/80 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-200 transition-colors placeholder:text-slate-700"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="contact-email" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500/80 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-200 transition-colors placeholder:text-slate-700"
            placeholder="client@enterprise.com"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-message" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={4}
          className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500/80 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-200 transition-colors placeholder:text-slate-700 resize-none"
          placeholder="Décrivez votre projet ou offre d'emploi..."
        ></textarea>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
      {status === "sent" && (
        <p className="text-sm text-emerald-400">Message envoyé avec succès !</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full relative bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi..." : "Envoyer le message"}
      </button>
    </form>
  );
}
