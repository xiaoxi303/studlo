"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const QUOTES = [
  {
    quote: "他们将我们的品牌愿景转化为了一种令人窒息的数字体验——这不只是一个网站，这是我们品牌的灵魂。",
    author: "陈 —— 某科技品牌创始人",
    role: "Brand Founder",
  },
  {
    quote: "与市面上其他团队完全不同。他们真正理解动效背后的叙事逻辑，而不只是让东西动起来。",
    author: "林 —— 某奢侈品牌数字总监",
    role: "Digital Director",
  },
  {
    quote: "上线后，我们的用户停留时长翻倍。极致的沉浸感让用户自然而然地往下滚动，直到读完所有内容。",
    author: "张 —— 某 SaaS 产品 CEO",
    role: "CEO",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".quote-label", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    gsap.from(".quote-card", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".quotes-grid",
        start: "top 70%",
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#030303] py-32 md:py-48 px-6 md:px-20 overflow-hidden border-t border-white/[0.04]">
      {/* 背景引号装饰 */}
      <div className="absolute top-16 left-8 md:left-20 text-[20rem] leading-none text-white/[0.015] font-serif select-none pointer-events-none">
        "
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="quote-label mb-20 md:mb-28">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 mb-4">客户评价</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
            他们这样说
          </h2>
        </div>

        <div className="quotes-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="quote-card group border border-white/[0.06] bg-white/[0.01] rounded-sm p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-700 cursor-none hover-target"
            >
              {/* 引号 */}
              <div className="text-3xl text-gray-700 font-serif mb-6 group-hover:text-gray-500 transition-colors duration-500">"</div>

              {/* 引言 */}
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10 group-hover:text-white transition-colors duration-500">
                {q.quote}
              </p>

              {/* 作者 */}
              <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex-shrink-0"></div>
                <div>
                  <p className="text-white text-sm font-medium">{q.author}</p>
                  <p className="text-gray-600 text-xs tracking-widest uppercase mt-0.5">{q.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
