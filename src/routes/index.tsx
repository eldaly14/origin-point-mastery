import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { HeroOrigin } from "@/components/HeroOrigin";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { EthosTicker } from "@/components/EthosTicker";
import { EngineerMoments } from "@/components/EngineerMoments";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastest Production — Always Ready. The Origin Point." },
      { name: "description", content: "From a single point to fully realized 3D production. Stage building, heavy carpentry, digital printing, and event execution with zero delays." },
      { property: "og:title", content: "Fastest Production — Always Ready" },
      { property: "og:description", content: "Speed is nothing without control. The expert operator for stage, build, and event production." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="bg-black text-white">
      <CursorTrail />
      <Nav />
      <HeroOrigin />
      <section id="services"><Services /></section>
      <section id="work"><Portfolio /></section>
      <section id="ethos"><EthosTicker /></section>
      <EngineerMoments />
      <section id="contact"><Footer /></section>
    </main>
  );
}
