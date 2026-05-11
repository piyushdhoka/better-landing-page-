const features = [
  {
    title: "Real-Time Tracing",
    description: "Watch every LLM call, tool invocation, and decision node as it happens.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Hallucination Detection",
    description: "Automatically flag unreliable outputs with confidence scores on every response.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Structured Log Views",
    description: "Transform chaotic agent logs into clean, filterable, searchable data.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Cost & Token Analytics",
    description: "Track spend per agent, per call, per model. Set budgets and alerts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Performance Dashboards",
    description: "Latency, success rates, and throughput — beautifully visualized in real time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description: "Share traces, annotate failures, and assign follow-ups to your team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32" id="features" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-pixel text-[10px] tracking-[0.2em] text-black uppercase mb-4 inline-block">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mt-2">Everything you need to debug AI agents</h2>
          <p className="text-sm text-black font-pixel uppercase tracking-wider mt-4 mx-auto max-w-2xl">
            From tracing to analytics, Better Logs gives your team superpowers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div 
              key={f.title}
              className="bg-white rounded-xl p-8 border border-gray-200 h-full" 
              id={`feature-${i}`}
            >
              <div 
                className="w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center mb-6 bg-gray-50 text-black"
              >
                <div style={{ transform: "scale(0.85)" }}>
                  {f.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-black leading-relaxed font-mono tracking-tight">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
