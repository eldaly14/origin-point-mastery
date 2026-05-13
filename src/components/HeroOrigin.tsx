import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  { value: "19,200", label: "SQM Built" },
  { value: "12", label: "Day Executions" },
  { value: "0", label: "Delays" },
  { value: "150+", label: "Projects" },
];

function Counter({ to }: { to: string }) {
  const num = parseInt(to.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = to.replace(/[0-9,]/g, "");
  const [val, setVal] = useState(0);
  const mv = useMotionValue(0);
  useEffect(() => {
    const controls = animate(mv, num, {
      duration: 2.4,
      delay: 2.4,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [num, mv]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

export function HeroOrigin() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Mesh gradient backdrop */}
      <div className="absolute inset-0 bg-mesh animate-mesh-pulse" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* The Point — drops in */}
      <motion.div
        initial={{ y: -400, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={{ width: 24, height: 24 }}
          animate={{ width: [24, 24, 0], height: [24, 24, 0] }}
          transition={{ duration: 1.6, times: [0, 0.6, 1], delay: 0.6 }}
          className="bg-neon animate-pulse-dot"
        />
      </motion.div>

      {/* Expanding cross lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="absolute left-0 right-0 top-1/2 h-px bg-neon shadow-neon-sm origin-center"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="absolute top-0 bottom-0 left-1/2 w-px bg-neon shadow-neon-sm origin-center"
      />

      {/* 3D blocks reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-3 gap-2 max-w-6xl w-full px-6 pointer-events-none">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 1, transformOrigin: "center" }}
              animate={{ scaleY: 0 }}
              transition={{ delay: 2.0 + i * 0.04, duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
              className="aspect-square border border-neon/30 bg-[#002b10]"
              style={{ boxShadow: "inset 0 0 30px #01ea5a22" }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content reveal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="mb-4 flex items-center gap-3 text-xs tracking-[0.3em] text-neon"
        >
          <span className="h-px w-12 bg-neon" />
          FASTEST PRODUCTION
          <span className="h-px w-12 bg-neon" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] glow-text"
        >
          <span className="block text-white">Always</span>
          <span className="block text-neon">Ready!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mt-6 max-w-xl text-sm md:text-base text-white/70"
        >
          From a single point to a fully realized three-dimensional production.
          Speed, precision, and zero compromise.
        </motion.p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + i * 0.1, duration: 0.5 }}
              className="border border-neon/40 bg-black/60 backdrop-blur p-4 text-left"
              style={{ boxShadow: "inset 0 0 0 1px #01ea5a22" }}
            >
              <div className="font-display text-2xl md:text-4xl text-neon glow-text">
                <Counter to={s.value} />
              </div>
              <div className="mt-1 text-[10px] md:text-xs tracking-widest text-white/60 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/50"
        >
          SCROLL
          <div className="h-10 w-px bg-gradient-to-b from-neon to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
