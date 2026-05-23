"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from "@/lib/utils";

/* ══════════════════════════════════════════════════════════
   Full ALANANI logo — faithful to the printed menu cover
   viewBox: 320 × 260
   ══════════════════════════════════════════════════════════ */
function AlananiLogoSVG({ size = 320 }: { size?: number }) {
  const h = (size / 320) * 260;
  return (
    <svg
      viewBox="0 0 320 260"
      width={size}
      height={h}
      fill="none"
      aria-label="شعار مطعم العناني"
    >
      {/* ─── Skewer (left diagonal) ─── */}
      <line x1="18" y1="108" x2="98" y2="28" stroke="#D4AF3C" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="32" cy="94" rx="10" ry="6" fill="#D4AF3C" transform="rotate(-45 32 94)" />
      <ellipse cx="50" cy="76" rx="9" ry="5.5" fill="#D4AF3C" transform="rotate(-45 50 76)" />
      <ellipse cx="68" cy="58" rx="9" ry="5.5" fill="#D4AF3C" transform="rotate(-45 68 58)" />
      <ellipse cx="85" cy="40" rx="8" ry="5" fill="#D4AF3C" transform="rotate(-45 85 40)" />

      {/* ─── Fork (right diagonal) ─── */}
      <line x1="302" y1="108" x2="222" y2="28" stroke="#D4AF3C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="212" y1="38" x2="232" y2="18" stroke="#D4AF3C" strokeWidth="3" strokeLinecap="round" />
      <line x1="222" y1="28" x2="242" y2="8" stroke="#D4AF3C" strokeWidth="3" strokeLinecap="round" />
      <line x1="232" y1="18" x2="252" y2="-2" stroke="#D4AF3C" strokeWidth="3" strokeLinecap="round" />

      {/* ─── Serving cloche dome ─── */}
      <path d="M85 116 C85 72 235 72 235 116" fill="#D4AF3C" opacity="0.12" />
      <path d="M85 116 C85 72 235 72 235 116" stroke="#D4AF3C" strokeWidth="3" strokeLinecap="round" />
      {/* Base plate */}
      <line x1="68" y1="116" x2="252" y2="116" stroke="#D4AF3C" strokeWidth="3" strokeLinecap="round" />
      {/* Knob */}
      <circle cx="160" cy="72" r="5" fill="#D4AF3C" />
      {/* Steam wisps */}
      <path d="M155 65 Q160 58 165 65" stroke="#D4AF3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M150 57 Q155 50 160 57" stroke="#D4AF3C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
      {/* Decorative swash under base */}
      <path d="M100 122 Q160 132 220 122" stroke="#D4AF3C" strokeWidth="1.5" fill="none" opacity="0.55" />

      {/* ─── Arabic name: العناني ─── */}
      <text
        x="160" y="178"
        textAnchor="middle"
        fontSize="62"
        fontWeight="900"
        fill="#D4AF3C"
        fontFamily="'Noto Sans Arabic', 'Arial', sans-serif"
        letterSpacing="-2"
      >
        العناني
      </text>

      {/* ─── Subtitle: مطعم & مشاوي ─── */}
      <text
        x="160" y="202"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#D4AF3C"
        opacity="0.80"
        fontFamily="'Noto Sans Arabic', 'Arial', sans-serif"
        letterSpacing="1"
      >
        مطعم &amp; مشاوي
      </text>

      {/* ─── Ornament lines flanking subtitle ─── */}
      <line x1="44" y1="194" x2="114" y2="194" stroke="#D4AF3C" strokeWidth="1" opacity="0.5" />
      <line x1="206" y1="194" x2="276" y2="194" stroke="#D4AF3C" strokeWidth="1" opacity="0.5" />
      {/* Small diamond center */}
      <rect x="158" y="191" width="4" height="4" fill="#D4AF3C" opacity="0.6" transform="rotate(45 160 193)" />

      {/* ─── Decorative flourish ─── */}
      <path
        d="M120 214 Q140 208 160 214 Q180 220 200 214"
        stroke="#D4AF3C"
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />

      {/* ─── ALANANI English ─── */}
      <text
        x="160" y="238"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fill="#D4AF3C"
        opacity="0.95"
        fontFamily="'Geist', 'Georgia', serif"
        letterSpacing="10"
      >
        ALANANI
      </text>
    </svg>
  );
}

