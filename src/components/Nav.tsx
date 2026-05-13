import logo from "@/assets/fastest-logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference">
      <img src={logo} alt="Fastest Production" width={160} height={42} className="h-8 w-auto" />
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] text-white">
        <a href="#services" className="hover:text-neon transition-colors">SERVICES</a>
        <a href="#work" className="hover:text-neon transition-colors">WORK</a>
        <a href="#contact" className="hover:text-neon transition-colors">CONTACT</a>
      </div>
      <div className="hidden md:flex items-center gap-2 text-xs text-neon tracking-[0.25em]">
        <span className="h-2 w-2 bg-neon animate-pulse-dot" />
        ALWAYS READY
      </div>
    </nav>
  );
}
