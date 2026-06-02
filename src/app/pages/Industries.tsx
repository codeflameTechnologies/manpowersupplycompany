import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CONSTRUCTION_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const HEALTHCARE_IMG = "https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const INDUSTRIAL_IMG = "https://images.unsplash.com/photo-1744301062790-e0d90a7ceced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const CORPORATE_IMG = "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const industries = [
  {
    title: "Manufacturing & Industrial",
    subtitle: "Factory & Plant Staffing",
    desc: "We are the preferred manpower partner for manufacturing companies across India. From production line workers and machine operators to quality inspectors and shift supervisors — we staff entire plants.",
    roles: ["Assembly Line Workers", "Machine Operators", "Quality Control", "Shift Supervisors", "Maintenance Technicians", "Safety Officers"],
    img: INDUSTRIAL_IMG,
    accent: "#0B1E3E",
  },
  {
    title: "Construction & Infrastructure",
    subtitle: "Site Workforce Solutions",
    desc: "Tight construction timelines demand a reliable labour supply. We deploy skilled tradespeople and general labourers to construction sites within 24 hours — all PPE-compliant and safety-briefed.",
    roles: ["Masons & Bricklayers", "Carpenters", "Welders & Fabricators", "Bar Benders", "Painters & Plasterers", "Site Supervisors"],
    img: CONSTRUCTION_IMG,
    accent: "#F97316",
  },
  {
    title: "Logistics & Warehousing",
    subtitle: "Supply Chain Workforce",
    desc: "E-commerce growth and supply chain expansion demand an agile warehouse workforce. We supply picking, packing, loading, dispatch and inventory management personnel.",
    roles: ["Warehouse Associates", "Pick & Pack Staff", "Forklift Operators", "Inventory Executives", "Dispatch Coordinators", "Logistics Helpers"],
    img: CORPORATE_IMG,
    accent: "#162D5E",
  },
  {
    title: "Hospitality & Hotels",
    subtitle: "Guest-Ready Service Staff",
    desc: "First impressions in hospitality depend entirely on your team. We supply trained housekeeping, kitchen, banquet and front-office staff who are presentation-ready and guest-experience focused.",
    roles: ["Housekeeping Attendants", "Kitchen Helpers & Cooks", "Banquet Staff", "Laundry Workers", "Bell Staff", "Facility Cleaners"],
    img: INDUSTRIAL_IMG,
    accent: "#0B3D6B",
  },
  {
    title: "Healthcare & Hospitals",
    subtitle: "Medical Support Workforce",
    desc: "Hospitals and clinics need reliable non-clinical support staff to keep operations running. We supply ward attenders, patient transport staff, housekeeping teams and laundry personnel.",
    roles: ["Ward Attenders", "Patient Care Helpers", "Hospital Housekeeping", "Biomedical Waste Handlers", "Pantry Staff", "Stretcher & Porter Staff"],
    img: HEALTHCARE_IMG,
    accent: "#0B1E3E",
  },
  {
    title: "Retail & Corporate Offices",
    subtitle: "Office & Store Staffing",
    desc: "From front-desk executives to store associates and pantry staff — we staff retail chains and corporate offices with presentable, trained personnel who represent your brand professionally.",
    roles: ["Retail Sales Associates", "Store Supervisors", "Office Assistants", "Pantry Boys", "Data Entry Operators", "Security & Housekeeping"],
    img: CORPORATE_IMG,
    accent: "#F97316",
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

export default function Industries() {
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
            Industries We Serve
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white mb-4">Workforce Expertise Across Sectors
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto">
            Every industry has unique workforce demands. We understand them deeply and deliver staffing solutions that fit.
          </motion.p>
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">Industries</span>
          </motion.nav>
        </div>
      </section>

      {/* Intro strip */}
      <div className="bg-brand-orange/10 border-b border-brand-orange/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-slate text-sm">
          We currently serve <span className="text-brand font-semibold">6 major industry verticals</span> across <span className="text-brand font-semibold">25+ cities</span> in India, with a combined active workforce of <span className="text-brand font-semibold">5,000+ workers</span>.
        </div>
      </div>

      {/* Industry sections — alternating layout */}
      {industries.map((ind, i) => (
        <section key={ind.title} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-brand-gray"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              <AnimatedSection delay={0} className={i % 2 !== 0 ? "lg:order-last" : ""}>
                <div className="relative">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="w-full rounded-2xl object-cover shadow-xl shadow-brand/15"
                    style={{ height: 380 }}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 text-white rounded-xl px-5 py-3 shadow-lg"
                    style={{ backgroundColor: ind.accent }}
                  >
                    <div className="text-xs opacity-80 mb-0.5">Sector Expertise</div>
                    <div className="font-display font-bold text-sm">{ind.subtitle}</div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div>
                  <span
                    className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 text-white"
                    style={{ backgroundColor: ind.accent }}
                  >
                    {ind.subtitle}
                  </span>
                  <h2 className="text-brand mb-4">{ind.title}</h2>
                  <p className="text-brand-slate leading-relaxed mb-7">{ind.desc}</p>

                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {ind.roles.map((role) => (
                      <div key={role} className="flex items-center gap-2 text-sm text-brand-slate">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: ind.accent }} />
                        {role}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
                    style={{ backgroundColor: ind.accent }}
                  >
                    Request {ind.title} Workers <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">Your Industry, Our Expertise</h2>
            <p className="text-white/65 text-lg mb-8">
              Can't find your sector above? We're constantly expanding. Let's talk about your specific workforce requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl shadow-brand-orange/30"
            >
              Discuss Your Requirements <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
