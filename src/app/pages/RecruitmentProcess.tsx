import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ClipboardList, Search, ShieldCheck, MessageSquare, Rocket,
  ArrowRight, CheckCircle2, Clock, Users, FileCheck, ChevronDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Collection",
    subtitle: "Understanding Your Needs",
    desc: "We begin with a thorough consultation to understand your staffing requirements — roles needed, skill levels, quantity, duration, location and industry-specific compliance requirements.",
    details: ["One-on-one consultation call or site visit", "Detailed job description creation", "Skill and experience benchmarking", "Compliance and documentation checklist", "Timeline and deployment planning"],
    duration: "Same Day",
    color: "#0B1E3E",
  },
  {
    number: "02",
    icon: Search,
    title: "Candidate Screening",
    subtitle: "Talent Pool Search",
    desc: "Our recruiters search our database of 50,000+ pre-registered candidates, run targeted job postings and leverage our referral network to shortlist the best-fit candidates.",
    details: ["Database search across 50,000+ candidates", "Skill and aptitude assessment", "Experience and qualification matching", "Initial telephonic screening", "Digital profile creation"],
    duration: "12–24 Hours",
    color: "#F97316",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Verification & Compliance",
    subtitle: "Background Checks",
    desc: "Every shortlisted candidate undergoes rigorous background verification before being presented to you — ensuring trustworthy, document-complete workers every time.",
    details: ["Police Character Certificate verification", "Previous employer reference check", "Address and identity document validation", "Skill certification verification", "Medical fitness clearance"],
    duration: "24–48 Hours",
    color: "#162D5E",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Client Interview",
    subtitle: "Your Final Selection",
    desc: "We present verified candidates for your final selection. Interviews can be conducted on-site, at our office or virtually — whichever is most convenient for your team.",
    details: ["Candidate profiles shared in advance", "In-person or virtual interview facilitation", "Technical assessment coordination", "Client feedback and reselection if needed", "Offer letter preparation"],
    duration: "1–2 Days",
    color: "#0B3D6B",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Onboarding",
    subtitle: "Worker Goes Live",
    desc: "Post-selection, we handle all paperwork, induction and deployment logistics. Our dedicated account manager ensures smooth onboarding and ongoing post-placement support.",
    details: ["Employment documentation & joining formalities", "Induction and site safety briefing", "Uniform and PPE issuance", "PF/ESI enrollment and payroll setup", "Post-deployment follow-up within 72 hours"],
    duration: "24 Hours",
    color: "#F97316",
  },
];

const faqs = [
  { q: "How quickly can you deploy workers?", a: "For standard requirements, we deploy within 24–72 hours. For emergency requirements, we offer same-day deployment from our ready pool of pre-screened candidates." },
  { q: "Do you handle PF, ESI and payroll?", a: "Yes. Under our contract staffing model, we are the legal employer and manage all statutory compliance including PF, ESI, professional tax, payroll processing and Form 16 issuance." },
  { q: "What if we're not satisfied with a deployed worker?", a: "We offer a free replacement guarantee within the first 30 days. If a deployed worker is unsatisfactory, we replace them at no additional cost, typically within 48–72 hours." },
  { q: "Can you handle bulk requirements?", a: "Absolutely. We regularly handle bulk deployments of 50–500 workers for factory launches, seasonal peaks and large projects. Contact us for bulk pricing." },
  { q: "Do workers come with safety training?", a: "Yes. All workers are briefed on general safety protocols before deployment. For specialized industries, we provide site-specific safety induction with your HSE team." },
];

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand/10 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-brand-gray transition-colors"
      >
        <span className="font-semibold text-brand text-sm">{q}</span>
        <ChevronDown className={`w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-brand-slate text-sm leading-relaxed border-t border-brand/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RecruitmentProcess() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-brand pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 60px)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange mb-5">
            How We Work
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white mb-4">Our Recruitment Process
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto">
            A transparent, streamlined 5-step process that gets the right workers to your site — fast, verified and ready.
          </motion.p>
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">Process</span>
          </motion.nav>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                Step-by-Step
              </span>
              <h2 className="text-brand mb-4">From Request to Deployment</h2>
              <p className="text-brand-slate">
                Our process is engineered for speed without compromising quality. Here's exactly what happens after you reach out.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-7 top-14 bottom-14 w-0.5 bg-brand-light hidden lg:block" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    {/* Step badge */}
                    <div className="lg:col-span-1 flex justify-start lg:justify-center relative z-10">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="lg:col-span-11 bg-brand-gray rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-brand-orange/20">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                              <step.icon className="w-4 h-4" style={{ color: step.color }} />
                            </div>
                            <div>
                              <span className="text-xs text-brand-slate uppercase tracking-wider block">{step.subtitle}</span>
                              <h3 className="text-brand leading-tight" style={{ fontSize: "1.25rem" }}>{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-brand-slate text-sm leading-relaxed mb-5">{step.desc}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {step.details.map((d) => (
                              <div key={d} className="flex items-start gap-2 text-xs text-brand-slate">
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: step.color }} />
                                {d}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="lg:w-32 text-center p-4 rounded-xl text-white flex-shrink-0 self-start" style={{ backgroundColor: step.color }}>
                          <Clock className="w-5 h-5 mx-auto mb-1.5 opacity-80" />
                          <div className="text-xs opacity-70 mb-0.5">Timeline</div>
                          <div className="font-display font-bold text-sm leading-tight">{step.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="py-14 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
              {[
                { icon: Clock, title: "24-Hr Deployment", desc: "Emergency staffing from our ready pool" },
                { icon: FileCheck, title: "30-Day Replacement", desc: "Free replacement if unsatisfied within 30 days" },
                { icon: Users, title: "Dedicated Manager", desc: "Single point of contact for all your needs" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center">
                  <Icon className="w-8 h-8 mb-3 opacity-90" />
                  <div className="font-display font-bold text-xl mb-1">{title}</div>
                  <p className="text-white/80 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-4">FAQ</span>
              <h2 className="text-brand mb-4">Frequently Asked Questions</h2>
              <p className="text-brand-slate">Everything you need to know about our staffing process.</p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-brand-slate mb-6">Have more questions? Our team is ready to help.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-mid text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
