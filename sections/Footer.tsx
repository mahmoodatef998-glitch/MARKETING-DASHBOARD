"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ChevronLeft } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from "@/lib/utils";

const quickLinks = [
  { labelAr: "الرئيسية", href: "#" },
  { labelAr: "القائمة", href: "#menu" },
  { labelAr: "المميزات", href: "#featured" },
  { labelAr: "عن المطعم", href: "#about" },
  { labelAr: "تواصل معنا", href: "#contact" },
];

const menuCategories = [
  { ar: "مشويات مشكلة", en: "Mixed Grills" },
  { ar: "مشويات دجاج", en: "Chicken Grills" },
  { ar: "كباب", en: "Kebabs" },
  { ar: "شاورما", en: "Shawarma" },
  { ar: "مقبلات", en: "Appetizers" },
  { ar: "أطباق الأرز", en: "Rice Dishes" },
];

export default function Footer() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG, WHATSAPP_NUMBER);
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#07091F" }} dir="rtl">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF3C] to-transparent opacity-50" />

      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(212,175,60,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Brand showcase ── */}
      <div className="relative border-b border-[rgba(212,175,60,0.1)] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-5">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(212,175,60,0.1)",
              border: "1px solid rgba(212,175,60,0.3)",
              boxShadow: "0 0 30px rgba(212,175,60,0.12)",
            }}
          >
            <span className="text-3xl">🔥</span>
          </motion.div>

          {/* Restaurant name */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h2
              className="text-4xl md:text-5xl font-black gradient-gold leading-none"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              مطعم العناني
            </h2>
            <p
              className="text-[#D4AF3C]/55 text-sm mt-3 tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              للمشويات الفاخرة — عجمان، الإمارات
            </p>
          </motion.div>

          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-28 h-px bg-gradient-to-r from-transparent to-[#D4AF3C]/40" />
            <span className="text-[#D4AF3C]/50 text-base">✦</span>
            <div className="w-28 h-px bg-gradient-to-l from-transparent to-[#D4AF3C]/40" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-sm max-w-md leading-relaxed"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            تجربة مشويات عربية فاخرة بأجواء أصيلة وأفضل المكونات الطازجة
          </motion.p>
        </div>
      </div>

      {/* ── Main links grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand + social */}
          <div className="space-y-6">
            <div>
              <p
                className="text-white font-black text-base mb-1"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                AL ANANI Restaurant
              </p>
              <p className="text-gray-600 text-xs">Ajman, United Arab Emirates</p>
            </div>

            {/* Social heading */}
            <div>
              <p
                className="text-[#D4AF3C]/50 text-xs tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                تابعنا على
              </p>
              <div className="flex gap-2.5">
                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(225,48,108,0.08)",
                    border: "1px solid rgba(225,48,108,0.2)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E1306C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#E1306C" stroke="none" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(24,119,242,0.08)",
                    border: "1px solid rgba(24,119,242,0.2)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="#1877F2" className="w-4 h-4">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              <span className="block w-6 h-0.5 bg-[#D4AF3C] rounded-full" />
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-gray-500 hover:text-[#D4AF3C] transition-colors text-sm w-full text-right"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    <ChevronLeft
                      size={13}
                      className="flex-shrink-0 text-[#D4AF3C]/25 group-hover:text-[#D4AF3C] group-hover:-translate-x-0.5 transition-all"
                    />
                    {link.labelAr}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Menu categories */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              <span className="block w-6 h-0.5 bg-[#D4AF3C] rounded-full" />
              فئات القائمة
            </h4>
            <ul className="space-y-3">
              {menuCategories.map((cat) => (
                <li key={cat.en}>
                  <button
                    onClick={() => scrollTo("#menu")}
                    className="group flex items-center gap-2 text-gray-500 hover:text-[#D4AF3C] transition-colors text-sm w-full text-right"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    <ChevronLeft
                      size={13}
                      className="flex-shrink-0 text-[#D4AF3C]/25 group-hover:text-[#D4AF3C] group-hover:-translate-x-0.5 transition-all"
                    />
                    {cat.ar}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              <span className="block w-6 h-0.5 bg-[#D4AF3C] rounded-full" />
              معلومات التواصل
            </h4>
            <ul className="space-y-5">
              {/* WhatsApp */}
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-500 hover:text-[#25D366] transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(37,211,102,0.08)",
                      border: "1px solid rgba(37,211,102,0.2)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">واتساب</p>
                    <p className="text-sm text-gray-400">+971 XX XXX XXXX</p>
                  </div>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3 text-gray-500">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(212,175,60,0.08)",
                    border: "1px solid rgba(212,175,60,0.2)",
                  }}
                >
                  <MapPin size={14} className="text-[#D4AF3C]" />
                </div>
                <div>
                  <p
                    className="text-xs text-gray-600 mb-0.5"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    الموقع
                  </p>
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    عجمان الراشدية | ابراج الخور
                  </p>
                  <p
                    className="text-xs text-gray-600 mt-0.5"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    امام جمعية اسواق عجمان والهوريزون
                  </p>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3 text-gray-500">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(212,175,60,0.08)",
                    border: "1px solid rgba(212,175,60,0.2)",
                  }}
                >
                  <Clock size={14} className="text-[#D4AF3C]" />
                </div>
                <div>
                  <p
                    className="text-xs text-gray-600 mb-0.5"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    أوقات العمل
                  </p>
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    ١٠ صباحاً — ١٢ منتصف الليل
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">10 AM — 12 AM · Daily</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[rgba(212,175,60,0.08)] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            © {year} مطعم العناني للمشويات — جميع الحقوق محفوظة
          </p>
          <p className="text-gray-600 text-xs">
            AL ANANI Restaurant &amp; Grill · Ajman, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
