import logo from "@/assets/fastest-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[#001508] overflow-hidden">
      {/* 3D foundation block */}
      <div className="absolute inset-x-0 top-0 h-2 bg-neon shadow-neon-sm" />
      <div className="absolute inset-x-0 top-2 h-1 bg-[#018031]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs tracking-[0.3em] text-neon mb-4">— THE FOUNDATION</div>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            Your trusted<br />partner.
          </h2>
          <p className="mt-6 max-w-md text-white/60 text-sm">
            Send us your blueprint. We'll send back a build schedule, a budget,
            and a guarantee of zero delays.
          </p>

          <div className="mt-10 inline-flex items-stretch group cursor-pointer">
            <div className="bg-neon px-8 py-5 font-display text-black text-lg tracking-wider transition-all group-hover:px-10">
              SEND YOUR BLUEPRINT
            </div>
            <div className="bg-neon/80 px-5 flex items-center text-black font-display text-2xl group-hover:bg-white transition-colors">
              →
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "EMAIL", value: "build@fastest.sa" },
            { label: "PHONE", value: "+966 50 000 0000" },
            { label: "STUDIO", value: "Riyadh, KSA" },
            { label: "HOURS", value: "24 / 7 / 365" },
          ].map((c) => (
            <div key={c.label} className="border border-neon/30 bg-black/40 p-5">
              <div className="text-[10px] tracking-[0.3em] text-neon mb-2">{c.label}</div>
              <div className="font-display text-white text-lg">{c.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neon/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <img src={logo} alt="Fastest Production" width={180} height={48} className="h-10 w-auto" />
          <div className="text-xs text-white/40 tracking-wider">
            © {new Date().getFullYear()} FASTEST PRODUCTION — AN ALFARES COMPANY
          </div>
        </div>
      </div>
    </footer>
  );
}
