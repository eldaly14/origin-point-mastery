import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import logo from "@/assets/fastest-logo.png"; // Ensure this path is correct

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer ref={ref} className="relative bg-black pt-32 overflow-hidden border-t border-border">
      {/* Background Tetris Blocks */}
      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-0">
        <div className="absolute inset-x-0 bottom-0 h-full grid" style={{ gridTemplateColumns: "repeat(24, 1fr)" }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="bg-secondary border-r border-black/40" style={{
              height: `${20 + ((i * 37) % 80)}%`,
              animation: visible ? `block-fall 0.9s cubic-bezier(0.34, 1.2, 0.64, 1) ${i * 0.04}s both` : "none"
            }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-7">
            <p className="font-display text-xs tracking-[0.4em] text-primary mb-6">// READY TO BUILD?</p>
            <h2 className="font-display text-7xl md:text-[9rem] leading-[0.85] text-white mb-10">
              LET'S <span className="text-primary text-glow">START</span><br />THE BUILD.
            </h2>
            <button className="px-10 py-5 bg-primary text-primary-foreground font-display text-3xl tracking-[0.2em] hover:shadow-[0_0_40px_oklch(0.82_0.27_145/0.8)] transition-all">
              START THE BUILD &rarr;
            </button>
          </div>

          {/* Animated Data Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 content-end">
            {[
              { label: "CONTACT", value: "hello@fastestproduction.com" },
              { label: "STUDIO", value: "Riyadh, Saudi Arabia" },
              { label: "SOCIAL", value: "Instagram / LinkedIn" },
              { label: "HOURS", value: "24 / 7 Always Ready" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="border border-neon/30 bg-black/40 p-5"
              >
                <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-loose">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Bottom with Logo */}
        <div className="flex justify-between items-center pt-8 border-t border-border/50">
          <img src={logo} alt="Fastest Production" className="h-8 w-auto" />
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">© {new Date().getFullYear()} — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
