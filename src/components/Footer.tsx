export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-border relative">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side */}
          <div className="lg:col-span-7">
            <span className="text-neon tracking-[0.3em] text-xs mb-6 block">// READY TO BUILD?</span>
            <h2 className="font-display text-8xl md:text-[10rem] leading-[0.85] text-white">
              LET'S <span className="text-neon glow-text">START</span><br/>THE BUILD.
            </h2>
            <button className="mt-8 bg-neon text-black font-display text-3xl px-10 py-6 hover:shadow-neon transition-shadow">
              START THE BUILD →
            </button>
          </div>

          {/* Right Side Data Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 content-end">
            <div>
              <h4 className="text-neon text-[10px] tracking-widest mb-2">CONTACT</h4>
              <p className="text-white/70 text-sm font-sans">hello@fastestproduction.com<br/>+966 11 000 0000</p>
            </div>
            <div>
              <h4 className="text-neon text-[10px] tracking-widest mb-2">STUDIO</h4>
              <p className="text-white/70 text-sm font-sans">Riyadh, Saudi Arabia<br/>24 / 7 Production Floor</p>
            </div>
            {/* Add Social and Hours blocks here following the same pattern */}
          </div>

        </div>
      </div>
    </footer>
  );
}
