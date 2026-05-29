import { motion } from "motion/react";
import logo from "@/assets/fastest-logo-white.png";

function Skyline() {
  // varied rectangular/square architectural blocks
  const bars = [
    { h: 60, w: 60 }, { h: 140, w: 50 }, { h: 90, w: 80 }, { h: 180, w: 45 },
    { h: 70, w: 70 }, { h: 200, w: 55 }, { h: 110, w: 90 }, { h: 50, w: 50 },
    { h: 160, w: 40 }, { h: 130, w: 75 }, { h: 80, w: 60 }, { h: 220, w: 50 },
    { h: 100, w: 100 }, { h: 60, w: 45 }, { h: 170, w: 55 }, { h: 90, w: 70 },
    { h: 140, w: 40 }, { h: 200, w: 65 }, { h: 75, w: 55 }, { h: 120, w: 85 },
    { h: 55, w: 55 }, { h: 190, w: 45 }, { h: 100, w: 70 }, { h: 150, w: 50 },
    { h: 80, w: 95 }, { h: 210, w: 40 }, { h: 65, w: 60 }, { h: 130, w: 75 },
  ].map((b, i) => ({ ...b, delay: (i % 10) * 0.08 }));
  return (
    <div className="relative h-56 w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-[4px] px-2">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: b.h }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: b.delay, ease: "easeOut" }}
            style={{ width: b.w }}
            className="relative bg-[#001508] border border-neon/50"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2 + (i % 4) * 0.4, repeat: Infinity, delay: b.delay }}
              className="absolute top-0 inset-x-0 h-px bg-neon"
              style={{ boxShadow: "0 0 14px #01ea5a, 0 0 32px #01ea5a88" }}
            />
            {/* window grid */}
            <div className="absolute inset-2 grid grid-cols-2 gap-1 opacity-40">
              {Array.from({ length: Math.max(2, Math.floor(b.h / 20)) * 2 }).map((_, k) => (
                <div key={k} className="bg-neon/30" style={{ height: 4 }} />
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
