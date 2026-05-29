import { motion } from "motion/react";

export function EngineerMoments() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="mx-auto w-16 h-px bg-neon shadow-neon-sm mb-12" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] text-white uppercase"
        >
          We don't just build{" "}
          <span className="relative inline-block px-3 text-black bg-neon" style={{ boxShadow: "0 0 40px #01ea5a99" }}>
            stages —
          </span>{" "}
          <span className="relative inline-block px-3 text-black bg-neon" style={{ boxShadow: "0 0 40px #01ea5a99" }}>
            we engineer
          </span>{" "}
          <span className="relative inline-block text-neon glow-text-strong">moments</span>
        </motion.h2>

        <p className="mt-10 max-w-2xl mx-auto text-white/60 leading-relaxed">
          Fastest Production is the trusted fabrication and event production partner for
          the region's most demanding clients. From concept to three-dimensional reality —
          every time, on time.
        </p>

        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-neon text-black font-display tracking-[0.25em] text-sm hover:shadow-neon-lg transition-all"
        >
          SEND YOUR BLUEPRINT <span>→</span>
        </a>

        <div className="mx-auto w-16 h-px bg-neon shadow-neon-sm mt-16" />
      </div>
    </section>
  );
}
