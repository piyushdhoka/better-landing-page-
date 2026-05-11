"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Docs", href: "#features" },
    { label: "Careers", href: "#how-it-works" },
    { label: "Changelog", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center w-full">
      <nav
        className={`transition-all duration-500 ease-out w-full flex items-center justify-between ${
          scrolled
            ? "max-w-full px-8 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm rounded-none mt-0"
            : "max-w-4xl px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full mt-6"
        }`}
      >
        {/* Logo — text only, like neatlogs */}
        <a href="#" className="group" id="nav-logo">
          <span className={`font-pixel tracking-wider transition-all duration-300 text-black ${scrolled ? 'text-lg' : 'text-base'}`}>
            betterlogs
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-pixel text-[11px] tracking-widest text-black transition-colors duration-200 hover:text-gray-600 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors text-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#waitlist" className="bg-[#1A1A1A] !text-white px-5 py-2.5 rounded-sm text-[12px] tracking-wide hover:bg-black transition-colors shadow-sm font-pixel" style={{ color: 'white' }}>
              Join the Waitlist
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 -mr-2 text-black"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-md bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl md:hidden flex flex-col gap-4 origin-top animate-in fade-in slide-in-from-top-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-pixel text-xs tracking-widest uppercase px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-gray-100" />
          <a href="#waitlist" className="text-center bg-[#1A1A1A] !text-white px-4 py-3 rounded-sm font-pixel text-sm hover:bg-black transition-colors" style={{ color: 'white' }}>
            Join the Waitlist
          </a>
        </div>
      )}
    </header>
  );
}
