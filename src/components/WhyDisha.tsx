import { Lightbulb, RefreshCw, BookMarked, ShieldCheck, MessageSquare, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Real-World Expertise",
    desc: "Our trainers are seasoned practitioners from the co-operative banking and credit society sector — not just academics.",
  },
  {
    icon: RefreshCw,
    title: "Always Up-to-Date",
    desc: "Programs are continuously revised to reflect the latest amendments in Karnataka Co-operative Societies Act and RCS circulars.",
  },
  {
    icon: BookMarked,
    title: "Case-Based Learning",
    desc: "Every session incorporates real audit findings, governance failures, and compliance cases to build practical judgement.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Focused",
    desc: "Our curriculum is structured around statutory requirements — reducing audit objections and legal risk for your society.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Sessions",
    desc: "Participants engage in group discussions, mock audits, and role-plays that simulate real committee meetings.",
  },
  {
    icon: Trophy,
    title: "Recognised Certification",
    desc: "Completion certificates from Disha Training Academy are valued by co-operative audit authorities and peer institutions.",
  },
];

export default function WhyDisha() {
  return (
    <section id="why-disha" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-3">
            Why Choose Disha
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
            What Sets Our Training Apart
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            We are built exclusively for the co-operative sector — no generic
            management training, no one-size-fits-all content.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 bg-[#EEF1F4] border border-[#E2E8F0] rounded-xl p-6 hover:bg-white hover:shadow-md hover:border-[#1F7A63]/25 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 mt-0.5 w-11 h-11 bg-[#E5EEF0] rounded-xl flex items-center justify-center group-hover:bg-[#D0E6E1] transition-colors">
                <Icon className="w-5 h-5 text-[#0A192F]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A192F] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