/* ── Corner frame brackets (exactly like the printed menu) ── */
function CornerFrames() {
  const size = 56;
  const t = 2.5;
  const color = "rgba(212,175,60,0.55)";
  const corners: Array<{
    top?: number; bottom?: number; left?: number; right?: number; rotate: number;
  }> = [
    { top: 28, left: 28, rotate: 0 },
    { top: 28, right: 28, rotate: 90 },
    { bottom: 28, right: 28, rotate: 180 },
    { bottom: 28, left: 28, rotate: 270 },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
            width: size,
            height: size,
          }}
        >
          <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
            <path
              d={`M ${t} ${size} L ${t} ${t} L ${size} ${t}`}
              fill="none"
              stroke={color}
              strokeWidth={t}
              strokeLinecap="square"
              transform={`rotate(${c.rotate}, ${size / 2}, ${size / 2})`}
            />
          </svg>
        </div>
      ))}
    </>
  );
}

export default function HeroSection() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG, WHATSAPP_NUMBER);
  const scrollToMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0C1130" }}
    >
      {/* ── Radial ambient glow (center) ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(212,175,60,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Bottom ambient ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(212,175,60,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Gold particle sparkles ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
              height: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
              background: "#D4AF3C",
              left: `${5 + i * 6.5}%`,
              top: `${10 + (i % 6) * 14}%`,
            }}
            animate={{
              y: [-5, -22, -5],
              opacity: [0, i % 3 === 0 ? 0.9 : 0.6, 0],
              scale: [0.5, 2.2, 0.5],
            }}
            transition={{
              duration: 3.2 + i * 0.22,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Corner frame decorations ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <CornerFrames />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto gap-6 pt-24 pb-16">

        {/* Logo SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.80, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="float-anim"
        >
          <AlananiLogoSVG size={300} />
        </motion.div>

        {/* Gold divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 w-full max-w-xs"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(212,175,60,0.7)]" />
          <span className="text-[#D4AF3C] text-xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(212,175,60,0.7)]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/75 text-lg md:text-xl font-medium leading-relaxed max-w-sm"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          أفخر المشويات العربية على الفحم الطبيعي
        </motion.p>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center"
        >
          <p
            className="text-[#D4AF3C] text-base font-semibold"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            عجمان الراشدية | ابراج الخور
          </p>
          <p
            className="text-[#D4AF3C]/50 text-sm mt-1"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            امام جمعية اسواق عجمان والهوريزون
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex items-center justify-center gap-10"
        >
          {[
            { num: "+30", ar: "طبق" },
            { num: "8", ar: "فئة" },
            { num: "100%", ar: "طازج" },
          ].map((s, i) => (
            <div key={s.num} className="relative text-center">
              {i > 0 && (
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-px h-8 bg-[#D4AF3C]/15" />
              )}
              <div className="text-3xl md:text-4xl font-black gradient-gold leading-none gold-text-glow">
                {s.num}
              </div>
              <div
                className="text-xs text-[#D4AF3C]/55 mt-1 font-medium"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                {s.ar}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="flex flex-col sm:flex-row gap-3.5 w-full max-w-sm"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToMenu}
            className="flex-1 flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-[#0C1130] gold-glow transition-all"
            style={{
              background: "linear-gradient(135deg, #F0CA5A 0%, #D4AF3C 60%, #B8952E 100%)",
            }}
          >
            <span style={{ fontFamily: "'Noto Sans Arabic', sans-serif", fontSize: "15px" }}>
              تصفح القائمة
            </span>
          </motion.button>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-white transition-all"
            style={{
              background: "rgba(37,211,102,0.10)",
              border: "1.5px solid rgba(37,211,102,0.45)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            <span style={{ fontFamily: "'Noto Sans Arabic', sans-serif", fontSize: "15px" }}>
              تواصل معنا
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 9, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          y: { repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1.6 },
        }}
        onClick={scrollToMenu}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#D4AF3C]/40 hover:text-[#D4AF3C] transition-colors cursor-pointer"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-medium"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          القائمة
        </span>
        <ChevronDown size={20} />
      </motion.button>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-[5] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0C1130 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
