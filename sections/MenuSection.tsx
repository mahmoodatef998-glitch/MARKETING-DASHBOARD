"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { categories, menuItems } from "@/data/menu";
import MenuCard from "@/components/MenuCard";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      item.nameEn.toLowerCase().includes(q) ||
      item.nameAr.includes(q) ||
      item.descriptionEn.toLowerCase().includes(q) ||
      item.descriptionAr.includes(q);
    return matchCat && matchSearch;
  });

  const scrollTabs = (dir: "left" | "right") => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  const allCategories = [
    { id: "all", nameAr: "الكل", nameEn: "All", icon: "🍽️" },
    ...categories,
  ];

  return (
    <section id="menu" className="py-20 px-4 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-3 text-[#D4AF3C] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full"
            style={{ background: "rgba(212,175,60,0.08)", border: "1px solid rgba(212,175,60,0.2)" }}>
            <span className="w-6 h-px bg-[#D4AF3C]/60" />
            Our Menu
            <span className="w-6 h-px bg-[#D4AF3C]/60" />
          </span>
          {/* Title */}
          <h2
            className="text-4xl md:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            قائمة الطعام
          </h2>
          {/* Subtitle */}
          <p className="text-gray-400 text-base max-w-md" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
            اكتشف تشكيلتنا الواسعة من المشويات الفاخرة والأطباق العربية الأصيلة
          </p>
          {/* Gold divider */}
          <div className="flex items-center gap-3 mt-1">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF3C]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF3C]/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF3C]/50" />
          </div>
        </motion.div>
      </div>

      {/* Search bar */}
      <div className="max-w-xl mx-auto mb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF3C]/60 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في القائمة... / Search menu..."
            className="w-full bg-[#111640] border border-[rgba(212,175,60,0.2)] rounded-2xl pr-11 pl-11 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[rgba(212,175,60,0.5)] focus:ring-1 focus:ring-[rgba(212,175,60,0.3)] transition-all text-sm"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif", direction: "rtl" }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Category tabs */}
      <div className="max-w-7xl mx-auto mb-10 relative">
        {/* Scroll buttons (desktop) */}
        <button
          onClick={() => scrollTabs("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-8 h-8 items-center justify-center rounded-full glass border border-[rgba(212,175,60,0.2)] text-[#D4AF3C]"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={() => scrollTabs("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-8 h-8 items-center justify-center rounded-full glass border border-[rgba(212,175,60,0.2)] text-[#D4AF3C]"
        >
          <ChevronRight size={14} />
        </button>

        <div
          ref={tabsRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar px-2 pb-2 justify-start md:justify-center"
        >
          {allCategories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery("");
                }}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-[rgba(212,175,60,0.15)] border-[rgba(212,175,60,0.5)] text-[#D4AF3C]"
                    : "bg-[#111640] border-[rgba(212,175,60,0.1)] text-gray-400 hover:text-[#D4AF3C] hover:border-[rgba(212,175,60,0.3)]"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <div className="flex flex-col items-start">
                  <span style={{ fontFamily: "'Noto Sans Arabic', sans-serif", lineHeight: 1.2 }}>
                    {cat.nameAr}
                  </span>
                  <span className="text-[10px] opacity-60">{cat.nameEn}</span>
                </div>
                {active && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF3C]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto mb-6 px-2">
        <motion.p
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-sm"
          style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        >
          {filtered.length} طبق متاح
          {searchQuery && <span className="text-[#D4AF3C]"> · نتائج: "{searchQuery}"</span>}
        </motion.p>
      </div>

      {/* Items grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((item, idx) => (
                <MenuCard key={item.id} item={item} index={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-400 text-lg" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                لا توجد نتائج لـ "{searchQuery}"
              </p>
              <p className="text-gray-500 text-sm mt-1">No results found</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-4 text-[#D4AF3C] hover:underline text-sm"
              >
                مسح البحث / Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

