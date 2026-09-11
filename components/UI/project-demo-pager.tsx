"use client";

import { useEffect, useState, type ReactNode } from "react";

const NAV_BUTTON_CLASSNAME =
  "inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700";

/**
 * Two independently-scrollable, full-viewport panels ("project" and "demo") that slide
 * between each other only via the two nav buttons. Each panel keeps normal scrolling
 * within itself (mouse wheel, trackpad, keyboard, touch) — `overscroll-behavior: contain`
 * is what stops that scroll from chaining into the other panel once it reaches its own
 * top/bottom edge, which is what let people get "caught in the middle" before.
 */
export function ProjectDemoPager({ project, demo }: { project: ReactNode; demo: ReactNode }) {
  const [view, setView] = useState<"project" | "demo">("project");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="relative h-[100dvh] overflow-hidden">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: view === "demo" ? "translateY(-100dvh)" : "translateY(0)" }}
      >
        <div className="h-[100dvh] overflow-y-auto [overscroll-behavior:contain]">
          {project}
          <div className="flex justify-center pb-8 pt-0">
            <button type="button" onClick={() => setView("demo")} className={NAV_BUTTON_CLASSNAME}>
              Go to Interactive Demo ↓
            </button>
          </div>
        </div>

        <div className="h-[100dvh] overflow-y-auto [overscroll-behavior:contain]">
          <div className="flex justify-center py-6">
            <button type="button" onClick={() => setView("project")} className={NAV_BUTTON_CLASSNAME}>
              ↑ Back to Project Home
            </button>
          </div>
          {demo}
        </div>
      </div>
    </div>
  );
}
