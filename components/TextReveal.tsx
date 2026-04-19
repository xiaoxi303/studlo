"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.from(containerRef.current.children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const chars = text.split("");

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block" style={{ whiteSpace: "pre" }}>
          {char}
        </span>
      ))}
    </div>
  );
}
