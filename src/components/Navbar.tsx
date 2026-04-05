"use client";

import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Why Disha", href: "#why-disha" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Contact", href: "#contact" },
];

const openEnquireModal = () => {
  window.dispatchEvent(new CustomEvent("openEnquireModal"));
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      {/* Top accent line: navy → emerald → navy */}
      <div className="h-[3px] bg-gradient-to-r from-[#0A192F] via-[#1F7A63] to-[#0A192F]" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#0F2744] transition-colors">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-[#0A192F] font-bold text-[0.9rem] tracking-tight">
                Disha Training Academy
              </p>
              <p className="text-slate-400 text-xs tracking-wide">
                A unit of Bhoomika Consultancy Services
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-[#0A192F] text-sm font-medium transition-colors duration-150 relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#1F7A63] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openEnquireModal}
              className="ml-1 px-5 py-2.5 bg-[#1F7A63] text-white text-sm font-semibold rounded-lg hover:bg-[#186252] transition-colors duration-150 shadow-sm hover:shadow-md"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-500 hover:text-[#0A192F] rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 pb-5 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-slate-600 hover:text-[#0A192F] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-3">
              <button
                onClick={() => { setMenuOpen(false); openEnquireModal(); }}
                className="block w-full text-center px-4 py-3 bg-[#1F7A63] text-white text-sm font-semibold rounded-lg hover:bg-[#186252] transition-colors shadow-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
