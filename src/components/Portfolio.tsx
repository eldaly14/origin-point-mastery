import { motion } from "motion/react";
import { useRef, useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { title: "UCI World Tour", tag: "Stage Build", img: p1, span: "md:col-span-2 md:row-span-2" },
  { title: "AFC Championship", tag: "Event Production", img: p2, span: "md:col-span-2" },
  { title: "Riyadh Season", tag: "Carpentry", img: p3, span: "" },
  { title: "Expo Pavilion", tag: "Print + Build", img: p4, span: "" },
];

function ProjectTile({ p, idx }: { p: typeof projects[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, active: true });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      className={`relative overflow-hidden border border-neon/20 bg-[#001508] aspect-[4/3] group ${p.span}`}
    >
      {/* Wireframe blueprint */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="font-display text-neon/40 text-6xl glow-text">F</div>
      </div>

      {/* Photo materialized by laser */}
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        width={1280}
        height={896}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          maskImage: pos.active
            ? `radial-gradient(circle 280px at ${pos.x}% ${pos.y}%, black 40%, transparent 70%)`
            : "none",
          WebkitMaskImage: pos.active
            ? `radial-gradient(circle 280px at ${pos.x}% ${pos.y}%, black 40%, transparent 70%)`
            : "none",
        }}
      />

      {/* Laser scan ring */}
      {pos.active && (
        <div
          className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 border-2 border-neon mix-blend-screen"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, boxShadow: "0 0 40px #01ea5a, inset 0 0 40px #01ea5a88" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="text-[10px] tracking-[0.3em] text-neon mb-1">{p.tag}</div>
        <h3 className="font-display text-2xl md:text-3xl text-white">{p.title}</h3>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-neon" />
      <div className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-neon" />
      <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-neon" />
      <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-neon" />
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section className="relative bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs tracking-[0.3em] text-neon mb-3">— SELECTED WORK</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            From blueprint<br />to <span className="text-neon glow-text">reality.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/60">
            Move your cursor across each tile. Watch the wireframe materialize into the finished build.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-[240px]">
          {projects.map((p, i) => <ProjectTile key={p.title} p={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
