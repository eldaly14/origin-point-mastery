import { useEffect, useRef, useState } from "react";

type Pt = { x: number; y: number };

export function CursorTrail() {
  const [pos, setPos] = useState<Pt>({ x: -100, y: -100 });
  const trailRef = useRef<Pt[]>([]);
  const [, setTick] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      trailRef.current = [{ x: e.clientX, y: e.clientY }, ...trailRef.current].slice(0, 8);
    };
    window.addEventListener("mousemove", move);
    const loop = () => {
      setTick((t) => (t + 1) % 1000);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {trailRef.current.slice(1).map((p, i) => {
        const size = 6 - i * 0.6;
        const opacity = (1 - i / 8) * 0.7;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-neon"
            style={{
              left: p.x,
              top: p.y,
              width: Math.max(2, size),
              height: Math.max(2, size),
              opacity,
              transform: "translate(-50%,-50%)",
              boxShadow: `0 0 ${8 + (8 - i)}px #01ea5a`,
            }}
          />
        );
      })}
      {/* Main square cursor like image 2 */}
      <div
        className="absolute border border-neon"
        style={{
          left: pos.x,
          top: pos.y,
          width: 18,
          height: 18,
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 18px #01ea5acc, inset 0 0 8px #01ea5a55",
        }}
      >
        <div
          className="absolute bg-neon"
          style={{ left: 3, top: 3, right: 3, bottom: 3, boxShadow: "0 0 12px #01ea5a" }}
        />
      </div>
    </div>
  );
}
