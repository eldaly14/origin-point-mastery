import { useEffect, useRef, useState } from "react";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger the Tetris block animation when the footer scrolls into view
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
      
      {/* Animated Tetris Blocks Background */}
      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-0">
        <div
          className="absolute inset-x-0 bottom-0 h-full grid items-end"
          style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="bg-secondary border-r border-black/40"
              style={{
                height: `${20 + ((i * 37) % 80)}%`,
                animation: visible
                  ? `block-fall 0.9s cubic-bezier(0.34, 1.2, 0.64, 1) ${i * 0.04}s both`
                  : "none",
                opacity: visible ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Side: CTA */}
          <div className="lg:col-span-7">
            <p className="font-display text-xs tracking-[0.4em] text-primary mb-6">
              // READY TO BUILD?
            </p>
            <h2 className="font-display text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] text-white mb-10">
              LET'S <span className="text-primary text-glow">START</span><br />
              THE BUILD.
            </h2>
            <button className="px-10 py-5 bg-primary text-primary-foreground font-display text-2xl md:text-3xl tracking-[0.2em] hover:shadow-[0_0_40px_oklch(0.82_0.27_145/0.8)] transition-all duration-300">
              START THE BUILD &rarr;
            </button>
          </div>

          {/* Right Side: Data Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 content-end">
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">CONTACT</p>
              <div className="text-sm text-muted-foreground leading-loose font-sans">
                hello@fastestproduction.com<br />
                +966 11 000 0000
              </div>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">STUDIO</p>
              <div className="text-sm text-muted-foreground leading-loose font-sans">
                Riyadh, Saudi Arabia<br />
                24 / 7 Production Floor
              </div>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">SOCIAL</p>
              <ul className="text-sm text-muted-foreground leading-loose font-sans">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">HOURS</p>
              <div className="text-sm text-muted-foreground leading-loose font-sans">
                24 / 7<br />
                Always Ready
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-primary shadow-[0_0_15px_oklch(0.82_0.27_145/0.8)]" />
            <span className="font-display text-sm tracking-[0.3em] text-white">FASTEST PRODUCTION</span>
          </div>
          <p className="text-xs text-muted-foreground tracking-[0.2em] font-sans uppercase">
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
