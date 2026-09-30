"use client";

import RobotScene from "./RobotScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09070d]">
      {/* 3D ROBOT */}
      <RobotScene />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 py-8 mx-20">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold">AB</div>

          <div className="flex gap-10 text-sm text-white/60">
            <span>ABOUT</span>
            <span>WORK</span>
            <span>PROJECTS</span>
            <span>CONTACT</span>
          </div>
        </nav>

        <div className="pointer-events-none ">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full  rounded-full bg-[#9acb3c] opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#9acb3c]" />
            </span>

            <span
              className="px-1 text-[13px] font-normal uppercase tracking-[0.08em] text-gray-300"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              FRONTEND DEVELOPER / BANGALORE, INDIA
            </span>
          </div>
          <p className="my-4 text-2xl text-[#bd8cff]">Hello! I am</p>

          <h1 className="text-6xl font-medium leading-[0.6] tracking-[-0.06em]">
            ANKITA BARMAN
          </h1>
        </div>

        <div
          className="flex justify-between text-xs uppercase tracking-[0.2em] text-white/40 "
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          <span>01 — A PORTFOLIO IN MOTION</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
