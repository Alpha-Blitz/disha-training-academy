import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import EnquireButton from "./EnquireButton";

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "10+", label: "Years of Expertise" },
  { value: "Karnataka", label: "Co-operative Focus" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A192F 0%, #0F2744 60%, #133352 100%)" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />
      {/* Soft emerald ambient — top right */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#1F7A63]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#040D1A] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10 items-center">

          {/* LEFT — content (3/5) */}
          <div className="lg:col-span-3">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/12 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#1F7A63] inline-block" />
              <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                A Unit of Bhoomika Consultancy Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white leading-[1.18] tracking-tight">
              Build Stronger{" "}
              <span className="text-[#D4AF37]">Co-operatives</span>
              <br />
              Through Expert Training
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-[0.9375rem] text-white/55 leading-relaxed max-w-lg">
              Disha Training Academy delivers specialised programs for co-operative
              board members, staff, secretaries, and auditors — grounded in
              Karnataka co-operative law, governance, and compliance.
            </p>

            {/* Tagline */}
            <p className="mt-3.5 text-[#D4AF37]/75 font-medium text-sm tracking-wide italic">
              "Your Trusted Partner in Co-operative Excellence"
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F7A63] text-white font-bold text-sm rounded-lg hover:bg-[#186252] transition-colors duration-150 shadow-md"
              >
                View Programs
                <ArrowRight className="w-4 h-4" />
              </a>
              <EnquireButton className="inline-flex items-center gap-2 px-6 py-3 bg-white/8 border border-white/18 text-white font-semibold text-sm rounded-lg hover:bg-white/14 transition-colors duration-150 cursor-pointer">
                <Phone className="w-4 h-4" />
                Enquire Now
              </EnquireButton>
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-extrabold text-white tracking-tight">{value}</p>
                  <p className="text-white/35 text-xs font-medium tracking-wide mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — hero image (2/5) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-end">
            <div className="relative w-full">
              <div className="absolute -inset-3 rounded-2xl border border-white/8" />
              <div className="absolute -inset-6 bg-[#1F7A63]/8 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/hero.jpeg"
                  alt="Co-operative training session at Disha Training Academy"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 0px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl border border-[#E2E8F0] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5EEF0] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A192F] text-sm font-extrabold">✓</span>
                </div>
                <div>
                  <p className="text-[#0A192F] font-bold text-sm leading-tight">
                    Karnataka's Trusted Co-operative Trainer
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">Sirsi · Uttara Kannada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
