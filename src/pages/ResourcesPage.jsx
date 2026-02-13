import { Video, BookOpen, Image, Mic } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const resources = [
  { icon: Video, title: "Video Library", count: "500+", description: "Curriculum-aligned educational videos covering STEM, arts, and life skills for all age groups." },
  { icon: BookOpen, title: "Ebooks", count: "300+", description: "Interactive digital books spanning fiction, science, mathematics, and creative exploration." },
  { icon: Image, title: "Posters & Infographics", count: "200+", description: "Printable educational posters and visual learning aids for classrooms and home study areas." },
  { icon: Mic, title: "Power Talks", count: "100+", description: "Recorded sessions from leading educators, scientists, and thought leaders worldwide." },
];

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="Resources Library - Videos, Ebooks & More"
        description="Explore Edsurance's curated resource library: educational videos, interactive ebooks, printable posters, and inspiring power talks."
        path="/resources"
      />

      <section className="gradient-hero section-padding" aria-labelledby="resources-hero">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1 id="resources-hero" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Resources <span className="text-gradient">Library</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A treasure trove of curated educational content for curious young minds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Resource categories">
        <div className="container-tight grid gap-8 sm:grid-cols-2">
          {resources.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="group hover-lift rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{r.title}</h2>
                    <p className="text-sm font-semibold text-primary">{r.count} resources</p>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground">{r.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
