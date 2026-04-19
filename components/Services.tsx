"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SERVICES = [
  {
    num: "01",
    title: "品牌数字化",
    desc: "从战略定位到视觉语言，我们将品牌理念转化为极具感染力的数字符号与沉浸式体验。",
    tags: ["品牌策略", "视觉系统", "动效语言"],
  },
  {
    num: "02",
    title: "创意开发",
    desc: "融合 WebGL、GSAP 与现代前端工程，构建超越常规认知的交互体验与叙事型网站。",
    tags: ["Next.js", "GSAP", "Three.js"],
  },
  {
    num: "03",
    title: "体验设计",
    desc: "以用户心理学为基础，精细打磨每一个微交互与过渡时机，让每次点击都有仪式感。",
    tags: ["UX 研究", "原型设计", "可用性测试"],
  },
  {
    num: "04",
    title: "性能工程",
    desc: "在不妥协视觉表现的前提下，追求 Core Web Vitals 绿灯、LCP < 1s 的极致工程水准。",
    tags: ["性能优化", "CDN 架构", "监控告警"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 背景装饰线展开
    gsap.fromTo(bgLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    // 标题入场
    gsap.from(".services-header", {
      opacity: 0,
      y: 60,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    // 每行服务项：错落入场
    gsap.from(".service-row", {
      opacity: 0,
      y: 50,
      stagger: 0.18,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 75%",
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#030303] py-32 md:py-48 px-6 md:px-20 overflow-hidden border-t border-white/[0.04]">
      {/* 背景垂直装饰线 */}
      <div
        ref={bgLineRef}
        className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent origin-top scale-y-0 hidden md:block"
      ></div>

      <div className="max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="services-header mb-24 md:mb-32">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 mb-6">服务能力</p>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white leading-none uppercase">
            我们能做<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">什么</span>
          </h2>
        </div>

        {/* 服务列表 */}
        <div className="services-grid divide-y divide-white/[0.06]">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="service-row group flex flex-col md:flex-row md:items-start gap-6 md:gap-20 py-10 md:py-14 hover:bg-white/[0.01] transition-colors duration-500 cursor-none hover-target"
            >
              {/* 序号 */}
              <span className="text-xs text-gray-700 font-mono tracking-widest pt-1 flex-shrink-0 w-8">
                {s.num}
              </span>

              {/* 标题 */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight flex-shrink-0 md:w-72 group-hover:text-gray-300 transition-colors duration-500">
                {s.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light flex-1 group-hover:text-gray-400 transition-colors duration-500">
                {s.desc}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:justify-start flex-shrink-0">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest text-gray-700 border border-white/[0.06] px-3 py-1 rounded-full group-hover:border-white/20 group-hover:text-gray-400 transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
