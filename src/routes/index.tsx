import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { HeroOrigin } from "@/components/HeroOrigin";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Manifesto } from "@/components/Manifesto";
import { EthosTicker } from "@/components/EthosTicker";

// src/routes/index.tsx
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastest Production — Always Ready" },
      {
        name: "description",
        content:
          "Industrial event production: carpentry, metal fabrication, digital printing, and logistics. Built from the modular grid up.",
      },
      { property: "og:title", content: "Fastest Production — Always Ready" },
      {
        property: "og:description",
        content:
          "From a single point to infinite structures. Event fabrication, scaled.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <HeroOrigin />
        <Services />
        <Portfolio />
        <Manifesto />
      </main>
      <EthosTicker />
      <Footer />
    </div>
  );
}
