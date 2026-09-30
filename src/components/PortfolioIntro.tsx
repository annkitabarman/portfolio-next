"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PortfolioIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLDivElement>(null);

  const firstNameRestRef = useRef<HTMLSpanElement>(null);
  const lastNameRestRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = introRef.current;
      const name = nameRef.current;
      const firstNameRest = firstNameRestRef.current;
      const lastNameRest = lastNameRestRef.current;

      if (!intro || !name || !firstNameRest || !lastNameRest) {
        return;
      }

      /*
       * ========================================
       * INITIAL STATE
       * ========================================
       */

      gsap.set(name, {
        opacity: 0,
        y: 60,
        rotateX: 30,
        scale: 0.95,
        transformPerspective: 1200,
      });

      /*
       * ========================================
       * TIMELINE
       * ========================================
       */

      const tl = gsap.timeline();

      /*
       * 1. ANKITA BARMAN ENTERS
       */

      tl.to(name, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      /*
       * 2. HOLD
       */

      tl.to(
        {},
        {
          duration: 0.8,
        },
      );

      /*
       * ========================================
       * 3. NKITA + ARMAN DISAPPEAR
       *
       * A and B are the ORIGINAL letters.
       * We don't create another A/B.
       * ========================================
       */

      tl.to([firstNameRest, lastNameRest], {
        opacity: 0,
        width: 0,
        filter: "blur(8px)",
        duration: 0.7,
        ease: "power3.inOut",
      });

      /*
       * ========================================
       * 4. A + B MOVE TOGETHER
       *
       * At this point the name container contains:
       *
       * A          B
       *
       * We reduce the gap between the two
       * remaining flex items.
       * ========================================
       */

      tl.to(
        name,
        {
          gap: "0.1em",
          duration: 0.6,
          ease: "power3.inOut",
        },
        "-=0.15",
      );

      /*
       * ========================================
       * 5. AB TRAVELS TO TOP LEFT
       *
       * We're moving the SAME element that
       * contains the original A and B.
       * ========================================
       */

      tl.to(name, {
        scale: 0.2,

        x: () => -window.innerWidth / 2 + 120,
        y: () => -window.innerHeight / 2 + 50,

        duration: 1,

        ease: "power4.inOut",
      });

      /*
       * ========================================
       * 6. SMALL SETTLE
       * ========================================
       */

      tl.to(name, {
        x: () => -window.innerWidth / 2 + 120,
        y: () => -window.innerHeight / 2 + 50,

        duration: 0.25,

        ease: "power2.out",
      });

      /*
       * ========================================
       * 7. FADE INTRO
       * ========================================
       */

      tl.to(
        intro,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "none",
        },
        "-=0.15",
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={introRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#09070d] [perspective:1200px]"
      >
        {/* =====================================
            BACKGROUND GLOW
        ===================================== */}

        <div className="pointer-events-none absolute h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(185,120,255,0.12)_0%,rgba(255,100,200,0.05)_35%,transparent_70%)] blur-[40px]" />

        {/* =====================================
            GRID
        ===================================== */}

        <div className="pointer-events-none absolute -inset-1/2 rotate-[65deg] scale-150 opacity-40 [transform:perspective(600px)_rotateX(65deg)] [mask-image:radial-gradient(ellipse,black_0%,transparent_65%)] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* =====================================
            NAME
        ===================================== */}

        <div
          ref={nameRef}
          className="relative z-10 flex items-center justify-center gap-[0.08em] [font-family:var(--font-bricolage)] text-[clamp(4rem,11vw,12rem)] font-bold leading-none tracking-[-0.075em] text-[#f8f5ff] [transform-style:preserve-3d]"
        >
          {/* ANKITA */}

          <span className="flex">
            {/* This A stays */}

            <span>A</span>

            {/* Only NKITA disappears */}

            <span
              ref={firstNameRestRef}
              className="inline-block overflow-hidden whitespace-nowrap pr-2"
            >
              NKITA
            </span>
          </span>

          {/* BARMAN */}

          <span className="flex">
            {/* This B stays */}

            <span>B</span>

            {/* Only ARMAN disappears */}

            <span
              ref={lastNameRestRef}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              ARMAN
            </span>
          </span>
        </div>

        {/* =====================================
            NOISE
        ===================================== */}

        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  );
}
