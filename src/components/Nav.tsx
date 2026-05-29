import { useEffect, useState } from "react";
import logo from "@/assets/fastest-logo-white.png";

export function Nav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "SERVICES" },
    { href: "#work", label: "PORTFOLIO" },
    { href: "#ethos", label: "ETHOS" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-md">
      <div className="px-8 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Fastest Production" className="h-9 w-auto" />
          <span className="font-display text-white text-lg leading-none tracking-wide">
            Fastest<br />
            <span className="text-white/80">Production</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.3em] text-white font-display">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-neon transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-7 py-3 bg-neon text-black font-display text-[11px] tracking-[0.3em] hover:shadow-neon transition-all"
            style={{ boxShadow: "0 0 0 transparent" }}
          >
            CONTACT
          </a>
        </div>
      </div>
      {/* scroll progress line */}
      <div className="relative h-px bg-white/5">
        <div
          className="absolute left-0 top-0 h-px bg-neon"
          style={{
            width: `${progress * 100}%`,
            boxShadow: "0 0 12px #01ea5a, 0 0 24px #01ea5a88",
          }}
        />
      </div>
    </nav>
  );
}
