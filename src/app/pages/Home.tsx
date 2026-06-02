import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, CheckCircle2, Star, Quote,
  Factory, Truck, Building2, UtensilsCrossed, Heart, ShoppingBag,
  Clock, Shield, Users, Award, TrendingUp, Headphones,
  Phone, Mail, MapPin, Send, PlayCircle, ChevronRight,
  Zap, Globe, BarChart3,
} from "lucide-react";

const HERO_IMG    = "https://images.unsplash.com/photo-1759763823587-c8bd07fca246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const ABOUT_IMG   = "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const FACTORY_IMG = "https://images.unsplash.com/photo-1654703680007-d5d9699cddfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

/* ─── hooks ─────────────────────────────────────────────────────── */
function useCountUp(end: number, trigger: boolean, duration = 2.4) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      setValue(Math.round((1 - Math.pow(1 - p, 4)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, trigger]);
  return value;
}

/* ─── data ───────────────────────────────────────────────────────── */
const stats = [
  { label: "Workers Placed", value: 5000, suffix: "+", icon: Users, color: "#F97316" },
  { label: "Happy Clients", value: 200, suffix: "+", icon: Award, color: "#22C55E" },
  { label: "Years Experience", value: 15, suffix: "+", icon: TrendingUp, color: "#3B82F6" },
  { label: "Cities Covered", value: 25, suffix: "+", icon: Globe, color: "#A855F7" },
];

const industries = [
  { icon: Factory, label: "Manufacturing", desc: "Assembly lines, production floors & quality inspectors", img: FACTORY_IMG },
  { icon: Building2, label: "Construction", desc: "Masons, carpenters, welders & site supervisors", img: null },
  { icon: Truck, label: "Logistics & Warehousing", desc: "Warehouse associates, loaders & dispatch coordinators", img: null },
  { icon: UtensilsCrossed, label: "Hospitality", desc: "Hotel staff, kitchen crew & housekeeping teams", img: null },
  { icon: Heart, label: "Healthcare", desc: "Ward attendants, support staff & hospital helpers", img: null },
  { icon: ShoppingBag, label: "Retail", desc: "Store associates, supervisors & customer service", img: null },
];

const whyItems = [
  { icon: Clock, no: "01", title: "24-Hour Deployment", desc: "Emergency manpower requests fulfilled within 24 hours from our pre-screened talent pool." },
  { icon: Shield, no: "02", title: "100% Background Verified", desc: "Police verification, reference checks and document validation for every single worker." },
  { icon: Users, no: "03", title: "50,000+ Talent Pool", desc: "Immediate access to a vast network of skilled and unskilled workers across all trades." },
  { icon: Award, no: "04", title: "ISO-Certified Quality", desc: "Our end-to-end recruitment process is ISO-certified for consistent, reliable delivery." },
  { icon: BarChart3, no: "05", title: "Pan-India Reach", desc: "Active operations in 25+ cities — we scale your workforce wherever your business is." },
  { icon: Headphones, no: "06", title: "Dedicated Account Manager", desc: "A single point of contact who knows your business and handles all your staffing needs." },
];

const testimonials = [
  {
    name: "Rajesh Mehta", company: "Mehta Plastics Pvt. Ltd.", role: "Managing Director",
    text: "PrimeStaff has been our workforce partner for 6 years. Their ability to provide trained factory workers on short notice is genuinely unmatched. Production never stops because of staffing.",
    rating: 5, initials: "RM", bg: "#0B1E3E",
  },
  {
    name: "Sunita Kapoor", company: "Grand Meridian Hotels", role: "Group HR Manager",
    text: "We switched to PrimeStaff for housekeeping and kitchen staff two years ago. Quality, responsiveness and professionalism — exceptional on every count. Highly recommended.",
    rating: 5, initials: "SK", bg: "#F97316",
  },
  {
    name: "Arjun Nair", company: "BuildRight Constructions", role: "Project Director",
    text: "Construction timelines are tight and unforgiving. PrimeStaff gets it — they've delivered skilled labour teams on time for three of our major projects in a row.",
    rating: 5, initials: "AN", bg: "#162D5E",
  },
];

const clients = [
  "Reliance Industries", "Tata Motors", "Larsen & Toubro", "Mahindra Group",
  "Bajaj Auto", "Infosys BPO", "ITC Hotels", "Apollo Hospitals",
  "CEAT Tyres", "Asian Paints", "Godrej Properties", "Maruti Suzuki",
];

const processSteps = [
  { n: "01", icon: ClipboardListIcon, title: "Requirement Collection", desc: "Tell us your needs — roles, count, skills, location & timeline." },
  { n: "02", icon: SearchIcon, title: "Screening & Verification", desc: "We shortlist from 50K+ candidates and run full background checks." },
  { n: "03", icon: RocketIcon, title: "Deployment in 24 Hrs", desc: "Interview your shortlist and receive deployment-ready workers." },
];

function ClipboardListIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
}
function SearchIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>;
}
function RocketIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
}

/* ─── shared components ──────────────────────────────────────────── */
function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-4 ${
      light ? "bg-white/15 text-white" : "bg-brand-orange/10 text-brand-orange"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-white" : "bg-brand-orange"}`} />
      {text}
    </span>
  );
}

function StatCounter({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const val = useCountUp(stat.value, trigger);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={trigger ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="text-center px-6 py-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
          style={{ backgroundColor: `${stat.color}25` }}>
          <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
        </div>
        <div className="font-display font-extrabold text-white mb-1" style={{ fontSize: "3.2rem", lineHeight: 1 }}>
          {val.toLocaleString()}<span style={{ color: stat.color }}>{stat.suffix}</span>
        </div>
        <p className="text-white/55 text-sm font-medium mt-2">{stat.label}</p>
      </div>
    </motion.div>
  );
}

/* ─── marquee ────────────────────────────────────────────────────── */
function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-5 bg-white border-y border-brand/8">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -50 * items.length] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-brand/40 text-sm font-semibold tracking-wider uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", workers: "", message: "" });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  /* ── HERO ─────────────────────────────────────────────────────── */
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        {/* Layered background */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(115deg, rgba(7,20,40,0.98) 0%, rgba(11,30,62,0.92) 55%, rgba(22,45,94,0.78) 100%)"
          }} />
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #F97316, transparent)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 lg:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left — copy */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2.5 bg-brand-orange/15 border border-brand-orange/25 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">India's Trusted Manpower Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white mb-6 leading-[1.08]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
              >
                Right Workers.<br />
                <span className="relative">
                  <span style={{ WebkitTextStroke: "2px #F97316", color: "transparent" }}>Right Roles.</span>
                </span>{" "}
                <span style={{ color: "#F97316" }}>Right Now.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg"
              >
                We supply verified, trained manpower to factories, warehouses, construction sites, hotels and hospitals — deployed within 24 hours, anywhere in India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="flex flex-col sm:flex-row gap-3 mb-12"
              >
                <Link to="/contact"
                  className="group flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-250 hover:shadow-2xl hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #F97316, #EA6800)", boxShadow: "0 10px 40px rgba(249,115,22,0.4)" }}>
                  Request Workers Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/process"
                  className="flex items-center justify-center gap-2.5 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 hover:border-white/25 transition-all duration-250">
                  <PlayCircle className="w-5 h-5 text-brand-orange" />
                  How It Works
                </Link>
              </motion.div>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {["#0B3D6B", "#F97316", "#162D5E", "#0B1E3E"].map((c, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-dark flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: c }}>
                      {["R", "S", "A", "+"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-white/55 text-xs">Trusted by 200+ businesses</span>
                </div>
                <div className="h-8 w-px bg-white/15 hidden sm:block" />
                <div className="flex items-center gap-2 text-white/55 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  ISO-Certified Process
                </div>
              </motion.div>
            </div>

            {/* Right — visual stack */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Main card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/80 border border-white/10" style={{ height: 460 }}>
                  <img src={HERO_IMG} alt="Industrial workers" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,20,40,0.7), transparent 60%)" }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Emergency Deployment</div>
                          <div className="text-white/60 text-xs">Workers on-site within 24 hours</div>
                        </div>
                        <div className="ml-auto">
                          <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat 1 — top right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl shadow-brand/20 border border-brand/8 min-w-[130px]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/15 flex items-center justify-center">
                      <Users className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <div className="font-display font-extrabold text-brand text-xl leading-none">5,000+</div>
                      <div className="text-brand-slate text-[10px] font-medium mt-0.5">Workers Placed</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stat 2 — left middle */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/3 -left-8 bg-white rounded-2xl p-4 shadow-xl shadow-brand/20 border border-brand/8 min-w-[140px]"
                >
                  <div className="text-[10px] text-brand-slate font-semibold uppercase tracking-wide mb-1.5">Client Satisfaction</div>
                  <div className="font-display font-extrabold text-brand text-2xl leading-none mb-2">98.5%</div>
                  <div className="w-full bg-brand/10 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-brand-orange" style={{ width: "98.5%" }} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}
              className="w-1 h-1.5 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* ── CLIENT TRUST STRIP ─────────────────────────────────────── */}
      <Marquee items={clients} />

      {/* ── STATS ──────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, #F97316, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade className="text-center mb-12">
            <SectionLabel text="Our Impact" light />
            <h2 className="text-white">Numbers That Speak for Themselves</h2>
          </Fade>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => <StatCounter key={s.label} stat={s} trigger={statsInView} />)}
          </div>
        </div>
      </section>

      {/* ── ABOUT / INTRO ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Fade>
            <div className="relative">
              <img src={ABOUT_IMG} alt="Corporate team meeting" className="w-full rounded-3xl object-cover shadow-2xl shadow-brand/15"
                style={{ height: 500 }} />
              {/* Overlay badges */}
              <div className="absolute -bottom-7 -left-7 bg-brand rounded-2xl p-5 shadow-2xl shadow-brand/40 text-white">
                <div className="font-display font-extrabold text-5xl leading-none text-brand-orange">15+</div>
                <div className="text-sm text-white/70 font-medium mt-1">Years of Excellence</div>
              </div>
              <div className="absolute top-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl shadow-brand/15 border border-brand/8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-slate">Satisfaction Rate</div>
                    <div className="font-display font-bold text-xl text-brand">98.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <SectionLabel text="About PrimeStaff" />
            <h2 className="text-brand mb-5">India's Most Reliable Manpower Partner Since 2008</h2>
            <p className="text-brand-slate leading-relaxed mb-5">
              PrimeStaff Solutions was founded with one mission: connect businesses with the right workers, fast. Today we're a 200-member organisation serving 25+ cities, placing over 5,000 workers annually across every major industry.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              Whether you need a single certified electrician or 500 factory workers by Monday morning — we deliver with verified quality, statutory compliance, and a satisfaction guarantee.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["ISO-Certified Recruitment", "Pan-India Presence (25+ Cities)", "Background Verified Workers", "Flexible Staffing Models", "Contract & Permanent Hiring", "24/7 Emergency Support"].map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-brand-slate">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/about"
              className="inline-flex items-center gap-2 text-brand font-bold border-b-2 border-brand-orange pb-0.5 hover:gap-3 transition-all">
              Learn Our Full Story <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </Fade>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ────────────────────────────────────────── */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              How It Works
            </span>
            <h2 className="text-white mb-2">Workforce Delivered in 3 Simple Steps</h2>
            <p className="text-white/80 text-base max-w-xl mx-auto">From your first call to workers on site — it's that straightforward.</p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-14 left-1/6 right-1/6 h-0.5 bg-white/20 hidden md:block" />

            {processSteps.map((step, i) => (
              <Fade key={step.n} delay={i * 0.12}>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/15 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-display font-extrabold text-white/25 text-5xl absolute top-5 right-6 leading-none">{step.n}</span>
                  <h3 className="text-white mb-2" style={{ fontSize: "1.15rem" }}>{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Fade>
            ))}
          </div>

          <Fade className="text-center mt-10">
            <Link to="/process"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-7 py-3.5 rounded-xl hover:bg-brand-orange-light transition-colors">
              See Full Recruitment Process <ChevronRight className="w-4 h-4" />
            </Link>
          </Fade>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text="Industries We Serve" />
            <h2 className="text-brand mb-4">Manpower for Every Sector</h2>
            <p className="text-brand-slate">We understand industry-specific demands and deliver compliant, trained workers on time — every time.</p>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <Fade key={ind.label} delay={i * 0.07}>
                <Link to="/industries"
                  className="group relative bg-white rounded-2xl overflow-hidden border border-brand/8 hover:border-brand-orange/25 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-350 hover:-translate-y-1.5 block">
                  {/* Color accent bar */}
                  <div className="h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                      <ind.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-brand mb-2" style={{ fontSize: "1.1rem" }}>{ind.label}</h3>
                    <p className="text-brand-slate text-sm leading-relaxed mb-5">{ind.desc}</p>
                    <div className="flex items-center gap-1.5 text-brand-orange text-xs font-bold group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>

          <Fade className="text-center mt-10">
            <Link to="/industries" className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-orange transition-colors">
              View All Industries <ChevronRight className="w-4 h-4" />
            </Link>
          </Fade>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Fade className="lg:sticky top-28">
              <SectionLabel text="Why PrimeStaff" />
              <h2 className="text-brand mb-5">6 Reasons 200+ Companies Choose Us</h2>
              <p className="text-brand-slate leading-relaxed mb-8">
                We don't just fill vacancies — we build workforce partnerships that scale with your business, protect your compliance and never let your operations slow down.
              </p>
              <div className="bg-brand rounded-2xl p-7 text-white">
                <div className="font-display text-4xl font-extrabold text-brand-orange mb-1">98.5%</div>
                <div className="text-white/70 text-sm mb-5">Client satisfaction score (2024)</div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-white/65 text-sm leading-relaxed italic">
                  "The best manpower agency we've worked with in 12 years of manufacturing."
                </p>
                <div className="mt-3 text-white/40 text-xs">— Factory GM, Pune</div>
              </div>
            </Fade>

            <div className="space-y-3">
              {whyItems.map((item, i) => (
                <Fade key={item.no} delay={i * 0.07}>
                  <div className="group flex gap-5 p-5 rounded-2xl bg-brand-gray hover:bg-brand hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-orange/20">
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-brand group-hover:bg-brand-orange flex items-center justify-center transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-brand-orange text-xs font-bold">{item.no}</span>
                        <h4 className="text-brand group-hover:text-white transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-brand-slate group-hover:text-white/65 text-sm leading-relaxed transition-colors">{item.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade className="text-center mb-14">
            <SectionLabel text="Client Testimonials" light />
            <h2 className="text-white mb-3">What Our Clients Say</h2>
            <p className="text-white/55 max-w-xl mx-auto text-base">Real words from real partners who trust us with their most critical resource — their workforce.</p>
          </Fade>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Fade key={t.name} delay={i * 0.1}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-7 hover:bg-white/12 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-brand-orange/40 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold flex-shrink-0"
                      style={{ backgroundColor: t.bg }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/45 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial}
                initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl p-7 shadow-2xl">
                <Quote className="w-8 h-8 text-brand-orange/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-brand text-sm leading-relaxed mb-6">"{testimonials[activeTestimonial].text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold"
                    style={{ backgroundColor: testimonials[activeTestimonial].bg }}>
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <div className="font-semibold text-brand text-sm">{testimonials[activeTestimonial].name}</div>
                    <div className="text-brand-slate text-xs">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`rounded-full transition-all ${i === activeTestimonial ? "w-7 h-2.5 bg-brand-orange" : "w-2.5 h-2.5 bg-white/25"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <img src={FACTORY_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.97), rgba(11,30,62,0.90))" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Fade>
            <SectionLabel text="Get Started Today" light />
            <h2 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Ready to Build Your<br />
              <span style={{ color: "#F97316" }}>Ideal Workforce?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation and a customised manpower proposal within 24 hours. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="flex items-center justify-center gap-2.5 text-white font-bold px-9 py-4 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #F97316, #EA6800)", boxShadow: "0 12px 40px rgba(249,115,22,0.45)" }}>
                Request Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+919149209580"
                className="flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 text-white font-semibold px-9 py-4 rounded-xl hover:bg-white/18 transition-all">
                <Phone className="w-5 h-5 text-brand-orange" /> +91 91492 09580
              </a>
            </div>
            <p className="text-white/30 text-xs mt-7">
              200+ companies trust us · ISO certified · 24-hr deployment · Pan-India presence
            </p>
          </Fade>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Fade>
            <SectionLabel text="Quick Enquiry" />
            <h2 className="text-brand mb-3">Tell Us Your Requirements</h2>
            <p className="text-brand-slate mb-8 leading-relaxed">
              Fill in the form and our dedicated team will call you back within 2 business hours with a tailored manpower proposal.
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Call Us", value: "+91 91492 09580", sub: "Mon–Sat, 9 AM–7 PM", href: "tel:+919149209580" },
                { icon: Mail, label: "Email Us", value: "info@codeflame.com", sub: "Response within 2 hours", href: "mailto:info@codeflame.com" },
                { icon: MapPin, label: "Head Office", value: "123 Business Hub, Andheri East", sub: "Mumbai — 400069", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors">
                    <c.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-slate uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-brand font-semibold text-sm">{c.value}</div>
                    <div className="text-brand-slate text-xs">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </Fade>

          <Fade delay={0.15}>
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="bg-white border border-green-200 rounded-2xl p-14 text-center shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-brand mb-2">Request Received!</h3>
                <p className="text-brand-slate text-sm">Our team will contact you within 2 business hours with a tailored proposal.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-brand/8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Full Name *", field: "name", type: "text", placeholder: "Your name" },
                    { label: "Company *", field: "company", type: "text", placeholder: "Company name" },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-xs font-bold text-brand mb-1.5">{label}</label>
                      <input required type={type} placeholder={placeholder}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">Phone *</label>
                    <input required type="tel" placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">Email</label>
                    <input type="email" placeholder="email@company.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand mb-1.5">Workers Required *</label>
                  <select required value={form.workers} onChange={(e) => setForm({ ...form, workers: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition">
                    <option value="">Select number of workers</option>
                    {["1–5", "6–20", "21–50", "51–100", "100+"].map(o => <option key={o} value={o}>{o} Workers</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand mb-1.5">Message / Requirements</label>
                  <textarea rows={3} placeholder="Tell us what type of workers you need and any special requirements..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #F97316, #EA6800)", boxShadow: "0 8px 30px rgba(249,115,22,0.35)" }}>
                  Send Enquiry <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-brand-slate/70">
                  <CheckCircle2 className="inline w-3.5 h-3.5 text-green-500 mr-1" />
                  We reply within 2 hours. No spam, ever.
                </p>
              </form>
            )}
          </Fade>
        </div>
      </section>
    </>
  );
}
