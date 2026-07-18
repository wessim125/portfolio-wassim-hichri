"use client";

import React from "react";

export default function AgentGraph() {
  // Simulation de nœuds pour l'affichage visuel
  const nodes = [
    { id: 1, label: "User Input", type: "input" },
    { id: 2, label: "Agent Orchestrator", type: "core" },
    { id: 3, label: "Tools Execution", type: "tool" },
  ];

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">Architecture du Système</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            <div className={`px-5 py-3 rounded-lg border shadow-sm font-medium text-sm text-center transition-all
              ${node.type === "input" ? "bg-blue-50 border-blue-200 text-blue-700" : ""}
              ${node.type === "core" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : ""}
              ${node.type === "tool" ? "bg-slate-50 border-slate-200 text-slate-700" : ""}
            `}>
              {node.label}
            </div>
            {index < nodes.length - 1 && (
              <span className="text-text-muted hidden sm:inline">➔</span>
            )}
            {index < nodes.length - 1 && (
              <span className="text-text-muted sm:hidden">▼</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}