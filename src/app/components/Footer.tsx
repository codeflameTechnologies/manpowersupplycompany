import { Link } from "react-router";
import {
  Users, Phone, Mail, MapPin, Facebook, Twitter, Linkedin,
  Instagram, ArrowRight, ChevronRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Recruitment Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "Industrial Manpower",
  "Factory Workers",
  "Skilled Technicians",
  "Security Staff",
  "Housekeeping Staff",
  "Warehouse Staff",
  "Construction Workers",
  "Contract Staffing",
  "Permanent Staffing",
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      {/* Top CTA strip */}
      <div style={{ background: "var(--brand-orange)" }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl text-white font-semibold">
            Looking for reliable manpower for your business?
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-brand-orange font-bold px-6 py-2.5 rounded-xl hover:bg-brand-orange-light transition-colors whitespace-nowrap"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block">Sample Demo</span>
                <span className="text-xs text-white/50 tracking-widest uppercase">Solutions</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's trusted manpower supply partner since 2008. We connect businesses with skilled and unskilled workers across all industries.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 text-white/60 hover:text-brand-orange text-sm transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-white/60 hover:text-brand-orange text-sm transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  123 Business Hub, Andheri East,<br />Mumbai — 400069, Maharashtra
                </span>
              </li>
              <li>
                <a href="tel:+919149209580" className="flex gap-3 items-center text-white/60 hover:text-brand-orange text-sm transition-colors">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  +91 91492 09580
                </a>
              </li>
              <li>
                <a href="mailto:info@codeflame.com" className="flex gap-3 items-center text-white/60 hover:text-brand-orange text-sm transition-colors">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  info@codeflame.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-white/50 text-xs mb-1">Business Hours</p>
              <p className="text-white text-sm font-medium">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-white/50 text-xs mt-0.5">Emergency support 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Sample Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
