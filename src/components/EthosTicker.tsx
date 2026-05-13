import { motion } from "motion/react";

function SteppedSquare({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative w-32 h-32 ${flip ? "rotate-180" : ""}`}>
      <div className="absolute inset-0 bg-[#001508] border border-neon/40" />
      <div className="absolute inset-3 bg-[#002b10] border border-neon/60" />
      <div className="absolute inset-6 bg-[#018031]" />
      <div className="absolute inset-9 bg-neon shadow-neon-sm" />
    </div>
  );
}

export function EthosTicker() {
  const text = "SPEED IS NOTHING WITHOUT CONTROL ◆ دائماً جاهزين ◆ ALWAYS READY ◆ THE ORIGIN POINT ◆ ";
  return (
    <section className="relative bg-[#001508] py-24 overflow-hidden border-y border-neon/20">
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SteppedSquare />
        </motion.div>

        <div className="relative flex-1 mx-[-3rem] z-10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee font-display text-5xl md:text-7xl">
            <span className="text-white px-8">{text.repeat(3)}</span>
            <span className="text-white px-8">{text.repeat(3)}</span>
          </div>
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SteppedSquare flip />
        </motion.div>
      </div>
    </section>
  );
}
