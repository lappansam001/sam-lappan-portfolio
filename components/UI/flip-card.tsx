"use client";

import { useRef, useState, type ReactNode } from "react";

type FlipCardProps = {
  label: string;
  hint?: string;
  cover?: ReactNode;
  coverScale?: number;
  cardClassName: string;
  contentPadding?: string;
  minHeightClassName?: string;
  className?: string;
  children: ReactNode;
};

const MAX_TILT_DEG = 22;

export function FlipCard({
  label,
  hint = "Click to view",
  cover,
  coverScale = 1.7,
  cardClassName,
  contentPadding = "p-6",
  minHeightClassName = "min-h-[220px]",
  className = "",
  children,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggle = () => setFlipped((f) => !f);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (flipped) return;
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - py) * MAX_TILT_DEG * 2,
      y: (px - 0.5) * MAX_TILT_DEG * 2,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={wrapperRef}
      className={`cursor-pointer select-none [perspective:1000px] ${minHeightClassName} ${className}`}
      onClick={toggle}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? `${label} (showing content, click to flip back)` : `${label} (click to view content)`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : undefined }}
      >
        {/* Back face — normal document flow, so its content height sets the card's height. Keeps the frosted blur for readability over the moving background. */}
        <div
          className={`${cardClassName} ${contentPadding} h-full overflow-y-auto backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)]`}
        >
          {children}
        </div>

        {/* Front face — the cover, almost unblurred so the drifting letters show through, tilts toward the cursor */}
        <div
          className={`${cardClassName} absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center backdrop-blur-[1px] transition-[transform,box-shadow] duration-150 ease-out [backface-visibility:hidden] [transform-style:preserve-3d]`}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            boxShadow: `0 10px 0 0 rgba(59,130,246,0.35), ${-tilt.y * 1.5}px ${28 - tilt.x}px ${44 + Math.abs(tilt.x) * 0.5 + Math.abs(tilt.y) * 0.5}px -14px rgba(15,23,42,0.45)`,
          }}
        >
          {cover && (
            <div className="mb-1" style={{ transform: `scale(${coverScale})` }}>
              {cover}
            </div>
          )}
          <h3 className="font-display text-lg font-bold text-blue-700">{label}</h3>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">{hint}</span>
        </div>
      </div>
    </div>
  );
}
