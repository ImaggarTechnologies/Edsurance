import { Link } from "react-router-dom";
import { Brain, Sparkles, BookOpen, Video, Headphones, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const programs = [
  { icon: Brain, title: "AI & AR Coaching", description: "Personalized AI tutoring combined with immersive AR experiences that make abstract concepts tangible and engaging.", benefits: ["Adaptive difficulty", "Visual 3D models", "Real-time feedback"] },
  { icon: Video, title: "Story-Based Videos", description: "Engaging animated stories that weave educational concepts into captivating narratives children love to watch and rewatch.", benefits: ["Age-appropriate content", "Curriculum-aligned", "Multiple languages"] },
  { icon: BookOpen, title: "Ebook Library", description: "A curated digital library of interactive ebooks spanning science, math, literature, and life skills for every age group.", benefits: ["Interactive elements", "Read-aloud support", "Progress tracking"] },
  { icon: Headphones, title: "Power Talks", description: "Inspiring sessions from educators, scientists, and thought leaders designed to expand children's horizons and build confidence.", benefits: ["Expert speakers", "Discussion guides", "Certificate of completion"] },
  { icon: Users, title: "Parenting Guidance", description: "Evidence-based resources and expert advice to help parents become effective learning partners for their children.", benefits: ["Weekly workshops", "Expert Q&A", "Community support"] },
  { icon: Sparkles, title: "Educational Videos", description: "High-quality educational video content covering STEM, arts, social studies, and life skills with hands-on activities.", benefits: ["Lab experiments", "Creative projects", "Assessment quizzes"] },
];

const ProgramsPage = () => {
  return (
    <>
      <SEO
        title="Programs - AI Coaching, AR Learning & More"
        description="Explore Edsurance's comprehensive programs: AI & AR coaching, story-based videos, ebook library, power talks, and parenting guidance."
        path="/programs"
      />

      <section className="gradient-hero section-padding relative overflow-hidden" aria-labelledby="programs-hero">
        <div className="blob blob-primary absolute -left-24 top-10 h-72 w-72" aria-hidden="true" />
        <div className="blob blob-accent absolute -right-24 bottom-0 h-72 w-72" aria-hidden="true" />

        <div className="container-tight relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" /> Curated learning journeys
            </span>
            <h1 id="programs-hero" className="mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Programs Designed to <span className="text-gradient">Inspire & Transform</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From AI-powered labs to story-based learning and parenting support — every Edsurance program is
              handcrafted by experts to nurture curiosity, confidence, and character.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary rounded-full px-8 text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105"
              >
                <Link to="/ai-learning">
                  Explore AI Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-border px-8 hover:border-primary hover:text-primary"
              >
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Programs list">
        <div className="container-tight mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  What we offer
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A mix of AI, content, and human-led experiences for children and parents.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
                  AI & AR
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
                  Content Library
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
                  Parenting Support
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program, i) => (
              <ScrollReveal key={program.title} delay={i * 0.08}>
                <div className="card-glow group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover-lift hover:shadow-elevated md:p-7">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground">
                        {program.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-border/60 pt-4">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Key benefits
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {program.benefits.map((b) => (
                        <li
                          key={b}
                          className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          <ChevronRight className="h-3 w-3 text-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30" aria-label="CTA">
        <div className="container-tight mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="gradient-card relative overflow-hidden rounded-[1.75rem] border border-border/60 p-8 text-center shadow-card sm:p-10">
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-primary/15" />
              <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full border border-primary/10" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Ready to choose the right program?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Our team will help you map the perfect combination of AI learning, content, and coaching for
                  your child or your school.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary px-8 text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105"
                  >
                    <Link to="/contact">
                      Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-border px-8 hover:border-primary hover:text-primary"
                  >
                    <Link to="/ai-learning">View AI learning track</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
