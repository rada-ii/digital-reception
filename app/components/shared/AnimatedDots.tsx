import React, { useMemo } from "react";

/**
 * Animated Dots Component (OPTIMIZED)
 *
 * Lokacija: /app/components/shared/AnimatedDots.tsx
 *
 * ŠTA RADI:
 * - Background animacija sa floating dots
 * - OPTIMIZOVANO: Smanjeno sa 160 na 40 dots
 * - Kraća animacija (30s umesto 90s)
 * - Will-change property za GPU acceleraciju
 * - useMemo za bolje performanse
 *
 * KORISTI SE U: Hero sekcijama
 *
 * PERFORMANCE RAZLIKA:
 * Staro: 160 dots × 90s = EKSTREMNO SPORO
 * Novo: 40 dots × 30s = BRZO I SMOOTH
 */

export default function AnimatedDots() {
  const numDots = 40; // Smanjeno sa 160!
  const cols = 8; // Smanjeno sa 10
  const rows = Math.ceil(numDots / cols);

  const dots = useMemo(
    () =>
      Array.from({ length: numDots }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;

        // Grid raspored sa random pomeranjem
        const baseTop = (row / rows) * 100;
        const baseLeft = (col / cols) * 100;
        const offsetTop = (Math.random() - 0.5) * 6;
        const offsetLeft = (Math.random() - 0.5) * 6;

        const top = Math.min(Math.max(baseTop + offsetTop, 0), 100);
        const left = Math.min(Math.max(baseLeft + offsetLeft, 0), 100);

        // Različite nijanse i veličine
        const delay = Math.random() * 5;
        const size = 1.5 + Math.random() * 2;
        const colors = ["#ffd580", "#fff1b2", "#ffe29a"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return {
          id: i,
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${size * 2}px`,
            height: `${size * 2}px`,
            backgroundColor: color,
            animationDuration: "30s", // Smanjeno sa 90s!
            animationDelay: `${delay}s`,
            opacity: 0.85,
          },
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full animate-dots-float"
          style={dot.style}
        />
      ))}
    </div>
  );
}
