"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Star, Flame } from "lucide-react";
import { featuredItems } from "@/data/menu";
import { formatPrice, buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="featured" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background parallax */}
      <motion.div className="absolute inset-0 z-0 opacity-5" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1800&q=60"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2.5 text-[#D4AF3C] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full"
              style={{ background: "rgba(212,175,60,0.08)", border: "1px solid rgba(212,175,60,0.2)" }}>
              <Star size={11} fill="currentColor" />
              Chef&apos;s Selection
              <Star size={11} fill="currentColor" />
            </span>
            {/* Title */}
            <h2
              className="text-4xl md:text-6xl font-black text-white leading-tight"
              style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            >
              الأطباق المميزة
            </h2>
            {/* Subtitle */}
            <p className="text-gray-400 text-base max-w-sm" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
              أبرز أطباقنا وأكثرها طلباً من ضيوفنا الكرام
            </p>
            {/* Gold divider */}
            <div className="flex items-center gap-3 mt-1">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF3C]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF3C]/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF3C]/50" />
            </div>
          </motion.div>
        </div>

        {/* Featured grid — first item large, rest standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large hero card */}
          {featuredItems[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden h-[420px] md:h-[520px] cursor-default"
            >
              <div className="img-zoom absolute inset-0">
                <Image
                  src={featuredItems[0].image}
                  alt={featuredItems[0].nameEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1130] via-[#0C1130]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="flex items-center gap-1 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)",
                      boxShadow: "0 2px 10px rgba(220,38,38,0.55)",
                    }}
                  >
                    <Star size={10} fill="currentColor" />
                    الأكثر طلباً
                  </span>
                  <span className="text-[#D4AF3C] text-xs font-semibold border border-[rgba(212,175,60,0.4)] px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3
                  className="text-white text-3xl font-black mb-1"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  {featuredItems[0].nameAr}
                </h3>
                <p className="text-[#D4AF3C]/80 text-sm font-medium mb-2">{featuredItems[0].nameEn}</p>
                <p
                  className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  {featuredItems[0].descriptionAr}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#D4AF3C] gold-text-glow">
                    {formatPrice(featuredItems[0].price, featuredItems[0].currency)}
                  </span>
                  <a
                    href={buildWhatsAppUrl(
                      `أريد الاستفسار عن ${featuredItems[0].nameAr}`,
                      WHATSAPP_NUMBER
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1db955] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.52 5.836L.057 23.994l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.738.98.998-3.648-.233-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                    </svg>
                    استفسر
                  </a>
                </div>
              </div>
              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border border-[rgba(212,175,60,0)] group-hover:border-[rgba(212,175,60,0.4)] transition-all duration-500 pointer-events-none group-hover:shadow-[0_0_30px_rgba(212,175,60,0.1)]" />
            </motion.div>
          )}

          {/* Right column — 2 stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {featuredItems.slice(1, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-2xl overflow-hidden h-[190px] md:h-[240px] cursor-default"
              >
                <div className="img-zoom absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.nameEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1130] via-[#0C1130]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <h3
                      className="text-white text-lg font-bold mb-0.5"
                      style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                    >
                      {item.nameAr}
                    </h3>
                    <p className="text-[#D4AF3C] text-sm font-medium">{item.nameEn}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="text-xl font-black text-[#D4AF3C]">
                      {formatPrice(item.price, item.currency)}
                    </span>
                    {item.bestseller && (
                      <span
                        className="flex items-center gap-1 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)",
                          boxShadow: "0 1px 6px rgba(220,38,38,0.5)",
                        }}
                      >
                        <Star size={8} fill="currentColor" />
                        الأكثر طلباً
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-[rgba(212,175,60,0)] group-hover:border-[rgba(212,175,60,0.4)] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row of remaining featured */}
        {featuredItems.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {featuredItems.slice(3, 6).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden h-52 cursor-default"
              >
                <div className="img-zoom absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.nameEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 cinematic-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="text-white font-bold text-base mb-0.5"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    {item.nameAr}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs">{item.nameEn}</p>
                    <span className="text-[#D4AF3C] font-bold text-sm">
                      {formatPrice(item.price, item.currency)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-[rgba(212,175,60,0)] group-hover:border-[rgba(212,175,60,0.4)] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

