import { ArrowRight } from "lucide-react";
import EnquireButton from "./EnquireButton";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #0A192F 0%, #0F2744 60%, #133352 100%)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow accents */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#1F7A63]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-4">
          Get Started Today
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          Ready to Strengthen Your Co-operative Society?
        </h2>
        <p className="mt-6 text-white/55 text-base leading-relaxed max-w-xl mx-auto">
          Speak with our training team to find the right program for your board
          members, secretaries, or auditors. Batch enrolments are welcome.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <EnquireButton className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F7A63] text-white font-bold text-sm rounded-lg hover:bg-[#186252] transition-colors duration-150 shadow-md hover:shadow-lg cursor-pointer">
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </EnquireButton>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/8 border border-white/18 text-white font-semibold text-sm rounded-lg hover:bg-white/14 transition-colors duration-150"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
