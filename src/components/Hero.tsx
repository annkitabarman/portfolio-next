"use client";

import RobotScene from "./RobotScene";
import Navbar from "./Navbar";
import TypingAnimation from "./TypingAnimation";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09070d]">
      {/* 3D ROBOT */}
      <RobotScene />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div
        className="relative z-10 flex min-h-screen flex-col justify-between py-8"
        style={{
          paddingLeft: "var(--page-padding)",
          paddingRight: "var(--page-padding)",
        }}
      >
        {/* Intro */}
        <div className="pointer-events-none pt-40">
          {/* Status */}
          <div className="flex flex-col gap-1">
            {/* Status */}
            <div className="grid grid-cols-[16px_auto] items-center gap-x-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#9acb3c] opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#9acb3c]" />
              </span>

              <span
                className="text-[13px] font-normal uppercase tracking-[0.08em] text-gray-300"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                FRONTEND ENGINEER | FULL-STACK DEVELOPMENT
              </span>
            </div>

            {/* Location */}
            <div className="grid grid-cols-[16px_auto] items-center gap-x-2">
              <MapPin className="h-3 w-3 text-white/40" />

              <span
                className="text-[13px] uppercase tracking-[0.08em] text-white/40"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                BANGALORE, INDIA
              </span>
            </div>
          </div>

          {/* Greeting */}
          <p className="my-4 text-2xl text-[#bd8cff]">Hello! I am</p>

          {/* Name */}
          <h1 className="text-6xl font-medium leading-[0.6] tracking-[-0.06em]">
            ANKITA BARMAN
          </h1>

          <TypingAnimation />
        </div>

        {/* Bottom information */}
        <div
          className="flex justify-between text-xs uppercase tracking-[0.2em] text-white/40"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          <span>01 — A PORTFOLIO IN MOTION</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
