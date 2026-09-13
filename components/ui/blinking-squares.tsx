"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Warna kotak. */
  squareColor?: string;
  /** Sisi kotak dalam px. */
  cellSize?: number;
  /** Jarak antar kotak dalam px. */
  gap?: number;
  /** Porsi sel yang menyala, 0–1. */
  density?: number;
  /** Kecepatan kedip, siklus per detik. */
  speed?: number;
  /** Kecerahan minimum sel yang menyala, 0–1. */
  minBrightness?: number;
};

export default function BlinkingSquares({
  squareColor = "#e9ffef",
  cellSize = 12,
  gap = 6,
  density = 0.55,
  speed = 0.6,
  minBrightness = 0.25,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cells: { x: number; y: number; phase: number; base: number }[] = [];
    let raf = 0;
    let dpr = 1;

    const step = cellSize + gap;

    function layout() {
      if (!canvas || !ctx) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cells = [];
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          if (Math.random() > density) continue;
          cells.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            base: minBrightness + Math.random() * (1 - minBrightness),
          });
        }
      }
    }

    function draw(time: number) {
      if (!canvas || !ctx) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = squareColor;

      const t = (time / 1000) * speed * Math.PI * 2;

      for (const cell of cells) {
        const wave = reduced ? 1 : (Math.sin(t + cell.phase) + 1) / 2;
        ctx.globalAlpha = cell.base * (0.35 + 0.65 * wave);
        ctx.fillRect(cell.x, cell.y, cellSize, cellSize);
      }

      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    }

    layout();
    raf = requestAnimationFrame(draw);

    const observer = new ResizeObserver(() => {
      layout();
      if (reduced) draw(0);
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [squareColor, cellSize, gap, density, speed, minBrightness]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
