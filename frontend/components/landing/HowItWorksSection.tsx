"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const steps = [
  {
    id: "detect",
    number: "01",
    label: "DETECT",
    title: "Catch the spike early",
    description: "Better Logs spots unusual patterns in production and alerts the right person before the issue spreads.",
    panel: {
      count: "01 / 03",
      badge: "SPIKE DETECTED",
      badgeColor: "text-red-600 bg-red-50",
      header: "ANOMALY DETECTED",
      message: "Spike detected. Quality regression in Revenue Q&A, trending higher than usual.",
      items: [
        { name: "Volume", detail: "3.4× vs. last 7 days", icon: "" },
        { name: "Affected runs", detail: "3 runs", icon: "" },
      ]
    },
  },
  {
    id: "investigate",
    number: "02",
    label: "INVESTIGATE",
    title: "Find out what went wrong",
    description: "Ask Better Logs to investigate, and it uses the trace to find the likely cause and suggest a fix.",
    panel: {
      count: "02 / 03",
      badge: "ROOT CAUSE FOUND",
      badgeColor: "text-amber-600 bg-amber-50",
      header: "INVESTIGATION REPORT",
      message: "Root cause identified: stale cache entry serving outdated embeddings.",
      items: [
        { name: "Confidence", detail: "94%", icon: "" },
        { name: "Fix Available", detail: "Yes", icon: "" },
      ]
    },
  },
  {
    id: "act",
    number: "03",
    label: "ACT",
    title: "Move from insight to action",
    description: "Send the fix to your task board or straight to a coding agent.",
    panel: {
      count: "03 / 03",
      badge: "READY TO DEPLOY",
      badgeColor: "text-green-700 bg-green-50",
      header: "SEND FIX TO",
      message: "Fix Tool Selection Logic\nDistinguish paid members from guest collaborators",
      items: [
        { name: "Linear", detail: "ENG-218", icon: "" },
        { name: "Claude Code", detail: "claude.ai", icon: "" },
        { name: "Cursor", detail: "open in editor", icon: "" },
        { name: "Codex", detail: "queue task", icon: "" },
      ]
    },
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.bottom < 0 || rect.top > vh) return;

    const scrolled = Math.max(0, -rect.top);
    const scrollable = el.offsetHeight - vh;
    if (scrollable <= 0) return;

    const progress = Math.min(1, Math.max(0, scrolled / scrollable));
    const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    setActiveStep(idx);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const active = steps[activeStep];
  const sectionHeight = `${100 + steps.length * 50}vh`;

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      id="how-it-works"
      style={{ height: sectionHeight, backgroundColor: "#FFFFFF" }}
    >
      <div className="sticky top-[5dvh] min-h-[90dvh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">See the issue. Ship the next step.</h2>
          <p className="text-sm text-black font-pixel uppercase tracking-wider">Detect an anomaly, investigate the cause, and push the next step forward in minutes.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full items-center">
          
          {/* Left Timeline Cards */}
          <div className="md:w-5/12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-200" />
            <div 
              className="absolute left-0 top-4 w-px bg-black transition-all duration-500 ease-out" 
              style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }} 
            />
            
            <div className="flex flex-col gap-4 pl-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div 
                    key={step.id} 
                    className={`p-4 rounded-xl border transition-all duration-500 ease-out ${
                      isActive 
                        ? 'bg-white border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] scale-100 opacity-100' 
                        : 'bg-transparent border-transparent scale-95 opacity-40'
                    }`}
                  >
                    <div className="font-pixel text-[9px] tracking-[0.2em] text-black mb-2 uppercase">
                      {step.number} &nbsp; {step.label}
                    </div>
                    <h3 className="text-lg font-medium text-black mb-1 tracking-tight">{step.title}</h3>
                    <p className="text-xs text-black leading-relaxed font-mono tracking-tight">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel UI */}
          <div className="md:w-7/12 flex items-center justify-center">
            <div className="w-full bg-white rounded-xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col transition-all duration-500 min-h-[380px]">
              
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 bg-[#FAFAFA]">
                <div className="font-pixel text-[9px] tracking-[0.15em] text-black uppercase">
                  BETTERLOGS TRACE
                </div>
                <div className="font-pixel text-[9px] tracking-widest text-black">
                  {active.panel.count}
                </div>
              </div>

              {/* Content Body */}
              <div className="flex-1 p-5 flex flex-col bg-white">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-pixel text-[9px] tracking-[0.15em] text-black uppercase">
                    {active.panel.header}
                  </span>
                  <span className="font-pixel text-[8px] tracking-widest text-black uppercase">
                    READY
                  </span>
                </div>

                <div className="bg-[#FAFAFA] border border-gray-100 rounded-lg p-4 mb-5">
                  {active.panel.message.split('\n').map((line, i) => (
                    <p key={i} className={`text-xs ${i === 0 ? 'font-medium text-black mb-1' : 'text-black font-mono tracking-tight'}`}>
                      {line}
                    </p>
                  ))}
                </div>

                <div className="font-pixel text-[8px] tracking-[0.15em] text-black uppercase mb-2 px-1">
                  {active.id === 'act' ? 'SEND TO' : 'DETAILS'}
                </div>

                <div className="flex flex-col">
                  {active.panel.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 border-t border-gray-50 group hover:bg-gray-50 transition-colors rounded-md -mx-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        {item.icon && <span className="text-black">{item.icon}</span>}
                        <span className="text-xs font-medium text-black">{item.name}</span>
                      </div>
                      <span className="text-[10px] text-black font-mono tracking-tight group-hover:text-black transition-colors">{item.detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
