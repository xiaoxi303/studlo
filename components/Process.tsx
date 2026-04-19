"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STEPS = [
  {
    step: "探索",
    en: "Discover",
    desc: "深入了解您的品牌基因、目标用户与竞争格局。用数据与洞察定义机会，而不是凭感觉猜测。",
    duration: "1–2 周",
  },
  {
    step: "策划",
    en: "Strategize",
    desc: "将洞察转化为创意概念与信息架构。每一个动效背后，都有经过验证的叙事逻辑。",
    duration: "1–2 周",
  },
  {
    step: "设计",
    en: "Design",
    desc: "从字形选择到色彩系统，从组件库到动效规范，每一个决策都经过严格的美学推敲。",
    duration: "2–3 周",
  },
  {
    step: "构建",
    en: "Build",
    desc: "以 Next.js + GSAP 为核心技术栈，模块化、可维护地将设计稿精准还原并超越。",
    duration: "3–4 周",
  },
  {
    step: "上线",
    en: "Launch",
    desc: "性能监控、SEO 优化、A/B 测试与持续迭代。上线只是旅程的起点，而非终点。",
    duration: "持续",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 左侧进度线跟随滚动延伸
    gsap.fromTo(progressLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        }
      }
    );

    // 标题
    gsap.from(".process-title", {
      opacity: 0,
      x: -60,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    // 每个步骤卡片：从右侧错落滑入
    gsap.from(".process-step", {
      opacity: 0,
      x: 80,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-steps",
        start: "top 70%",
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#020202] py-32 md:py-48 px-6 md:px-20 overflow-hidden border-t border-white/[0.04]">
      {/* 背景大字 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-black text-white/[0.012] tracking-tighter uppercase leading-none">
          Process
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 左侧标题区（粘性） */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          <div className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="process-title text-[10px] uppercase tracking-[0.5em] text-gray-600 mb-6">工作流程</p>
              <h2 className="process-title text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
                如何<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">
                  与我们<br />合作
                </span>
              </h2>
              <p className="process-title mt-8 text-gray-500 text-sm font-light leading-relaxed">
                我们的每一个项目都遵循严谨且灵活的五步框架，确保每个决策都有迹可循。
              </p>
            </div>
          </div>

          {/* 右侧步骤列表 */}
          <div className="flex-1 relative">
            {/* 进度线 */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.04] hidden md:block">
              <div
                ref={progressLineRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-white/30 to-transparent origin-top scale-y-0 will-change-transform"
                style={{ height: "100%" }}
              ></div>
            </div>

            <div className="process-steps space-y-0 md:pl-12">
              {STEPS.map((item, i) => (
                <div
                  key={i}
                  className="process-step group border-b border-white/[0.06] py-10 md:py-14 hover:border-white/20 transition-colors duration-500 cursor-none hover-target"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                    {/* 步骤圆点 */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-white transition-colors duration-500 -ml-[calc(1.25rem+1px)] hidden md:block"></div>
                      <span className="text-xs text-gray-700 font-mono tracking-widest">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors duration-500">
                          {item.step}
                        </h3>
                        <span className="text-sm text-gray-700 tracking-widest uppercase font-light">
                          {item.en}
                        </span>
                      </div>
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-500 max-w-xl">
                        {item.desc}
                      </p>
                    </div>

                    {/* 时长 */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-[10px] uppercase tracking-widest text-gray-700 group-hover:text-gray-500 transition-colors duration-500">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
