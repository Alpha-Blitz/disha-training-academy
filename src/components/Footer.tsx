import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Training Programs", href: "#programs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Why Disha", href: "#why-disha" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Enquire Now", href: "#contact" },
];

const programs = [
  "Co-operative Governance Training",
  "Audit & Compliance Training",
  "Society Management",
  "Staff Skill Development",
  "Certificate in Co-operative Law",
];

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white">
      {/* Top accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#0A192F] via-[#1F7A63] to-[#0A192F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#0A192F] border border-white/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Disha Training Academy</p>
                <p className="text-white/40 text-xs tracking-wide mt-0.5">
                  A unit of Bhoomika Consultancy
                </p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Specialised training for co-operative societies in Karnataka —
              board members, secretaries, staff, and auditors.
            </p>
            <p className="text-[#D4AF37]/75 text-sm font-medium italic">
              "Your Trusted Partner in Co-operative Excellence"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 pb-3 border-b border-white/10">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="text-white/45 text-sm hover:text-white transition-colors duration-150"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1F7A63] flex-shrink-0 mt-0.5" />
                <span className="text-white/45 text-sm leading-relaxed">
                  Sirsi, Uttara Kannada, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1F7A63] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/45 text-sm hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1F7A63] flex-shrink-0" />
                <a
                  href="mailto:info@dishatrainingacademy.in"
                  className="text-white/45 text-sm hover:text-white transition-colors"
                >
                  info@dishatrainingacademy.in
                </a>
              </li>
            </ul>

            <div className="mt-7 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                Parent Organisation
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white transition-colors group"
              >
                Bhoomika Consultancy Services
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Disha Training Academy · A unit of Bhoomika Consultancy Services. All rights reserved.
          </p>
          <p className="text-white/18 text-xs">
            Sirsi, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
