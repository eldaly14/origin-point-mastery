import logo from "@/assets/fastest-logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-8 py-6 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-sm">
      
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img 
          src={logo} 
          alt="Fastest Production" 
          width={160} 
          height={42} 
          className="h-8 w-auto hover:opacity-80 transition-opacity drop-shadow-lg" 
        />
      </a>

      {/* Right Navigation & Status */}
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] text-white font-display">
        
        {/* The "Dot" Concept + Text Glow */}
        <div className="flex items-center gap-2 mr-4 text-neon glow-text border-r border-white/10 pr-8">
          <span className="h-2 w-2 bg-neon animate-pulse-dot" />
          ALWAYS READY
        </div>

        {/* Hover Links with Shadow Effects */}
        <a href="#services" className="hover:text-neon hover:glow-text transition-all duration-300">
          SERVICES
        </a>
        <a href="#portfolio" className="hover:text-neon hover:glow-text transition-all duration-300">
          PORTFOLIO
        </a>
        <a href="#ethos" className="hover:text-neon hover:glow-text transition-all duration-300">
          ETHOS
        </a>
        
        {/* Contact Button */}
        <a 
          href="#contact" 
          className="ml-2 px-6 py-3 bg-neon text-black font-semibold hover:bg-white hover:shadow-neon transition-all duration-300"
        >
          CONTACT
        </a>
      </div>
      
    </nav>
  );
}
