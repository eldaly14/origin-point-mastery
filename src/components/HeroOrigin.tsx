import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function HeroOrigin() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const x = useTransform(sx, (v) => v * 20);
  const y = useTransform(sy, (v) => v * 12);
  const x2 = useTransform(sx, (v) => v * -28);
  const y2 = useTransform(sy, (v) => v * -16);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center mt-20">
        <p className="font-display tracking-[0.4em] text-neon glow-text text-xs mb-8">
          — THE ORIGIN OF EVERYTHING —
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] uppercase tracking-tight relative"
        >
          <motion.span style={{ x, y }} className="block text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]">
            ALWAYS
          </motion.span>
          <motion.span style={{ x: x2, y: y2 }} className="relative block text-neon">
            {/* Glow behind READY */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse pointer-events-none"
              style={{
                width: "85%",
                height: "75%",
                background:
                  "radial-gradient(ellipse at center, #01ea5a 0%, #01ea5acc 20%, #01ea5a66 45%, transparent 70%)",
                filter: "blur(50px)",
                zIndex: -1,
              }}
            />
            <span className="relative glow-text-strong">READY!</span>
          </motion.span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-6"
      >
        {["19,200 SQM BUILT", "12-DAY EXECUTIONS", "ZERO DELAYS"].map((stat) => (
          <div
            key={stat}
            className="border border-neon/40 bg-black/80 backdrop-blur-sm p-4 text-center hover:border-neon hover:shadow-neon-sm transition-all"
          >
            <span className="font-display text-xl text-white tracking-wider">{stat}</span>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest text-white/50 font-display">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
}
