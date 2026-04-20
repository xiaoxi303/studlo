"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const MARQUEE_TEXT = "极致体验 · 沉浸设计 · 品牌叙事 · 动效工程 · 视觉交响 · 数字工艺 · ";

const QUOTES = [
  {
    quote: "他们将我们的品牌愿景转化为了一种令人窒息的数字体验——这不只是一个网站，这是我们品牌的灵魂。",
    author: "陈总",
    role: "某科技品牌创始人",
  },
  {
    quote: "与市面上其他团队完全不同。他们真正理解动效背后的叙事逻辑，而不只是让东西动起来。",
    author: "林总监",
    role: "某奢侈品牌数字总监",
  },
  {
    quote: "上线后，我们的用户停留时长翻倍。极致的沉浸感让用户自然而然地往下滚动，直到读完所有内容。",
    author: "张总",
    role: "某 SaaS 产品 CEO",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Content entry with scrub for fluid control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      }
    });

    tl.from(".quote-label", {
      opacity: 0,
      y: 100,
      scale: 0.9,
      duration: 2,
    }, 0);

    tl.from(".quote-card", {
      opacity: 0,
      y: 80,
      scale: 0.95,
      stagger: 0.5,
      duration: 3,
    }, 0.5);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Upper Marquee (Constant Motion) */}
      <div className="py-6 border-y border-white/[0.04] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-5xl md:text-7xl font-black tracking-tighter text-white/[0.03] uppercase mx-4 flex-shrink-0">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="py-32 md:py-48 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="quote-label mb-20 md:mb-28">
            <p className="text-label text-accent mb-5">客户评价</p>
            <h2 className="text-display text-white">
              他们<span className="italic text-white/40">这样说</span>
            </h2>
          </div>

          <div className="quotes-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {QUOTES.map((q, i) => (
              <div
                key={i}
                className="quote-card group border border-white/[0.06] bg-white/[0.01] rounded-xl p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-700 cursor-none hover-target flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl text-accent/30 font-serif mb-6 group-hover:text-accent/60 transition-colors duration-500">&ldquo;</div>
                  <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-10 group-hover:text-white/90 transition-colors duration-500">
                    {q.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-accent-pink/40 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                    {q.author[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{q.author}</p>
                    <p className="text-white/30 text-xs tracking-widest uppercase mt-0.5">{q.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Marquee (Reverse Constant Motion) */}
      <div className="py-6 border-y border-white/[0.04] overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap flex" style={{ direction: "rtl" }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-4xl md:text-5xl font-black tracking-tighter text-white/[0.025] uppercase mx-4 flex-shrink-0">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
