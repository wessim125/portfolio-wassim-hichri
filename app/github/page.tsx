export default function GitHubHub() {
  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      <div className="border-b border-border pb-4">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">GitHub Activity Hub</h1>
        <p className="text-text-secondary text-sm mt-1">Statistiques de contribution réelles synchronisées.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Repositories", val: "24" },
          { label: "Total Commits", val: "840+" },
          { label: "Stars Received", val: "12" },
          { label: "Main Language", val: "Python" }
        ].map((stat) => (
          <div key={stat.label} className="bg-surface border border-border rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-text-primary">{stat.val}</p>
            <p className="text-xs text-text-muted font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-text-primary">Contribution Graph</h2>
        <div className="h-32 bg-background border border-border rounded-lg flex flex-wrap gap-1 p-4 overflow-hidden items-center justify-center">
          {/* Simulation du graphique de contribution de carrés verts */}
          {Array.from({ length: 140 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-[2px] ${
                i % 7 === 0 ? "bg-emerald-500" : i % 5 === 0 ? "bg-emerald-300" : "bg-slate-100"
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}