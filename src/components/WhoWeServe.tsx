import { UserCog, FileText, Users2, Calculator, Building } from "lucide-react";

const audiences = [
  {
    icon: UserCog,
    title: "Board Members & Directors",
    desc: "Elected presidents, vice-presidents, and committee members responsible for governance and policy decisions.",
  },
  {
    icon: FileText,
    title: "Secretaries & Administrators",
    desc: "Society secretaries and administrators managing records, compliance filings, and day-to-day operations.",
  },
  {
    icon: Users2,
    title: "Frontline Staff",
    desc: "Cashiers, loan officers, member service representatives, and other operational staff at co-operative societies.",
  },
  {
    icon: Calculator,
    title: "Auditors",
    desc: "Statutory auditors, internal audit teams, and finance officers conducting audits of co-operative societies.",
  },
  {
    icon: Building,
    title: "New Co-operative Societies",
    desc: "Newly registered societies looking to set up proper governance structures, audit processes, and operational systems from day one.",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 md:py-28 bg-[#EEF1F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
            Training Tailored for Every Role in a Co-operative
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Whether you are a first-time board member or a seasoned auditor, we
            have a program structured for your specific responsibilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl border border-[#E2E8F0] px-7 py-7 hover:border-[#1F7A63]/25 hover:shadow-md transition-all duration-200 group${
                i === 4 ? " sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-[#E5EEF0] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D0E6E1] transition-colors">
                <Icon className="w-6 h-6 text-[#0A192F]" />
              </div>
              <h3 className="text-base font-bold text-[#0A192F] mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
