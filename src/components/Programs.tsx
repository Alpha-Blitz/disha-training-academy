"use client";

import { useState } from "react";
import { Scale, ClipboardCheck, Building2, Users, X, Clock, MonitorSmartphone, CheckCircle2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Program {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  duration: string;
  format: string;
  fullDesc: string;
  outcomes: string[];
  audience: string[];
}

const programs: Program[] = [
  {
    icon: Scale,
    title: "Co-operative Governance Training",
    desc: "Comprehensive governance frameworks, decision-making protocols, and regulatory compliance under the Karnataka Co-operative Societies Act.",
    tag: "For Board Members",
    duration: "3 Days · 24 Hours",
    format: "In-person / Hybrid",
    fullDesc:
      "This program equips elected board members, directors, and committee officials with the knowledge and skills to govern their co-operative societies effectively, ethically, and in full compliance with the Karnataka Co-operative Societies Act and applicable Rules.",
    outcomes: [
      "Understand the roles, powers, and responsibilities of board members",
      "Conduct AGMs, special meetings, and committee meetings correctly",
      "Apply Karnataka Co-operative Societies Act and Bye-law provisions",
      "Implement accountability frameworks and ethical governance practices",
      "Handle elections, resolutions, and board-level dispute procedures",
      "Manage delegated authority, sub-committees, and annual reporting",
    ],
    audience: ["Presidents & Vice-Presidents", "Board Directors", "Committee Members", "Co-operative Officers"],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance Training",
    desc: "Equip auditors with statutory audit knowledge, risk identification skills, and compliance understanding aligned with Karnataka co-operative standards.",
    tag: "For Auditors",
    duration: "4 Days · 32 Hours",
    format: "In-person",
    fullDesc:
      "A rigorous program for statutory auditors, internal audit teams, and finance officers. It covers the full co-operative audit cycle — from planning and field work to report writing and compliance verification — aligned with RCS requirements and Karnataka co-operative law.",
    outcomes: [
      "Plan and conduct statutory audits as per KCSA requirements",
      "Prepare complete and compliant annual audit reports",
      "Identify financial irregularities, risk areas, and fraud indicators",
      "Ensure compliance with RCS circulars, notifications, and orders",
      "Apply accounting standards specific to co-operative societies",
      "Draft audit objection responses and issue compliance certificates",
    ],
    audience: ["Statutory Auditors", "Internal Audit Teams", "Finance Officers", "CA Firms serving Co-operatives"],
  },
  {
    icon: Building2,
    title: "Society Management",
    desc: "Operational and administrative skills for society managers and secretaries to manage records, meetings, members, and regulatory filings efficiently.",
    tag: "For Secretaries",
    duration: "2 Days · 16 Hours",
    format: "In-person / Hybrid",
    fullDesc:
      "Designed specifically for society secretaries and administrators, this program builds practical competency in the day-to-day management of a co-operative society — from maintaining accurate records to ensuring timely statutory filings with the Registrar of Co-operative Societies.",
    outcomes: [
      "Maintain member registers, share ledgers, and statutory records",
      "Manage loan documentation, KYC, and loan processing procedures",
      "Handle RCS filings, annual returns, and statutory compliance",
      "Organise, conduct, and minute general body and board meetings",
      "Process bye-law amendments and regulatory correspondence",
      "Understand the legal obligations and liabilities of a society secretary",
    ],
    audience: ["Society Secretaries", "Society Managers", "Administrative Officers", "Newly Registered Societies"],
  },
  {
    icon: Users,
    title: "Staff Skill Development",
    desc: "Strengthen functional competencies of frontline staff in member services, loan processing, record-keeping, and compliance communication.",
    tag: "For Staff",
    duration: "2 Days · 16 Hours",
    format: "In-person",
    fullDesc:
      "A practical skill-building program for frontline co-operative staff who interact daily with members, handle cash, process loans, and maintain operational records. Focused on building job-ready competencies that reduce errors and improve member satisfaction.",
    outcomes: [
      "Deliver quality and compliant service to society members",
      "Process loan applications accurately as per society norms",
      "Manage daily cash operations, teller functions, and reconciliation",
      "Maintain co-operative accounting records and passbooks",
      "Understand KYC norms, anti-fraud awareness, and data privacy",
      "Communicate professionally with members, management, and auditors",
    ],
    audience: ["Cashiers & Tellers", "Loan Officers", "Member Service Staff", "Data Entry & Back-Office Staff"],
  },
];

export default function Programs() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <>
      <section id="programs" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest text-[#1F7A63] uppercase mb-3">
              Our Training Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Purpose-Built Programs for Co-operative Societies
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Each program is designed around the unique operational, legal, and
              governance demands of co-operative societies in Karnataka. Click any
              program to learn more.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => {
              const { icon: Icon, title, desc, tag } = program;
              return (
                <button
                  key={title}
                  onClick={() => setSelected(program)}
                  className="group flex flex-col text-left bg-white border border-[#E2E8F0] rounded-xl p-7 shadow-sm hover:shadow-lg hover:border-[#1F7A63]/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer w-full"
                >
                  <div className="w-12 h-12 bg-[#E5EEF0] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D0E6E1] transition-colors">
                    <Icon className="w-6 h-6 text-[#0A192F]" />
                  </div>

                  <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#1F7A63] bg-[#E2F0EC] px-3 py-1.5 rounded-full mb-4 w-fit">
                    {tag}
                  </span>

                  <h3 className="text-base font-bold text-[#0A192F] mb-3 leading-snug">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {desc}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-[#0A192F] group-hover:text-[#1F7A63] transition-colors">
                    View Program Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#0A192F] px-7 pt-7 pb-6 flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <selected.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#1F7A63] bg-[#1F7A63]/20 px-2.5 py-1 rounded-full mb-2">
                      {selected.tag}
                    </span>
                    <h2 className="text-white font-extrabold text-lg leading-snug">
                      {selected.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-5 mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{selected.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MonitorSmartphone className="w-4 h-4" />
                  <span>{selected.format}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-7 py-6 flex-1 space-y-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                {selected.fullDesc}
              </p>

              <div>
                <h3 className="text-sm font-extrabold text-[#0A192F] uppercase tracking-wide mb-4">
                  What You'll Learn
                </h3>
                <ul className="space-y-2.5">
                  {selected.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1F7A63] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-[#0A192F] uppercase tracking-wide mb-3">
                  Who Should Attend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.audience.map((a) => (
                    <span
                      key={a}
                      className="text-xs font-semibold text-[#0A192F] bg-[#E5EEF0] border border-[#E2E8F0] px-3 py-1.5 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 px-7 py-5 border-t border-[#E2E8F0] bg-[#F8F9FA] flex items-center gap-3">
              <button
                onClick={() => {
                  setSelected(null);
                  window.dispatchEvent(new CustomEvent("openEnquireModal"));
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1F7A63] text-white text-sm font-bold rounded-lg hover:bg-[#186252] transition-colors shadow-sm"
              >
                Enquire About This Program
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-3 text-sm font-semibold text-slate-500 border border-[#E2E8F0] rounded-lg hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
