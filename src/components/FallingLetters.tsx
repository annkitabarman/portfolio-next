"use client";

import { useEffect, useRef } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/\\=+-*#$%@";

export default function FallingLetters() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let columns: Column[] = [];

    const fontSize = 15;

    type Column = {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columnCount = Math.floor(window.innerWidth / 40);

      columns = Array.from({ length: columnCount }, (_, i) => ({
        x: i * 45 + Math.random() * 20,
        y: Math.random() * window.innerHeight,
        speed: 0.25 + Math.random() * 0.5,
        length: 5 + Math.floor(Math.random() * 10),
        opacity: 0.2 + Math.random() * 0.08,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `${fontSize}px var(--font-space-mono), monospace`;
      ctx.textAlign = "center";

      columns.forEach((column) => {
        for (let i = 0; i < column.length; i++) {
          const y = column.y - i * fontSize;

          if (y < 0 || y > window.innerHeight) continue;

          const fade = 1 - i / column.length;

          ctx.fillStyle = `rgba(189, 140, 255, ${
            column.opacity * (0.4 + fade * 0.6)
          })`;

          const char =
            characters[Math.floor(Math.random() * characters.length)];

          ctx.fillText(char, column.x, y);
        }

        column.y += column.speed;

        if (column.y - column.length * fontSize > window.innerHeight) {
          column.y = -Math.random() * 300;
          column.speed = 0.25 + Math.random() * 0.5;
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
