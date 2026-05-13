import { motion } from "motion/react";
import { useState } from "react";
import img1 from "@/assets/project-3.jpg";
import img2 from "@/assets/project-4.jpg";
import img3 from "@/assets/project-1.jpg";
import img4 from "@/assets/project-2.jpg";

const services = [
  { title: "Heavy Carpentry", desc: "Custom-built structural sets engineered for any scale.", img: img1 },
  { title: "Digital Printing", desc: "Large-format precision printing in record turnarounds.", img: img2 },
  { title: "Stage Engineering", desc: "Concept to full deployment — load-tested and certified.", img: img3 },
  { title: "Event Production", desc: "End-to-end execution from blueprint to opening night.", img: img4 },
];

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group cursor-pointer"
    >
      {/* Stepped mosaic shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#018031]/20" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#01ea5a]/20" />

      <div className="relative aspect-[4/5] overflow-hidden border border-neon/30 bg-[#001508] transition-all duration-500"
        style={{ boxShadow: hover ? "0 0 60px #01ea5a44, inset 0 0 40px #01ea5a22" : "inset 0 0 30px #00150888" }}
      >
        {/* Image reveal */}
        <motion.img
          src={s.img}
          alt={s.title}
          loading="lazy"
          width={1280}
          height={896}
          animate={{ scale: hover ? 1.08 : 1, opacity: hover ? 1 : 0.25 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Stepped accent corner */}
        <div className="absolute top-0 right-0 flex flex-col items-end">
          <div className="h-2 w-12 bg-neon" />
          <div className="h-2 w-8 bg-[#018031]" />
          <div className="h-2 w-4 bg-[#003d18]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-xs tracking-[0.3em] text-neon mb-2">0{i + 1}</div>
          <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">{s.title}</h3>
          <motion.p
            animate={{ opacity: hover ? 1 : 0.6, y: hover ? 0 : 8 }}
            className="mt-2 text-sm text-white/70"
          >
            {s.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="relative bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs tracking-[0.3em] text-neon mb-3">— OUR DISCIPLINES</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              What we<br /><span className="text-neon glow-text">build.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm">
            Four disciplines. One operating standard. Every service delivered with the precision
            of an expert operator and the speed of an industrial machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
