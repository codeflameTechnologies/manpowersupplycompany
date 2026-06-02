import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

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

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "+91 87654 32109 (Alt)",
    href: "tel:+919876543210",
    color: "#0B1E3E",
    note: "Mon–Sat: 9 AM – 7 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@primestaff.com",
    secondary: "hr@primestaff.com",
    href: "mailto:info@primestaff.com",
    color: "#F97316",
    note: "Response within 2 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+91 98765 43210",
    secondary: "Quick enquiries welcome",
    href: "https://wa.me/919876543210",
    color: "#25D366",
    note: "Available 24/7",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "123 Business Hub",
    secondary: "Andheri East, Mumbai – 400069",
    href: "#map",
    color: "#162D5E",
    note: "Near WEH Metro Station",
  },
];

const offices = [
  { city: "Mumbai (HQ)", address: "123 Business Hub, Andheri East, Mumbai – 400069", phone: "+91 98765 43210" },
  { city: "Pune", address: "45 Corporate Park, Viman Nagar, Pune – 411014", phone: "+91 87654 32100" },
  { city: "Delhi NCR", address: "78 Business Tower, Sector 62, Noida – 201301", phone: "+91 76543 21000" },
  { city: "Bengaluru", address: "12 Tech Hub, Whitefield, Bengaluru – 560066", phone: "+91 65432 10000" },
];

type FormData = {
  name: string; company: string; phone: string; email: string;
  service: string; workers: string; timeline: string; message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", company: "", phone: "", email: "",
    service: "", workers: "", timeline: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

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
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white mb-4">Let's Build Your Workforce
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto">
            Reach out for a free consultation. We'll respond within 2 hours with a tailored manpower proposal.
          </motion.p>
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">Contact</span>
          </motion.nav>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("https") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 border border-brand/8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${c.color}15` }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div className="text-xs text-brand-slate uppercase tracking-wider mb-1">{c.title}</div>
                  <div className="font-semibold text-brand text-sm mb-0.5">{c.primary}</div>
                  <div className="text-brand-slate text-xs mb-2">{c.secondary}</div>
                  <div className="text-xs px-2 py-1 rounded-full text-white inline-block" style={{ backgroundColor: c.color }}>
                    {c.note}
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact form + map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FORM */}
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-5">
              Quick Enquiry
            </span>
            <h2 className="text-brand mb-2">Send Us Your Requirement</h2>
            <p className="text-brand-slate mb-8 text-sm">Fill in the form and our team will prepare a customised manpower proposal for you.</p>

            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="text-brand mb-2">Thank You!</h3>
                <p className="text-brand-slate text-sm">Your enquiry has been received. Expect a call from our team within 2 business hours.</p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-orange text-sm font-semibold hover:underline">
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">Full Name *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={update("name")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">Company Name *</label>
                    <input required type="text" placeholder="Company" value={form.company} onChange={update("company")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">Phone Number *</label>
                    <input required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update("phone")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">Email Address</label>
                    <input type="email" placeholder="email@company.com" value={form.email} onChange={update("email")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1.5">Service Required *</label>
                  <select required value={form.service} onChange={update("service")}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition">
                    <option value="">Select a service...</option>
                    {["Industrial Manpower", "Factory Workers", "Skilled Technicians", "Security Staff", "Housekeeping Staff", "Warehouse Staff", "Construction Workers", "Contract Staffing", "Permanent Staffing"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">Workers Required *</label>
                    <select required value={form.workers} onChange={update("workers")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition">
                      <option value="">Select count</option>
                      {["1–5", "6–20", "21–50", "51–100", "101–500", "500+"].map(o => (
                        <option key={o} value={o}>{o} Workers</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand mb-1.5">When Do You Need Them?</label>
                    <select value={form.timeline} onChange={update("timeline")}
                      className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition">
                      <option value="">Select timeline</option>
                      {["Immediately", "Within 3 days", "Within 1 week", "Within 2 weeks", "Within a month"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand mb-1.5">Additional Details</label>
                  <textarea rows={4} placeholder="Describe your requirements, industry, location, any special skills needed..."
                    value={form.message} onChange={update("message")}
                    className="w-full bg-brand-gray border border-brand/10 rounded-xl px-4 py-2.5 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-orange/30">
                  Send Enquiry <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-brand-slate">
                  <CheckCircle2 className="inline w-3.5 h-3.5 text-green-500 mr-1" />
                  We reply within 2 business hours. No spam, ever.
                </p>
              </form>
            )}
          </AnimatedSection>

          {/* MAP + offices */}
          <AnimatedSection delay={0.15}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange mb-5">
              Find Us
            </span>
            <h2 className="text-brand mb-6">Our Office Locations</h2>

            {/* Map placeholder */}
            <div id="map" className="w-full rounded-2xl overflow-hidden mb-8 shadow-lg border border-brand/10" style={{ height: 280 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4117785736!2d72.8676!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80c9ad60f69%3A0x9f86d6d1e56d7a32!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PrimeStaff Solutions Office Location"
              />
            </div>

            {/* Office list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office) => (
                <div key={office.city} className="bg-brand-gray rounded-xl p-4 border border-brand/8">
                  <div className="font-semibold text-brand text-sm mb-1">{office.city}</div>
                  <div className="text-brand-slate text-xs leading-relaxed mb-2">{office.address}</div>
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-brand-orange text-xs font-medium hover:underline">
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Business hours */}
            <div className="mt-6 bg-brand rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-brand-orange" />
                <span className="font-semibold">Business Hours</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                  { day: "Sunday", time: "Closed (Emergency: 24/7)" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-white/70">
                    <span>{day}</span>
                    <span className="text-white font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-14 bg-brand-gray border-t border-brand/8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-brand-slate mb-4">Prefer to chat directly?</p>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20need%20manpower%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl text-base"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
