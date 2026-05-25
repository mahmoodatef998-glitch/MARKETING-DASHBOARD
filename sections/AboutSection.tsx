"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Flame, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, numAr: "+١٠", numEn: "10+", labelAr: "سنوات خبرة", labelEn: "Years of Experience" },
  { icon: Users, numAr: "+٥٠٠٠", numEn: "5000+", labelAr: "عميل راضٍ", labelEn: "Happy Customers" },
  { icon: Award, numAr: "+٣٠", numEn: "30+", labelAr: "طبق مميز", labelEn: "Signature Dishes" },
  { icon: Flame, numAr: "١٠٠٪", numEn: "100%", labelAr: "طازج يومياً", labelEn: "Fresh Daily" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF3C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] neon-border">
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85"
                  alt="AL ANANI Restaurant atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C1130]/30 to-transparent" />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass gold-glow rounded-2xl p-4 w-40"
            >
              <div className="text-3xl mb-1 text-center">🔥</div>
              <p
                className="text-[#D4AF3C] font-bold text-sm text-center"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                مشوي على الفحم
              </p>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden neon-border hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=300&q=80"
                alt="Grilled meat"
                fill
                className="object-cover"
                sizes="128px"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2.5 text-[#D4AF3C] text-xs font-bold tracking-[0.25em] uppercase mb-5 px-4 py-2 rounded-full"
                style={{ background: "rgba(212,175,60,0.08)", border: "1px solid rgba(212,175,60,0.2)" }}>
                <Flame size={11} />
                Our Story
                <Flame size={11} />
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                قصتنا مع
                <span className="gradient-gold"> الشواء</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                <p>
                  منذ أكثر من عشر سنوات، انطلق مطعم العناني برؤية واحدة: تقديم أفضل تجربة مشويات عربية فاخرة،
                  تجمع بين أصالة الطعم العربي والجودة العالية في كل طبق.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  For over a decade, AL ANANI has been dedicated to serving premium Arabic grills —
                  combining authentic flavors, hand-selected meats, and a passion for culinary excellence.
                </p>
                <p>
                  كل طبق يُعدّ بعناية من أجود المكونات الطازجة، ويُشوى على الفحم الطبيعي لمنحك تلك النكهة
                  الأصيلة التي لا تُنسى.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {[
                { icon: "🥩", textAr: "لحوم مختارة بعناية فائقة", textEn: "Premium hand-selected meats" },
                { icon: "🔥", textAr: "مشوي على فحم طبيعي", textEn: "Charcoal-fired, authentic taste" },
                { icon: "🌿", textAr: "توابل وأعشاب طازجة يومياً", textEn: "Fresh herbs & spices daily" },
                { icon: "👨‍🍳", textAr: "طهاة متخصصون في المشويات", textEn: "Master grill chefs" },
              ].map((item) => (
                <div key={item.textEn} className="flex items-center gap-3">
                  <span className="text-xl w-8 text-center flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                      {item.textAr}
                    </p>
                    <p className="text-gray-500 text-xs">{item.textEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass neon-border rounded-2xl p-6 text-center group hover:border-[rgba(212,175,60,0.4)] transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-3 w-12 h-12 mx-auto rounded-xl bg-[rgba(212,175,60,0.1)] border border-[rgba(212,175,60,0.2)] group-hover:gold-glow transition-all">
                <stat.icon className="w-5 h-5 text-[#D4AF3C]" />
              </div>
              <div className="text-3xl font-black gradient-gold mb-1">{stat.numEn}</div>
              <div
                className="text-white font-semibold text-sm mb-0.5"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                {stat.labelAr}
              </div>
              <div className="text-gray-500 text-xs">{stat.labelEn}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

