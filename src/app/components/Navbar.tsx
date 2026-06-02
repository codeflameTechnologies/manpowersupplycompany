import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronDown, Users, HardHat, Wrench, Shield,
  Sparkles, Warehouse, Building2, FileText, UserCheck, Phone,
  ArrowRight, Star,
} from "lucide-react";

const services = [
  { icon: Users,       label: "Industrial Manpower",  desc: "Factory & plant workers" },
  { icon: HardHat,     label: "Factory Workers",       desc: "Production line staff" },
  { icon: Wrench,      label: "Skilled Technicians",   desc: "Certified trade experts" },
  { icon: Shield,      label: "Security Staff",         desc: "Verified & trained guards" },
  { icon: Sparkles,    label: "Housekeeping Staff",    desc: "Hotels, offices & hospitals" },
  { icon: Warehouse,   label: "Warehouse Staff",       desc: "Pick, pack & dispatch" },
  { icon: Building2,   label: "Construction Workers",  desc: "Masons, carpenters & more" },
  { icon: FileText,    label: "Contract Staffing",     desc: "Flexible workforce solutions" },
  { icon: UserCheck,   label: "Permanent Staffing",    desc: "Full-time recruitment" },
];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Process",    href: "/process" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled,          setScrolled]          = useState(false);
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [servicesOpen,      setServicesOpen]      = useState(false);
  const [mobileServicesOpen,setMobileServicesOpen]= useState(false);
  const [topBarVisible,     setTopBarVisible]     = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setTopBarVisible(window.scrollY < 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = location.pathname === "/";
  const transparent = !scrolled && isHome;

  const navBg = scrolled
    ? "bg-white/97 backdrop-blur-xl shadow-xl shadow-brand/8"
    : isHome
    ? "bg-transparent"
    : "bg-brand";

  const textColor = transparent ? "text-white" : scrolled ? "text-brand" : "text-white";
  const logoTextColor = transparent ? "text-white" : scrolled ? "text-brand" : "text-white";

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR ─────────────────────────────────── */}
      <AnimatePresence>
        {topBarVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
            style={{ background: "linear-gradient(90deg, #071428, #0B1E3E, #162D5E)" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="hidden sm:inline">4.9/5 Rating · 200+ Clients</span>
                </span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline">ISO-Certified · Background-Verified Workers</span>
              </div>
              <div className="flex items-center gap-5">
                <a href="mailto:info@primestaff.com" className="text-white/50 hover:text-white text-xs transition-colors hidden sm:block">
                  info@primestaff.com
                </a>
                <a href="tel:+919876543210"
                  className="flex items-center gap-1.5 text-brand-orange text-xs font-semibold hover:text-white transition-colors">
                  <Phone className="w-3 h-3" /> +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN NAVBAR ──────────────────────────────────────────── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${navBg}`}
        style={{ top: topBarVisible ? 36 : 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #F97316, #EA6800)" }}>
                
              </div>
              <div className={`leading-none transition-colors duration-300 ${logoTextColor}`}>
                <span className="font-display font-extrabold text-xl tracking-tight block">Demo Logo</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-60">Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink key={link.href} to={link.href}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${textColor}
                     ${isActive ? "text-brand-orange" : "hover:text-brand-orange"}`
                  }>
                  {link.label}
                </NavLink>
              ))}

              {/* Services mega dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === "/services" ? "text-brand-orange" : `${textColor} hover:text-brand-orange`
                }`}>
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white rounded-2xl shadow-2xl shadow-brand/25 border border-brand/8 overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold tracking-widest uppercase text-brand-slate">Our 9 Services</span>
                          <Link to="/services" className="text-xs text-brand-orange font-semibold hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          {services.map((svc) => (
                            <Link key={svc.label} to="/services"
                              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-brand-light transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:scale-105 transition-all">
                                <svc.icon className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-brand leading-tight">{svc.label}</div>
                                <div className="text-[10px] text-brand-slate mt-0.5">{svc.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-brand px-5 py-3 flex items-center justify-between">
                        <span className="text-white/60 text-xs">Need a customised staffing solution?</span>
                        <Link to="/contact"
                          className="text-xs text-white font-semibold flex items-center gap-1 hover:text-brand-orange transition-colors">
                          Get a free quote <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+919876543210"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${textColor} hover:text-brand-orange`}>
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <Link to="/contact"
                className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #F97316, #EA6800)", boxShadow: "0 4px 18px rgba(249,115,22,0.35)" }}>
                Request Workers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed inset-0 bg-brand z-40 overflow-y-auto lg:hidden"
              style={{ top: topBarVisible ? 92 : 56 }}
            >
              <div className="px-6 py-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink key={link.href} to={link.href}
                    className={({ isActive }) =>
                      `block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                        isActive ? "bg-brand-orange text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`
                    }>
                    {link.label}
                  </NavLink>
                ))}

                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-0.5 pb-2"
                    >
                      {services.map((svc) => (
                        <Link key={svc.label} to="/services"
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                          <svc.icon className="w-4 h-4 text-brand-orange" />
                          {svc.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <Link to="/contact"
                    className="block w-full text-white text-center font-bold px-6 py-3.5 rounded-xl transition-colors"
                    style={{ background: "linear-gradient(135deg, #F97316, #EA6800)" }}>
                    Request Workers Now
                  </Link>
                  <a href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                    <Phone className="w-4 h-4" /> +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
