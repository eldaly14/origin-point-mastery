import { motion } from "motion/react";

export function HeroOrigin() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Main Title Area */}
      <div className="relative z-10 text-center flex flex-col items-center mt-20">
        <p className="font-display tracking-[0.4em] text-neon text-xs mb-8">
          THE ORIGIN OF EVERYTHING
        </p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] uppercase tracking-tight"
        >
          <span className="block text-white">ALWAYS</span>
          {/* This uses your custom Tailwind v4 utility for the shadow */}
          <span className="block text-neon glow-text">READY!</span>
        </motion.h1>
      </div>

      {/* Metrics Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-6"
      >
        {["19,200 SQM BUILT", "12-DAY EXECUTIONS", "ZERO DELAYS"].map((stat) => (
          <div key={stat} className="border border-neon/40 bg-black/80 backdrop-blur-sm p-4 text-center">
            <span className="font-display text-xl text-white tracking-wider">{stat}</span>
          </div>
        ))}
      </motion.div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest text-white/50">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
}
