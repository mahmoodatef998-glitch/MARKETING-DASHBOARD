"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { labelAr: "القائمة", labelEn: "Menu", href: "#menu" },
  { labelAr: "المميزات", labelEn: "Featured", href: "#featured" },
  { labelAr: "عن المطعم", labelEn: "About", href: "#about" },
  { labelAr: "تواصل معنا", labelEn: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active link based on scroll position
      const sections = navLinks.map((l) => ({
        href: l.href,
        el: document.querySelector(l.href),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveLink(sections[i].href);
          return;
        }
      }
      setActiveLink("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waUrl = buildWhatsAppUrl(
    "مرحباً بمطعم العناني 🍽️ أريد الاستفسار عن القائمة",
    WHATSAPP_NUMBER
  );

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b border-[rgba(212,175,60,0.15)] shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            : "border-b border-transparent"
        )}
        style={
          scrolled
            ? {
                background:
                  "linear-gradient(to bottom, rgba(8,11,35,0.97) 0%, rgba(12,17,48,0.95) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : {}
        }
      >
        {/* Gold accent line — only when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,60,0.4)] to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* ── Brand Logo ── */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3.5 cursor-pointer focus:outline-none flex-shrink-0"
              aria-label="مطعم العناني — الرئيسية"
            >
              {/* Icon container */}
              <div
                className="relative w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,60,0.15) 0%, rgba(212,175,60,0.06) 100%)",
                  border: "1.5px solid rgba(212,175,60,0.4)",
                  boxShadow: "0 0 16px rgba(212,175,60,0.1), inset 0 1px 0 rgba(212,175,60,0.15)",
                }}
              >
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                  {/* Dome */}
                  <path
                    d="M7 24C7 15 33 15 33 24"
                    stroke="#D4AF3C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="4"
                    y1="24"
                    x2="36"
                    y2="24"
                    stroke="#D4AF3C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Knob + steam */}
                  <circle cx="20" cy="15" r="1.5" fill="#D4AF3C" />
                  <path
                    d="M17 12 Q20 9 23 12"
                    stroke="#D4AF3C"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Fork */}
                  <line x1="30" y1="8" x2="30" y2="18" stroke="#D4AF3C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="28" y1="8" x2="28" y2="13" stroke="#D4AF3C" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="32" y1="8" x2="32" y2="13" stroke="#D4AF3C" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Skewer */}
                  <line x1="9" y1="19" x2="17" y2="11" stroke="#D4AF3C" strokeWidth="1.5" strokeLinecap="round" />
                  <ellipse cx="11" cy="17" rx="1.5" ry="1" fill="#D4AF3C" transform="rotate(-45 11 17)" />
                  <ellipse cx="14" cy="14" rx="1.5" ry="1" fill="#D4AF3C" transform="rotate(-45 14 14)" />
                </svg>
              </div>

              {/* Text */}
              <div className="leading-none">
                <p
                  className="font-black text-base tracking-[0.14em]"
                  style={{
                    background: "linear-gradient(135deg, #F0CA5A 0%, #D4AF3C 50%, #A8862A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ALANANI
                </p>
                <p
                  className="text-[#D4AF3C]/70 text-[11px] font-semibold mt-0.5 tracking-wide"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  مطعم &amp; مشاوي
                </p>
              </div>
            </motion.button>

            {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative group px-4 py-2 rounded-xl transition-colors duration-200"
                  >
                    <span
                      className={cn(
                        "text-sm font-semibold transition-colors duration-200",
                        isActive ? "text-[#D4AF3C]" : "text-gray-300 group-hover:text-white"
                      )}
                      style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                    >
                      {link.labelAr}
                    </span>
                    {/* Hover/active underline */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#D4AF3C] rounded-full"
                      initial={false}
                      animate={{ width: isActive ? "60%" : "0%" }}
                      transition={{ duration: 0.25 }}
                    />
                    {/* Hover glow */}
                    <span className="absolute inset-0 rounded-xl bg-[rgba(212,175,60,0.05)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>

            {/* ── Right actions ── */}
            <div className="hidden md:flex items-center gap-3">
              {/* Location chip */}
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                style={{
                  background: "rgba(212,175,60,0.08)",
                  border: "1px solid rgba(212,175,60,0.2)",
                }}
              >
                <MapPin size={11} className="text-[#D4AF3C] flex-shrink-0" />
                <span
                  className="text-[#D4AF3C]/80 font-medium"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  عجمان، UAE
                </span>
              </div>

              {/* WhatsApp CTA — outlined luxury style */}
              <motion.a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,60,0.15) 0%, rgba(212,175,60,0.08) 100%)",
                  border: "1.5px solid rgba(212,175,60,0.45)",
                  color: "#D4AF3C",
                  boxShadow: "0 0 0 0 rgba(212,175,60,0)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 20px rgba(212,175,60,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 0 rgba(212,175,60,0)";
                }}
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                <span style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>اطلب الآن</span>
              </motion.a>
            </div>

            {/* ── Mobile hamburger ── */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl"
              style={{
                background: "rgba(212,175,60,0.08)",
                border: "1.5px solid rgba(212,175,60,0.25)",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={18} className="text-[#D4AF3C]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={18} className="text-[#D4AF3C]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 md:top-24 left-0 right-0 z-40 md:hidden origin-top"
            style={{
              background: "rgba(7,9,31,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(212,175,60,0.15)",
            }}
          >
            {/* Gold top line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,60,0.4)] to-transparent" />

            <div className="px-5 pt-5 pb-7 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-[rgba(212,175,60,0.07)] transition-all duration-200 group"
                  dir="rtl"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#D4AF3C]/30 group-hover:bg-[#D4AF3C] transition-colors flex-shrink-0"
                    />
                    <span
                      className="text-white font-semibold text-base group-hover:text-[#D4AF3C] transition-colors"
                      style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                    >
                      {link.labelAr}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs group-hover:text-[#D4AF3C]/60 transition-colors">
                    {link.labelEn}
                  </span>
                </motion.button>
              ))}

              {/* WhatsApp button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                className="pt-3"
              >
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl w-full font-bold text-[#D4AF3C] transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,60,0.14) 0%, rgba(212,175,60,0.07) 100%)",
                    border: "1.5px solid rgba(212,175,60,0.4)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                  <span style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                    تواصل على واتساب
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
