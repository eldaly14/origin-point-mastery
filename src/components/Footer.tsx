import { motion } from "motion/react";
import logo from "@/assets/fastest-logo-white.png";

function Skyline() {
  // animated city skyline of stepped neon blocks
  const bars = Array.from({ length: 38 }).map((_, i) => ({
    h: 30 + Math.abs(Math.sin(i * 1.7)) * 90 + (i % 4) * 12,
    w: 28 + (i % 3) * 10,
    delay: (i % 8) * 0.15,
  }));
  return (
    <div className="relative h-40 w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-[6px] px-6">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: b.h }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: b.delay, ease: "easeOut" }}
            style={{ width: b.w }}
            className="relative bg-[#001508] border-t border-neon/60"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2 + (i % 4) * 0.4, repeat: Infinity, delay: b.delay }}
              className="absolute top-0 inset-x-0 h-px bg-neon"
              style={{ boxShadow: "0 0 12px #01ea5a, 0 0 30px #01ea5a88" }}
            />
            <div className="absolute inset-x-2 top-3 bottom-3 opacity-30">
              {Array.from({ length: Math.floor(b.h / 14) }).map((_, k) => (
                <div key={k} className="h-1 mb-2 bg-neon/40" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-10 pt-28 pb-10">
        <p className="font-display text-neon glow-text text-xs tracking-[0.4em] mb-8">
          // READY TO BUILD?
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-white uppercase">
              Let's <span className="text-neon glow-text-strong">start</span>
              <br />
              the build.
            </h2>

            <a
              href="mailto:hello@fastestproduction.com"
              className="mt-10 inline-flex items-center gap-4 px-12 py-6 bg-neon text-black font-display tracking-[0.3em] text-sm hover:shadow-neon-lg transition-all"
            >
              START THE BUILD <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-10">
            {[
              { h: "CONTACT", lines: ["hello@fastestproduction.com", "+966 11 000 0000"] },
              { h: "STUDIO", lines: ["Riyadh, Saudi Arabia", "24 / 7 Production Floor"] },
              { h: "SOCIAL", lines: ["Instagram", "LinkedIn", "Behance"] },
              { h: "HOURS", lines: ["24 / 7", "Always Ready"] },
            ].map((b) => (
              <div key={b.h}>
                <div className="font-display text-neon glow-text text-xs tracking-[0.35em] mb-4">
                  {b.h}
                </div>
                {b.lines.map((l) => (
                  <div key={l} className="text-white/70 text-sm mb-1.5">
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6" />

        <Skyline />

        <div className="flex items-end justify-between gap-6 pt-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fastest Production" className="h-8 w-auto" />
            <span className="font-display text-white text-xs tracking-[0.3em]">
              FASTEST PRODUCTION
            </span>
          </div>
          <div className="text-white/40 text-[11px] tracking-[0.3em] font-display">
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
