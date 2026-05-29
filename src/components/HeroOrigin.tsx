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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pt-20">
        
        {/* Option B Typography matching the screenshot with requested shadow effects */}
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,7vw,8rem)] leading-[1.1] uppercase"
        >
          <span className="block text-white mb-2">We Don't Just</span>
          <span className="block text-white mb-2">
            Build <span className="bg-neon text-black px-4 py-1 inline-block shadow-neon">Stages</span> —
          </span>
          <span className="block text-white mb-2">We Engineer</span>
          <span className="block text-black bg-neon px-4 py-1 inline-block shadow-neon">
            Moments
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mt-8 max-w-2xl text-sm md:text-base text-white/70 leading-relaxed"
        >
          Fastest Production is the trusted fabrication and event production partner for the region's most demanding clients. From concept to three-dimensional reality — every time, on time.
        </motion.p>

        {/* Blueprint Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-10"
        >
          <a 
            href="#contact"
            className="px-8 py-4 bg-neon text-black font-display font-semibold tracking-[0.2em] text-sm hover:bg-white hover:shadow-neon transition-all duration-300 flex items-center gap-3"
          >
            SEND YOUR BLUEPRINT <span>→</span>
          </a>
        </motion.div>

        {/* Stats Section integrated at the bottom of the hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + i * 0.1, duration: 0.5 }}
              className="border border-neon/40 bg-black/60 backdrop-blur p-4 text-left hover:shadow-neon-sm transition-shadow duration-300"
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
      </div>
    </section>
  );
}
