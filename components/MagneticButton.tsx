"use client";

import { useRef, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export default function MagneticButton({ children, className = "" }: { children: ReactNode, className?: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || !textRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;

    gsap.to(buttonRef.current, {
      x, y, duration: 1, ease: "power3.out"
    });

    gsap.to(textRef.current, {
      x: x * 0.5, y: y * 0.5, duration: 1, ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || !textRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)"
    });

    gsap.to(textRef.current, {
      x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <div 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cursor-none hover-target ${className}`}
    >
      <div ref={textRef} className="pointer-events-none flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
