import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { Target, Eye, Heart, Users, Award, Shield, TrendingUp, Globe, ArrowRight } from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const values = [
  { icon: Shield, title: "Integrity", desc: "We build long-term relationships based on transparency, honesty and accountability in every interaction." },
  { icon: Award, title: "Excellence", desc: "We set the highest standards in workforce quality, matching the right candidate to the right job every time." },
  { icon: Users, title: "People First", desc: "We treat every worker and client with dignity. Our success is measured by the success of those we serve." },
  { icon: TrendingUp, title: "Continuous Growth", desc: "We constantly improve our processes, expand our reach and evolve with the changing needs of industry." },
  { icon: Heart, title: "Empathy", desc: "We understand the pressures businesses face and the aspirations workers carry. We bridge both worlds." },
  { icon: Globe, title: "Pan-India Reach", desc: "Headquartered in Mumbai, we operate across 25+ cities with deep regional knowledge and local networks." },
];

const team = [
  { name: "Vikram Sharma", role: "Founder & Managing Director", initials: "VS", color: "#0B1E3E", exp: "20+ years in HR & staffing" },
  { name: "Priya Malhotra", role: "Director – Operations", initials: "PM", color: "#F97316", exp: "15+ years in workforce management" },
  { name: "Amit Desai", role: "Head – Business Development", initials: "AD", color: "#162D5E", exp: "12+ years in enterprise sales" },
  { name: "Sunita Nair", role: "Head – Human Resources", initials: "SN", color: "#0B3D6B", exp: "10+ years in talent acquisition" },
];

function AnimatedSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange mb-5"
        >
          {badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/65 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-orange">{badge}</span>
        </motion.nav>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Our Story, Mission & Values"
        subtitle="Learn about the people and principles that have made PrimeStaff India's most trusted manpower solutions company."
      />

      {/* ── COMPANY OVERVIEW ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img
              src={TEAM_IMG}
              alt="PrimeStaff leadership team"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-brand/20"
              style={{ height: 460 }}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-5">
              Who We Are
            </span>
            <h2 className="text-brand mb-5">Powering India's Workforce for Over 15 Years</h2>
            <p className="text-brand-slate leading-relaxed mb-5">
              Founded in 2008 in Mumbai, PrimeStaff Solutions started with a single mission: make it easy for businesses to find reliable, skilled workers and for workers to find stable, dignified employment.
            </p>
            <p className="text-brand-slate leading-relaxed mb-5">
              Today, we are a 200-member strong company servicing clients across manufacturing, construction, hospitality, healthcare, logistics and corporate sectors — deploying over 5,000 workers annually across India.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              Our strength lies in our vast network of pre-screened, background-verified candidates, our ISO-certified recruitment processes and our unwavering commitment to client satisfaction.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5,000+", label: "Workers Deployed" },
                { value: "200+", label: "Active Clients" },
                { value: "25+", label: "Cities Covered" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-brand-gray">
                  <div className="font-display text-3xl font-bold text-brand-orange mb-1">{s.value}</div>
                  <div className="text-brand-slate text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISSION + VISION ─────────────────────────────────── */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-brand rounded-2xl p-10 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To be the most reliable manpower partner for businesses across India — delivering skilled, verified and motivated workers that drive productivity, reduce hiring cost and fuel business growth. We aim to build bridges between opportunity and talent, creating lasting value for every stakeholder.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-brand-orange rounded-2xl p-10 h-full">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-white/85 leading-relaxed">
                To become India's #1 integrated workforce solutions company — recognised for our speed, quality and commitment to both clients and workers. We envision a future where every business, regardless of size or location, can access top-quality manpower at the push of a button.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                Our Core Values
              </span>
              <h2 className="text-brand mb-4">The Principles That Guide Us</h2>
              <p className="text-brand-slate">
                Every decision we make — from hiring a recruiter to deploying a team — is guided by these six core values.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-brand-gray rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand-orange/20">
                  <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h4 className="text-brand mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>
                    {v.title}
                  </h4>
                  <p className="text-brand-slate text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT TEAM ──────────────────────────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                Leadership
              </span>
              <h2 className="text-brand mb-4">Meet Our Management Team</h2>
              <p className="text-brand-slate">
                Seasoned professionals with decades of combined experience in HR, staffing, operations and business development.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-brand/8">
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ backgroundColor: member.color }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-display font-bold text-3xl">
                      {member.initials}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-brand mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>
                      {member.name}
                    </h4>
                    <p className="text-brand-orange text-xs font-semibold mb-3">{member.role}</p>
                    <p className="text-brand-slate text-xs">{member.exp}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">Partner With Us Today</h2>
            <p className="text-white/65 text-lg mb-8">
              Join 200+ companies across India who trust PrimeStaff for their workforce needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl shadow-brand-orange/30"
            >
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
