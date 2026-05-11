import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      id="hero"
      style={{ backgroundColor: "#FBF7F0" }}
    >
      {/* Background Image - Static */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Watercolor landscape"
          fill
          className="object-cover object-top opacity-80"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBF7F0]/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-none text-black whitespace-nowrap">
            feedback to fix, <span className="italic">fast</span>
          </h1>

          <div className="mt-8 font-pixel text-xs sm:text-sm md:text-base text-warm-700 max-w-3xl leading-relaxed whitespace-nowrap">
            one workspace for teams to find issues, align on failures, and ship fixes together.
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <a href="#demo" className="btn-secondary px-6 py-3 text-sm font-medium border-warm-200" style={{ background: "rgba(251,247,240,0.6)" }}>
              Book a Demo
            </a>
            <a href="#waitlist" className="btn-primary px-6 py-3 text-sm font-medium shadow-xl shadow-warm-800/10">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
