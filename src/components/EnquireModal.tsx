"use client";

import { useEffect, useState, useRef } from "react";
import { X, Send, GraduationCap } from "lucide-react";

const interests = [
  "Co-operative Governance Training",
  "Audit & Compliance Training",
  "Society Management",
  "Staff Skill Development",
  "Certificate in Co-operative Law",
  "General Enquiry",
];

export default function EnquireModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openEnquireModal", handler);
    return () => window.removeEventListener("openEnquireModal", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setSubmitted(false), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#0A192F] px-7 pt-7 pb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">
                  Enquire About Our Programs
                </h2>
                <p className="text-white/50 text-sm mt-0.5">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/45 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-7 py-6">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 bg-[#E2F0EC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-[#1F7A63]" />
              </div>
              <h3 className="text-[#0A192F] font-bold text-lg mb-2">
                Enquiry Received
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Thank you for reaching out. Our team will contact you shortly to
                discuss the right program for your society.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-2.5 bg-[#1F7A63] text-white text-sm font-semibold rounded-lg hover:bg-[#186252] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors placeholder:text-slate-300 text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors placeholder:text-slate-300 text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors placeholder:text-slate-300 text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Society / Organisation Name
                </label>
                <input
                  type="text"
                  placeholder="Your co-operative society name"
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors placeholder:text-slate-300 text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  I'm Interested In
                </label>
                <select className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors text-slate-700 bg-white">
                  {interests.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements, number of participants, preferred dates..."
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]/20 focus:border-[#1F7A63] transition-colors resize-none placeholder:text-slate-300 text-slate-700"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1F7A63] text-white text-sm font-bold rounded-lg hover:bg-[#186252] transition-colors shadow-sm"
                >
                  Submit Enquiry
                  <Send className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 text-sm font-semibold text-slate-500 border border-[#E2E8F0] rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
