import { BadgeCheck, Clock, Ribbon } from "lucide-react";

const certificates = [
  {
    title: "Certificate in Co-operative Governance",
    duration: "3 Days (24 Hours)",
    level: "Foundation",
    forWhom: "Board Members & Directors",
  },
  {
    title: "Certificate in Co-operative Audit & Compliance",
    duration: "4 Days (32 Hours)",
    level: "Professional",
    forWhom: "Statutory Auditors",
  },
  {
    title: "Certificate in Society Administration",
    duration: "2 Days (16 Hours)",
    level: "Foundation",
    forWhom: "Secretaries & Managers",
  },
  {
    title: "Certificate in Co-operative Finance",
    duration: "3 Days (24 Hours)",
    level: "Intermediate",
    forWhom: "Finance Officers",
  },
  {
    title: "Certificate in Member Services & Operations",
    duration: "2 Days (16 Hours)",
    level: "Foundation",
    forWhom: "Frontline Staff",
  },
  {
    title: "Advanced Certificate in Co-operative Law",
    duration: "5 Days (40 Hours)",
    level: "Advanced",
    forWhom: "Executives & Auditors",
  },
];

const levelColors: Record<string, string> = {
  Foundation:   "bg-[#EBF2FF] text-[#2B5CB8] border-[#C3D6F7]",
  Intermediate: "bg-[#FEF3E8] text-[#B45309] border-[#F6D5A8]",
  Professional: "bg-[#E2F0EC] text-[#186252] border-[#B6DCC5]",
  Advanced:     "bg-[#F3EEFF] text-[#6B3AAD] border-[#D5C0F4]",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-3">
            Certification Programs
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
            Earn a Recognised Certificate in Co-operative Management
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            All programs conclude with a certificate issued by Disha Training
            Academy, affirming professional competency in co-operative practices.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="relative bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#1F7A63]/25 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group"
            >
              {/* Top accent bar */}
              <div className="h-[3px] bg-gradient-to-r from-[#0A192F] to-[#1F7A63]" />

              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-[#E5EEF0] rounded-xl flex items-center justify-center group-hover:bg-[#D0E6E1] transition-colors">
                    <Ribbon className="w-5 h-5 text-[#0A192F]" />
                  </div>
                  <span className={`text-xs font-bold tracking-wider uppercase border rounded-full px-3 py-1.5 ${levelColors[cert.level]}`}>
                    {cert.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0A192F] leading-snug mb-5">
                  {cert.title}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-500">
                    <BadgeCheck className="w-4 h-4 text-[#1F7A63] flex-shrink-0" />
                    <span>For: {cert.forWhom}</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EEF1F4]">
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">
                    Certified by
                  </p>
                  <p className="text-sm font-bold text-[#0A192F]">
                    Disha Training Academy
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    A unit of Bhoomika Consultancy Services
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Certificates are issued upon successful completion and attendance.{" "}
            <a href="#contact" className="text-[#0A192F] font-bold hover:text-[#1F7A63] transition-colors hover:underline">
              Contact us to register
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
