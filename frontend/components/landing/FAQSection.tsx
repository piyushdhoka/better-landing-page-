"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const faqs = [
  {
    q: "What types of AI agents does Better Logs support?",
    a: "Better Logs works with any LLM-based agent — OpenAI, Anthropic, Cohere, open-source models, multi-step chains, tool-using agents, and custom pipelines. If it makes API calls, we can trace it.",
  },
  {
    q: "How does Better Logs detect hallucinations?",
    a: "We use a combination of source-grounding checks, confidence scoring, and pattern analysis across your agent's outputs. When an output diverges significantly from source material, we flag it with a confidence score.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is encrypted in transit and at rest. We're SOC 2 Type II compliant, and enterprise plans include options for VPC deployment, BYOK encryption, and data residency controls.",
  },
  {
    q: "Can I self-host Better Logs?",
    a: "Yes — our Enterprise plan includes full on-prem deployment options. You get the same powerful interface with complete control over your infrastructure and data.",
  },
  {
    q: "How long does integration take?",
    a: "Most teams are up and running in under 10 minutes. Our SDK supports Python, TypeScript, and Go, and requires just 3 lines of code to start capturing traces.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 sm:py-32" id="faq" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-pixel text-[10px] tracking-[0.2em] text-black uppercase mb-4 inline-block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mt-2">Frequently asked questions</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                    id={`faq-toggle-${i}`}
                  >
                    <h3 className="font-semibold text-black text-[15px] pr-4 group-hover:text-gray-600 transition-colors">
                      {faq.q}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    } bg-white shadow-sm`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>
                  <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                    <p className="pt-3 pb-1 text-sm text-black leading-relaxed pr-12 font-mono tracking-tight">
                      {faq.a}
                    </p>
                  </div>
                </div>
            ))}
          </div>

          {/* Still need help */}
            <div className="mt-12 rounded-xl border border-gray-200 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gray-50/50">
              <div>
                <h4 className="font-bold text-black text-lg">Still need help?</h4>
                <p className="text-sm text-black mt-1 font-mono tracking-tight">We&apos;re happy to jump on a call and dive into your stack.</p>
              </div>
              <a
                href="#contact"
                className="bg-black !text-white px-6 py-3 rounded-sm text-xs font-pixel hover:bg-gray-900 transition-colors shadow-md"
                style={{ color: 'white' }}
                id="faq-contact"
              >
                Contact Support
              </a>
            </div>
      </div>
    </section>
  );
}
