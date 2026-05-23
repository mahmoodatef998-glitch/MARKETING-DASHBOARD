"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { formatPrice, buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  const waMsg = `مرحباً، أريد الاستفسار عن: ${item.nameAr} — السعر: ${formatPrice(item.price, item.currency)}`;
  const waUrl = buildWhatsAppUrl(waMsg, WHATSAPP_NUMBER);

  return (
    <motion.article
      dir="rtl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.055 }}
      /*
       * Card height: image(148/165px) + sep(1px) + body-padding + content = ~360-380px min.
       * flex flex-col so body section can grow to fill the grid-row height automatically.
       * minHeight keeps short-content cards from collapsing below neighbours.
       */
      className="group flex flex-col rounded-2xl overflow-hidden card-hover-glow"
      style={{
        background: "#111640",
        border: "1px solid rgba(212,175,60,0.12)",
      }}
    >
      {/* ═══════════════════════════════════
          ZONE 1 — IMAGE  (148 px mobile / 165 px sm+)
          ═══════════════════════════════════ */}
      <div className="relative flex-shrink-0 overflow-hidden h-[148px] sm:h-[165px]">
        <Image
          src={item.image}
          alt={item.nameAr}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Bottom gradient — blends image into card body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 45%, rgba(17,22,64,0.6) 100%)",
          }}
        />

        {/* ── Badges ── */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 items-end z-10">
          {item.bestseller && (
            <span
              className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow"
              style={{ background: "#D4AF3C", color: "#0C1130" }}
            >
              <Star size={7} fill="currentColor" />
              الأكثر طلباً
            </span>
          )}
          {item.spicy && (
            <span
              className="flex items-center gap-1 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow"
              style={{ background: "rgba(220,38,38,0.92)" }}
            >
              <Flame size={7} />
              حار
            </span>
          )}
        </div>
      </div>

      {/* ── Thin gold line between image and body ── */}
      <div
        className="flex-shrink-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,175,60,0.3), transparent)",
        }}
      />

      {/* ═══════════════════════════════════
          ZONE 2 — CARD BODY
          flex-1 fills the remaining grid-row height.
          Responsive padding: tighter on mobile, comfortable on sm+.
          ═══════════════════════════════════ */}
      <div className="flex-1 flex flex-col px-3.5 pt-3 pb-3.5 sm:px-5 sm:pt-4 sm:pb-5">

        {/* ── Arabic name ── */}
        <h3
          className="text-white font-bold leading-snug flex-shrink-0 text-[13px] sm:text-[15px]"
          style={{
            fontFamily: "'Noto Sans Arabic', sans-serif",
            marginBottom: "3px",
          }}
        >
          {item.nameAr}
        </h3>

        {/* ── English name ── */}
        <p
          className="font-bold uppercase flex-shrink-0"
          style={{
            color: "rgba(212,175,60,0.58)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            marginBottom: "8px",
          }}
        >
          {item.nameEn}
        </p>

        {/* ── Description ── */}
        <p
          className="line-clamp-2"
          style={{
            fontFamily: "'Noto Sans Arabic', sans-serif",
            fontSize: "11px",
            lineHeight: "1.65",
            color: "rgba(156,163,175,0.85)",
            marginBottom: "0",
          }}
        >
          {item.descriptionAr}
        </p>

        {/* mt-auto pushes the price section to the card bottom on equal-height grid rows */}
        <div className="mt-auto pt-3">
          {/* ── Thin divider ── */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(212,175,60,0.15), transparent)",
              marginBottom: "10px",
            }}
          />

        {/* ── Price + CTA row (always at the bottom) ── */}
        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <div className="min-w-0">
            <p
              style={{
                fontFamily: "'Noto Sans Arabic', sans-serif",
                fontSize: "9px",
                color: "rgba(156,163,175,0.5)",
                marginBottom: "1px",
              }}
            >
              السعر
            </p>
            <span
              className="font-black leading-none gold-text-glow block text-[16px] sm:text-[19px]"
              style={{ color: "#D4AF3C" }}
            >
              {formatPrice(item.price, item.currency)}
            </span>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 font-bold flex-shrink-0 transition-all duration-200 hover:scale-[1.04] active:scale-95 text-[10px] sm:text-[12px]"
            style={{
              background: "rgba(37,211,102,0.09)",
              border: "1px solid rgba(37,211,102,0.28)",
              color: "#25D366",
              padding: "6px 10px",
              borderRadius: "9px",
              fontFamily: "'Noto Sans Arabic', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            <WaIcon />
            استفسر
          </a>
        </div>
        </div>{/* end mt-auto */}
      </div>
    </motion.article>
  );
}
