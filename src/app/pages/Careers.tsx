import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, X,
  Users, TrendingUp, Heart, Star, Send, Upload,
} from "lucide-react";

const jobs = [
  { id: 1, title: "Factory Operator", location: "Mumbai / Navi Mumbai", type: "Contract", category: "Industrial", experience: "1–3 years", salary: "₹15,000–₹22,000/mo", openings: 25, urgent: true },
  { id: 2, title: "Security Guard", location: "Multiple Cities", type: "Contract", category: "Security", experience: "1–2 years", salary: "₹12,000–₹18,000/mo", openings: 40, urgent: true },
  { id: 3, title: "Electrician (LT/HT)", location: "Pune / Chennai", type: "Contract", category: "Technical", experience: "2–5 years", salary: "₹20,000–₹35,000/mo", openings: 12, urgent: false },
  { id: 4, title: "Warehouse Associate", location: "Delhi NCR / Gurgaon", type: "Contract", category: "Logistics", experience: "0–2 years", salary: "₹13,000–₹18,000/mo", openings: 30, urgent: true },
  { id: 5, title: "Housekeeping Supervisor", location: "Bengaluru / Hyderabad", type: "Permanent", category: "Hospitality", experience: "3–5 years", salary: "₹18,000–₹25,000/mo", openings: 8, urgent: false },
  { id: 6, title: "Welder (SMAW/MIG)", location: "Ahmedabad / Surat", type: "Contract", category: "Technical", experience: "2–4 years", salary: "₹18,000–₹28,000/mo", openings: 15, urgent: false },
  { id: 7, title: "Hospital Ward Attendant", location: "Mumbai / Pune", type: "Permanent", category: "Healthcare", experience: "1–3 years", salary: "₹14,000–₹20,000/mo", openings: 20, urgent: true },
  { id: 8, title: "Construction Mason", location: "Mumbai / Thane", type: "Contract", category: "Construction", experience: "2–6 years", salary: "₹16,000–₹25,000/mo", openings: 35, urgent: false },
];

const categories = ["All", "Industrial", "Security", "Technical", "Logistics", "Hospitality", "Healthcare", "Construction"];

const benefits = [
  { icon: TrendingUp, title: "Regular Pay Hikes", desc: "Performance-based increments every year" },
  { icon: Heart, title: "ESI & PF Benefits", desc: "Full social security benefits from Day 1" },
  { icon: Users, title: "Team Environment", desc: "Work with a supportive, professional team" },
  { icon: Star, title: "Skill Development", desc: "Free safety and skill training programs" },
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

type FormData = {
  name: string; phone: string; email: string;
  role: string; experience: string; location: string; message: string;
};

function ApplyModal({ job, onClose }: { job: typeof jobs[0] | null; onClose: () => void }) {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", role: job?.title || "", experience: "", location: job?.location || "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-brand/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-brand/10">
          <div>
            <h3 className="text-brand" style={{ fontSize: "1.2rem" }}>Apply Now</h3>
            {job && <p className="text-brand-orange text-sm">{job.title} — {job.location}</p>}
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-brand-gray flex items-center justify-center hover:bg-red-50 transition-colors">
            <X className="w-4 h-4 text-brand-slate" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-brand mb-2">Application Submitted!</h3>
              <p className="text-brand-slate text-sm">Our recruitment team will review your profile and call you within 48 hours.</p>
              <button onClick={onClose} className="mt-6 text-brand-orange font-semibold text-sm hover:underline">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1">Full Name *</label>
                  <input required type="text" placeholder="Your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1">Phone *</label>
                  <input required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand mb-1">Email</label>
                <input type="email" placeholder="email@example.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand mb-1">Role Applied For *</label>
                <input required type="text" value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1">Experience</label>
                  <select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40">
                    <option value="">Select</option>
                    {["Fresher", "1–2 years", "2–5 years", "5–10 years", "10+ years"].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1">Preferred Location</label>
                  <input type="text" placeholder="City" value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand mb-1">Additional Message</label>
                <textarea rows={2} placeholder="Tell us more about yourself..." value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-brand-gray border border-brand/10 rounded-xl px-3 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 resize-none" />
              </div>
              <label className="flex items-center gap-3 p-4 bg-brand-gray rounded-xl border-2 border-dashed border-brand/15 cursor-pointer hover:border-brand-orange/40 transition-colors">
                <Upload className="w-5 h-5 text-brand-slate" />
                <span className="text-sm text-brand-slate">Upload Resume (optional)</span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3.5 rounded-xl transition-all">
                Submit Application <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);

  const filtered = activeCategory === "All" ? jobs : jobs.filter((j) => j.category === activeCategory);

  const openApply = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setApplyOpen(true);
  };

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
            Work With Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white mb-4">Find Your Next Opportunity
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto">
            Explore 185+ active job openings across 25+ cities. Apply today and our team will contact you within 48 hours.
          </motion.p>
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">Careers</span>
          </motion.nav>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 bg-brand-orange/5 border-b border-brand-orange/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand text-sm">{b.title}</div>
                    <div className="text-brand-slate text-xs mt-0.5">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
              <div>
                <h2 className="text-brand mb-1">Current Openings</h2>
                <p className="text-brand-slate text-sm">{filtered.length} positions available</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-brand text-white"
                        : "bg-brand-gray text-brand-slate hover:bg-brand-light hover:text-brand"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 0.06}>
                <div className="bg-brand-gray rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-brand/15">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-brand" style={{ fontSize: "1.1rem" }}>{job.title}</h3>
                        {job.urgent && (
                          <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Urgent</span>
                        )}
                      </div>
                      <span className="text-xs bg-brand text-brand-orange font-semibold px-2.5 py-1 rounded-full">{job.category}</span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-brand-orange font-semibold text-sm">{job.salary}</div>
                      <div className="text-xs text-brand-slate mt-0.5">{job.openings} openings</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-xs text-brand-slate">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />{job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-slate">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" />{job.type}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-slate">
                      <Briefcase className="w-3.5 h-3.5 text-brand-orange" />{job.experience}
                    </div>
                  </div>

                  <button
                    onClick={() => openApply(job)}
                    className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-mid text-white text-sm font-semibold py-2.5 rounded-xl transition-all"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Walk-in CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-white/65 text-lg mb-8">
              Submit your profile and we'll match you to the best openings as they come in.
            </p>
            <button
              onClick={() => { setSelectedJob(null); setApplyOpen(true); }}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl shadow-brand-orange/30"
            >
              Submit Your Profile <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyOpen && (
          <ApplyModal job={selectedJob} onClose={() => setApplyOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
