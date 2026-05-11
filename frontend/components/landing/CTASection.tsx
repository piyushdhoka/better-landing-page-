export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32" id="cta" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
            Ready to see what your LLMs are really doing?
          </h2>
          <p className="text-sm text-black font-pixel uppercase tracking-wider mx-auto mb-10 max-w-2xl">
            Join 1,200+ teams using Better Logs to ship reliable AI agents. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#waitlist" className="bg-[#1A1A1A] !text-white px-8 py-4 rounded-sm text-sm font-pixel hover:bg-black transition-colors shadow-lg" style={{ color: 'white' }} id="cta-main">
              Join the Waitlist
            </a>
            <a href="#demo" className="bg-white text-black border border-gray-200 px-8 py-4 rounded-sm text-sm font-pixel hover:bg-gray-50 transition-colors" id="cta-demo">Book a Demo</a>
          </div>
          <p className="mt-8 text-[10px] font-pixel text-black uppercase tracking-widest">
            Free forever up to 10K traces/month • No credit card required
          </p>
      </div>
    </section>
  );
}
