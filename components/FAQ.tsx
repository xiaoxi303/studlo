"use client";

import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FAQS = [
  {
    q: "你们的项目周期通常是多久？",
    a: "这取决于项目的复杂度。通常一个完整的品牌数字化项目需要 8 到 12 周。我们不追求快速交付，而是追求极致的品质与细节。"
  },
  {
    q: "我可以只选择动效设计服务吗？",
    a: "当然可以。我们不仅提供全案开发，也可以作为您的创意技术顾问，专门为现有项目注入灵魂级的动效体验。"
  },
  {
    q: "你们的技术栈是什么？",
    a: "我们核心使用 Next.js、GSAP 和 TailwindCSS。对于 3D 需求，我们会引入 Three.js 和 WebGL。我们的目标是构建高性能且具有叙事感的数字产品。"
  },
  {
    q: "如何开始合作？",
    a: "您可以点击底部的联系按钮，或者直接通过邮件联系我们。我们会先进行一次深入的沟通，了解您的品牌愿景与目标。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".faq-header", {
      opacity: 0,
      y: 50,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      }
    });

    gsap.from(".faq-item", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-list",
        start: "top 95%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 md:px-16 bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        <div className="faq-header mb-20 md:mb-28">
          <p className="text-label text-accent mb-5">常见问题</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            解除您的<span className="text-white/40 italic">疑虑</span>
          </h2>
        </div>

        <div className="faq-list space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="faq-item border-b border-white/[0.08] last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between group cursor-none hover-target"
              >
                <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${openIndex === i ? "text-accent" : "text-white/80 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl transition-transform duration-500 ${openIndex === i ? "rotate-45 text-accent" : "text-white/20"}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === i ? "max-h-60 pb-8" : "max-h-0"}`}
              >
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
