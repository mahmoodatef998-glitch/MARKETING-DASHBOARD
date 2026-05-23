"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from "@/lib/utils";

const openingHours = [
  { dayAr: "السبت – الخميس", dayEn: "Sat – Thu", hours: "12:00 PM – 12:00 AM" },
  { dayAr: "الجمعة", dayEn: "Friday", hours: "1:00 PM – 1:00 AM" },
];

const contactInfo = [
  {
    icon: Phone,
    labelAr: "اتصل بنا",
    labelEn: "Call Us",
    value: "+971 XX XXX XXXX",
    href: "tel:+971XXXXXXXXX",
  },
  {
    icon: MapPin,
    labelAr: "موقعنا",
    labelEn: "Location",
    value: "عجمان الراشدية | ابراج الخور",
    href: "https://maps.google.com/?q=Al+Rashidiya,+Ajman,+UAE",
  },
];

export default function ContactSection() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG, WHATSAPP_NUMBER);

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF3C]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#D4AF3C]/3 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF3C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-8 h-px bg-[#D4AF3C]" />
              تواصل معنا
              <span className="w-8 h-px bg-[#D4AF3C]" />
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              نحن في خدمتك
            </h2>
            <p
              className="text-gray-400 text-base max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              تواصل معنا في أي وقت — يسعدنا مساعدتك
            </p>
          </motion.div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left: Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* WhatsApp — primary CTA */}
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300"
              style={{
                background: "rgba(37,211,102,0.08)",
                border: "1.5px solid rgba(37,211,102,0.25)",
              }}
            >
              <div
                className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ width: 52, height: 52, background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#25D366] font-bold text-base leading-tight"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  واتساب
                </p>
                <p className="text-gray-300 text-sm mt-0.5">اضغط للتواصل الفوري</p>
                <p className="text-gray-500 text-xs mt-0.5">+971 XX XXX XXXX</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(37,211,102,0.4)" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </motion.a>

            {/* Phone + Location cards */}
            {contactInfo.map((info, idx) => (
              <motion.a
                key={info.labelEn}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 glass neon-border rounded-2xl p-5 hover:border-[rgba(212,175,60,0.4)] transition-all duration-300"
              >
                <div
                  className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ width: 48, height: 48, background: "rgba(212,175,60,0.1)", border: "1px solid rgba(212,175,60,0.2)" }}
                >
                  <info.icon className="w-5 h-5 text-[#D4AF3C]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-white font-semibold text-sm leading-tight"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    {info.labelAr}
                  </p>
                  <p className="text-gray-500 text-xs mb-0.5">{info.labelEn}</p>
                  <p
                    className="text-[#D4AF3C] text-sm font-medium leading-snug"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Real Ajman address card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass neon-border rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ width: 40, height: 40, background: "rgba(212,175,60,0.1)", border: "1px solid rgba(212,175,60,0.2)" }}
                >
                  <Clock className="w-4 h-4 text-[#D4AF3C]" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    أوقات العمل
                  </p>
                  <p className="text-gray-500 text-xs">Opening Hours</p>
                </div>
              </div>
              <div className="space-y-3">
                {openingHours.map((h) => (
                  <div key={h.dayEn} className="flex items-center justify-between py-1 border-b border-[rgba(212,175,60,0.08)] last:border-0">
                    <div>
                      <p
                        className="text-white text-xs font-medium"
                        style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                      >
                        {h.dayAr}
                      </p>
                      <p className="text-gray-600 text-[11px]">{h.dayEn}</p>
                    </div>
                    <span className="text-[#D4AF3C] text-xs font-semibold tabular-nums">{h.hours}</span>
                  </div>
                ))}
              </div>

              {/* Address highlight */}
              <div className="mt-4 pt-4 border-t border-[rgba(212,175,60,0.08)]">
                <p
                  className="text-[#D4AF3C]/80 text-xs font-semibold mb-1"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  📍 العنوان
                </p>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  عجمان الراشدية | ابراج الخور
                </p>
                <p
                  className="text-gray-500 text-xs mt-0.5"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  امام جمعية اسواق عجمان والهوريزون
                </p>
              </div>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-3 pt-1"
            >
              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center hover:scale-110 hover:border-[#E1306C]/40 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#E1306C" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center hover:scale-110 hover:border-[#1877F2]/40 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.86 4.86 0 01-1.07-.1z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden neon-border min-h-[420px] lg:min-h-full relative"
          >
            {/* Map — Al Rashidiya, Ajman */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d55.5052!3d25.4011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3e6a5e9b1c1%3A0xabcdef1234567890!2sAl%20Rashidiya%2C%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sar!2sae!4v1748040000000"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                filter: "invert(85%) hue-rotate(190deg) saturate(0.9) brightness(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مطعم العناني — عجمان الراشدية"
            />
            {/* Overlay label */}
            <div className="absolute bottom-4 right-4 glass neon-border rounded-xl px-4 py-2.5 pointer-events-none">
              <p
                className="text-[#D4AF3C] font-bold text-sm leading-tight"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                مطعم العناني
              </p>
              <p
                className="text-gray-400 text-xs mt-0.5"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                عجمان الراشدية
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
