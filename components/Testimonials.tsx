"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const REVIEWS = [
  { text: "Studio 彻底改变了我们的品牌叙事方式。他们的动效逻辑不仅仅是美观，更是极具战略价值的表达。", author: "John Doe", company: "CEO, TechFlow" },
  { text: "在数字化转型的道路上，我们从未见过如此精准的工程实现。120FPS 的承诺真的被兑现了。", author: "Jane Smith", company: "Creative Lead, Aura" },
  { text: "他们的设计不仅让人惊叹，更让人沉浸。这种叙事深度在当前的 Web 领域非常罕见。", author: "Mark Wilson", company: "Founder, Nexus" },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
      }
    });

    tl.from(".testi-title", { opacity: 0, y: 50, duration: 2 });

    REVIEWS.forEach((review, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      tl.fromTo(item, 
        { opacity: 0, x: 100, filter: "blur(10px)", visibility: "hidden" },
        { opacity: 1, x: 0, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );
      
      tl.to({}, { duration: 4 });

      if (i < REVIEWS.length - 1) {
        tl.to(item, { opacity: 0, x: -100, filter: "blur(10px)", duration: 3, onComplete: () => gsap.set(item, { visibility: "hidden" }) });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="testi-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Testimonials / 客户评价</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            来自<span className="text-white/20 italic">伙伴</span>的反馈
          </h2>
        </div>

        <div className="relative w-full max-w-5xl h-96 flex items-center justify-center">
          {REVIEWS.map((r, i) => (
            <div
              key={r.author}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <span className="text-accent text-6xl font-serif mb-8">“</span>
              <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-3xl mx-auto mb-12 italic">
                {r.text}
              </p>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{r.author}</span>
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-2">{r.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
