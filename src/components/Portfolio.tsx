import { motion } from "motion/react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import p7 from "@/assets/project-7.jpg";
import p8 from "@/assets/project-8.jpg";

const projects = [
  { title: "UCI World Tour", tag: "Stage Build", img: p1 },
  { title: "AFC Championship", tag: "Event Production", img: p2 },
  { title: "Riyadh Season", tag: "Carpentry", img: p3 },
  { title: "Expo Pavilion", tag: "Print + Build", img: p4 },
  { title: "Night Concert", tag: "Stage + Lighting", img: p5 },
  { title: "Trade Show Booth", tag: "Custom Build", img: p6 },
  { title: "Festival Main Stage", tag: "Production", img: p7 },
  { title: "Corporate Gala", tag: "Decor + Print", img: p8 },
];

function ProjectTile({ p, idx }: { p: typeof projects[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
      className="relative overflow-hidden border border-neon/20 bg-[#001508] aspect-[4/3] group"
    >
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        width={1280}
        height={896}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="text-[10px] tracking-[0.3em] text-neon mb-1">{p.tag}</div>
        <h3 className="font-display text-2xl md:text-3xl text-white">{p.title}</h3>
      </div>

      <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-neon" />
      <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-neon" />
      <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-neon" />
      <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-neon" />
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
            Hover any tile — the build comes alive in full color.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((p, i) => <ProjectTile key={p.title} p={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
