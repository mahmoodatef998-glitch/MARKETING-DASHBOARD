"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { formatPrice, buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  const waMsg = `مرحباً، أريد الاستفسار عن: ${item.nameAr} (${item.nameEn}) - السعر: ${formatPrice(item.price, item.currency)}\nHello, I'd like to inquire about: ${item.nameEn} - Price: ${formatPrice(item.price, item.currency)}`;
  const waUrl = buildWhatsAppUrl(waMsg, WHATSAPP_NUMBER);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="card-hover-glow group relative flex flex-col rounded-2xl overflow-hidden bg-[#111640] border border-[rgba(212,175,60,0.12)]"
    >
      {/* ── Image ── */}
      <div className="img-zoom relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.nameEn}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 cinematic-overlay" />

        {/* Badges — top right with proper inset */}
        <div className="absolute top-3.5 right-3.5 flex flex-col gap-1.5">
          {item.bestseller && (
            <span className="flex items-center gap-1 bg-[#D4AF3C] text-[#0C1130] text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
              <Star size={9} fill="currentColor" />
              الأكثر طلباً
            </span>
          )}
          {item.spicy && (
            <span className="flex items-center gap-1 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
              <Flame size={9} />
              حار
            </span>
          )}
        </div>

        {/* Price badge — bottom left with proper inset */}
        <div className="absolute bottom-3.5 left-3.5">
          <span className="glass px-3.5 py-1.5 rounded-full text-[#D4AF3C] font-bold text-sm gold-text-glow shadow">
            {formatPrice(item.price, item.currency)}
          </span>
        </div>
      </div>

      {/* ── Content — generous padding, nothing touching edges ── */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
        {/* Names */}
        <div>
          <h3
            className="text-white font-bold text-base leading-snug mb-1"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            {item.nameAr}
          </h3>
          <p className="text-[#D4AF3C]/65 text-xs font-semibold tracking-wide uppercase">
            {item.nameEn}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          {item.descriptionAr}
        </p>

        {/* WhatsApp CTA — always visible on mobile, hover on desktop */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all duration-200",
            "bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366]",
            "md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0",
            "md:hover:bg-[#25D366]/20"
          )}
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          استفسر عبر واتساب
        </a>
      </div>
    </motion.div>
  );
}
