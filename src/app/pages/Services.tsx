import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  Users, HardHat, Wrench, Shield, Sparkles, Warehouse, Building2,
  FileText, UserCheck, ArrowRight, CheckCircle2, Clock, Star,
} from "lucide-react";

const services = [
  {
    id: "industrial",
    icon: Users,
    title: "Industrial Manpower",
    badge: "Most Popular",
    desc: "We supply a broad range of industrial workers for manufacturing plants, factories, and processing units. Our workers are trained in safety protocols and machinery operations.",
    features: ["Machine Operators", "Production Helpers", "Quality Inspectors", "Line Supervisors", "Packing & Labelling Staff"],
    color: "#0B1E3E",
  },
  {
    id: "factory",
    icon: HardHat,
    title: "Factory Workers",
    badge: null,
    desc: "Skilled and semi-skilled factory workers for assembly lines, production floors and material handling. All workers are briefed on your product-specific processes before deployment.",
    features: ["Assembly Line Workers", "Material Handlers", "Forklift Operators", "Shift Supervisors", "Maintenance Helpers"],
    color: "#162D5E",
  },
  {
    id: "technicians",
    icon: Wrench,
    title: "Skilled Technicians",
    badge: null,
    desc: "Certified electricians, welders, fitters, plumbers, HVAC technicians and other trade professionals with verified certifications and hands-on experience.",
    features: ["Electricians (LT/HT)", "Welders & Fabricators", "Fitters & Turners", "Plumbers", "HVAC Technicians"],
    color: "#0B3D6B",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Staff",
    badge: null,
    desc: "Trained, uniformed security personnel including guards, supervisors and access control staff. All our security staff are police-verified with PSA licence compliance.",
    features: ["Security Guards", "Senior Supervisors", "CCTV Operators", "Access Control Staff", "Corporate Bouncers"],
    color: "#1A4A8A",
  },
  {
    id: "housekeeping",
    icon: Sparkles,
    title: "Housekeeping Staff",
    badge: null,
    desc: "Professional cleaning and housekeeping staff for hotels, hospitals, corporate offices and residential complexes. Trained in hygiene standards and chemical handling.",
    features: ["Housekeeping Supervisors", "Cleaners & Janitors", "Pantry Staff", "Laundry Workers", "Facility Management Helpers"],
    color: "#0B1E3E",
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse Staff",
    badge: "High Demand",
    desc: "Efficient warehouse and logistics personnel experienced in inventory management, pick-pack operations, dispatch and WMS systems.",
    features: ["Warehouse Associates", "Inventory Executives", "Pick & Pack Workers", "Loading/Unloading Staff", "Dispatch Coordinators"],
    color: "#162D5E",
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction Workers",
    badge: null,
    desc: "Skilled and unskilled construction labour for residential, commercial and infrastructure projects. Workers are equipped with PPE and certified in site safety.",
    features: ["Masons & Brick Layers", "Bar Benders & Shuttering", "Carpenters", "Painters & Plasterers", "General Labour"],
    color: "#0B3D6B",
  },
  {
    id: "contract",
    icon: FileText,
    title: "Contract Staffing",
    badge: null,
    desc: "Flexible short-term and long-term contract staffing solutions. We handle all compliance — PF, ESI, payroll processing and statutory deductions.",
    features: ["Project-Based Staffing", "Seasonal Workforce", "Payroll Outsourcing", "PF & ESI Compliance", "Contract Management"],
    color: "#1A4A8A",
  },
  {
    id: "permanent",
    icon: UserCheck,
    title: "Permanent Staffing",
    badge: null,
    desc: "End-to-end permanent recruitment for skilled and executive positions. We manage everything from sourcing and screening to offer management and onboarding.",
    features: ["Executive Search", "Campus Hiring", "Bulk Recruitment", "Background Screening", "Offer & Onboarding Support"],
    color: "#0B1E3E",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PageHero({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <section className="relative bg-brand pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 60px)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange mb-5">
          {badge}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          className="text-white mb-4">{title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/65 text-lg max-w-2xl mx-auto">{subtitle}
        </motion.p>
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-orange">{badge}</span>
        </motion.nav>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Complete Manpower Solutions"
        subtitle="From factory floors to corporate offices — we provide the right workforce for every business requirement."
      />

      {/* Quick stats bar */}
      <div className="bg-brand-orange py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-10">
          {[
            { icon: Star, text: "9 Service Categories" },
            { icon: Clock, text: "24-Hr Emergency Deployment" },
            { icon: CheckCircle2, text: "100% Background Verified" },
            { icon: Users, text: "5,000+ Workers Ready" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm font-medium">
              <Icon className="w-4 h-4 flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                What We Offer
              </span>
              <h2 className="text-brand mb-4">Staffing Solutions Tailored to Your Industry</h2>
              <p className="text-brand-slate">
                Each service is backed by a deep talent pool, rigorous screening and dedicated account management.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 0.06}>
                <div
                  id={svc.id}
                  className="group relative bg-white border border-brand/10 rounded-2xl p-7 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  {svc.badge && (
                    <span className="absolute top-5 right-5 text-xs bg-brand-orange text-white font-semibold px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  )}

                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300 group-hover:h-full"
                    style={{ backgroundColor: svc.color }} />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${svc.color}15` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>

                  <h3 className="text-brand mb-3" style={{ fontSize: "1.2rem" }}>{svc.title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-brand-slate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-sm font-semibold mt-auto group-hover:gap-2.5 transition-all"
                    style={{ color: svc.color }}
                  >
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-brand mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-brand-slate text-lg mb-8 max-w-xl mx-auto">
              We offer fully customized workforce solutions. Tell us your requirement and we'll design a solution around it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-mid text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Discuss Custom Requirements <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
