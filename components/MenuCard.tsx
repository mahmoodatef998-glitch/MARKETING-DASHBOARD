"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <motion.article
      dir="rtl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.055 }}
      className="group flex flex-col rounded-2xl overflow-hidden card-hover-glow"
      style={{
        background: "#111640",
        border: "1px solid rgba(212,175,60,0.12)",
      }}
    >
      {/* ══════════════════════════════════
          ZONE 1 — IMAGE
          ══════════════════════════════════ */}
      <div className="relative flex-shrink-0 overflow-hidden h-[152px] sm:h-[170px]">
        <Image
          src={item.image}
          alt={item.nameAr}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(17,22,64,0.65) 100%)",
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-10">
          {item.bestseller && (
            <span
              className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2.5 py-1 rounded-full"
              style={{
                background: "linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)",
                color: "#fff",
                boxShadow: "0 2px 10px rgba(220,38,38,0.55)",
              }}
            >
              <Star size={7} fill="currentColor" />
              الأكثر طلباً
            </span>
          )}
          {item.featured && !item.bestseller && (
            <span
              className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2.5 py-1 rounded-full"
              style={{
                background: "linear-gradient(135deg,#D4AF3C 0%,#b8932a 100%)",
                color: "#0C1130",
                boxShadow: "0 2px 8px rgba(212,175,60,0.45)",
              }}
            >
              <Star size={7} fill="currentColor" />
              مميز
            </span>
          )}
          {item.spicy && (
            <span
              className="flex items-center gap-1 text-white text-[9px] sm:text-[10px] font-black px-2.5 py-1 rounded-full shadow"
              style={{ background: "rgba(220,38,38,0.92)" }}
            >
              <Flame size={7} />
              حار
            </span>
          )}
        </div>
      </div>

      {/* Thin gold separator */}
      <div
        className="flex-shrink-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,175,60,0.3), transparent)",
        }}
      />

      {/* ══════════════════════════════════
          ZONE 2 — CARD BODY
          Generous padding so text never
          touches the card border.
          ══════════════════════════════════ */}
      <div className="flex-1 flex flex-col px-4 pt-4 pb-4 sm:px-5 sm:pt-4 sm:pb-5">

        {/* Arabic name */}
        <h3
          className="text-white font-bold leading-snug flex-shrink-0 text-[13px] sm:text-[15px]"
          style={{
            fontFamily: "'Noto Sans Arabic', sans-serif",
            marginBottom: "3px",
          }}
        >
          {item.nameAr}
        </h3>

        {/* English name */}
        <p
          className="font-bold uppercase flex-shrink-0"
          style={{
            color: "rgba(212,175,60,0.55)",
            fontSize: "9px",
            letterSpacing: "0.16em",
            marginBottom: "9px",
          }}
        >
          {item.nameEn}
        </p>

        {/* Description — fixed 2-line height so price stays at same level */}
        <p
          className="line-clamp-2 flex-shrink-0"
          style={{
            fontFamily: "'Noto Sans Arabic', sans-serif",
            fontSize: "11px",
            lineHeight: "1.7",
            color: "rgba(156,163,175,0.82)",
            minHeight: "calc(2 * 11px * 1.7)",
          }}
        >
          {item.descriptionAr}
        </p>

        {/* Push price to bottom */}
        <div className="mt-auto pt-4">
          {/* Gold divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(212,175,60,0.25), transparent)",
              marginBottom: "12px",
            }}
          />

          {/* Price — full width, prominent, no CTA button */}
          <div>
            <p
              style={{
                fontFamily: "'Noto Sans Arabic', sans-serif",
                fontSize: "9px",
                color: "rgba(156,163,175,0.45)",
                marginBottom: "3px",
                letterSpacing: "0.05em",
              }}
            >
              السعر
            </p>
            <span
              className="font-black leading-none gold-text-glow text-[20px] sm:text-[22px]"
              style={{ color: "#D4AF3C" }}
            >
              {formatPrice(item.price, item.currency)}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
