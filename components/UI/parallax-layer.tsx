"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ParallaxLayer({
  children,
  strength = 80,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    function update() {
      const container = containerRef.current;
      const layer = layerRef.current;
      if (container && layer) {
        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 as the section enters the bottom of the viewport, 1 once it has fully passed the top.
        const total = rect.height + vh;
        const scrolledInto = vh - rect.top;
        const progress = Math.min(1, Math.max(0, scrolledInto / total));
        const offset = (progress - 0.5) * strength;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      frame = requestAnimationFrame(update);
    }

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [strength]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div ref={layerRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
