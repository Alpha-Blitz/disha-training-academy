import { Award, BookOpen, MapPin, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "Trainers with decades of co-operative sector experience",
  },
  {
    icon: BookOpen,
    title: "Practical Training",
    desc: "Case-based learning rooted in real-world co-operative scenarios",
  },
  {
    icon: MapPin,
    title: "Karnataka Focus",
    desc: "Aligned with Karnataka Co-operative Societies Act & Rules",
  },
  {
    icon: ShieldCheck,
    title: "Governance Driven",
    desc: "Promoting accountability, compliance, and ethical management",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-[#EEF1F4] border-b border-[#E2E8F0] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-3">
            Trusted Across Karnataka
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A192F] tracking-tight">
            A Unit of Bhoomika Consultancy Services
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-white rounded-xl border border-[#E2E8F0] px-6 py-6 hover:border-[#1F7A63]/30 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-[#E5EEF0] rounded-xl flex items-center justify-center group-hover:bg-[#D0E6E1] transition-colors">
                <Icon className="w-5 h-5 text-[#0A192F]" />
              </div>
              <div>
                <p className="text-base font-bold text-[#0A192F] mb-1.5">{title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
