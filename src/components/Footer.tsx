import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import logo from "@/assets/fastest-logo-white.png";

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
    <footer id="footer" ref={ref} className="relative bg-black border-t border-border overflow-hidden">
      
      {/* BACKGROUND: Moving Equalizer Blocks */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-48 grid items-end"
          style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            // Generate a deterministic random height for each block
            const baseHeight = 30 + ((i * 37) % 90);
            const peakHeight = baseHeight + 20 + ((i * 23) % 40);

            return (
              <motion.div
                key={i}
                className="bg-secondary border-r border-black self-end"
                initial={{ height: 0, opacity: 0 }}
                animate={
                  visible
                    ? {
                        height: [baseHeight, peakHeight, baseHeight],
                        opacity: 1,
                      }
                    : { height: 0, opacity: 0 }
                }
                transition={{
                  opacity: { duration: 0.6, delay: i * 0.04 },
                  height: {
                    repeat: Infinity,
                    duration: 2 + (i % 4) * 0.5, // Varies the speed per block (2s to 3.5s)
                    ease: "easeInOut",
                    delay: i * 0.04, // Staggers the initial start time
                  },
                }}
              />
            );
          })}
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative mx-auto max-w-[1600px] px-6 pt-32 pb-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          
          {/* Left Column: Huge Text & Button */}
          <div className="lg:col-span-7">
            <p className="font-display text-xs tracking-[0.4em] text-neon mb-6">
              // READY TO BUILD?
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 text-white uppercase">
              LET'S <span className="text-neon glow-text-strong">START</span><br />
              THE BUILD.
            </h2>
            <a
              href="mailto:info@fastestproduction.com"
              className="inline-block relative group mt-4"
            >
              <div className="px-12 py-6 bg-neon text-black font-display text-sm md:text-base tracking-[0.2em] relative z-10 hover:shadow-neon-lg transition-shadow">
                START THE BUILD →
              </div>
              <div className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-50 group-hover:animate-[ripple-out_0.8s_ease-out]" />
            </a>
          </div>

          {/* Right Column: Information Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 content-end pt-12 lg:pt-0">
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-neon mb-3">CONTACT</p>
              <p className="text-sm text-white/70 leading-relaxed">
                info@fastestproduction.com<br />
                +966 11 000 0000
              </p>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-neon mb-3">STUDIO</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Riyadh, Saudi Arabia<br />
                24 / 7 Production Floor
              </p>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-neon mb-3">SOCIAL</p>
              <ul className="text-sm text-white/70 space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-neon mb-3">HOURS</p>
              <p className="text-sm text-white/70 leading-relaxed">
                24 / 7<br />
                Always Ready
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fastest Production" className="h-8 w-auto flex-shrink-0" />
          </div>
          <p className="text-[11px] text-white/40 tracking-[0.3em] font-display">
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
