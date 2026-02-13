import { Brain, Cpu, Eye, Sparkles, Rocket, Code, Shield, Wand2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const topics = [
  { icon: Brain, title: "AI Fundamentals", description: "Introduce children to the world of artificial intelligence through interactive lessons, games, and stories they can relate to." },
  { icon: Cpu, title: "Machine Learning Basics", description: "Hands-on projects that teach how computers learn from data — from image recognition to recommendation systems." },
  { icon: Eye, title: "Computer Vision", description: "Explore how machines see and understand images. Children build their own image classifiers and visual recognition projects." },
  { icon: Sparkles, title: "Generative AI & Creativity", description: "Safe, guided experiences with child-friendly generative AI that spark imagination while teaching responsible use." },
  { icon: Code, title: "Coding & Logic", description: "Block-based and text-based programming courses that build computational thinking and problem-solving skills." },
  { icon: Rocket, title: "Future-Ready Skills", description: "Digital literacy, data awareness, and ethical AI modules that prepare children for tomorrow's world." },
];

const pillars = [
  {
    title: "Playful, project-based learning",
    description: "Every AI concept is taught through mini-projects, simulations, and challenges so children learn by doing, not memorising.",
  },
  {
    title: "Scientifically designed for schools",
    description: "Aligned with NEP 2020 and backed by published research on Edsurance in the American Journal of Psychiatric Rehabilitation.",
  },
  {
    title: "Safe & responsible AI",
    description: "Built-in guardrails, human moderation, and ethical AI guidelines ensure a child-safe environment at every step.",
  },
];

const AILearningPage = () => {
  return (
    <>
      <SEO
        title="AI Learning - Future-Ready Education for Kids"
        description="Prepare your child for the future with Edsurance's AI learning programs: AI fundamentals, machine learning, computer vision, AR experiences, and coding."
        path="/ai-learning"
      />

      {/* Hero */}
      <section className="gradient-hero section-padding relative overflow-hidden" aria-labelledby="ai-hero">
        <div className="blob blob-primary absolute -left-24 top-10 h-72 w-72" aria-hidden="true" />
        <div className="blob blob-accent absolute -right-24 bottom-0 h-72 w-72" aria-hidden="true" />

        <div className="container-tight relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              <Wand2 className="h-4 w-4" /> AI Lab for Young Scientists
            </span>
            <h1
              id="ai-hero"
              className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-[3rem]"
            >
              Make <span className="text-gradient">AI</span> your child's
              favourite subject
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Edsurance turns complex AI concepts into playful, guided experiences — so children build real
              future-ready skills while still feeling like they are playing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary rounded-full px-8 text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105"
              >
                <Link to="/programs">
                  Explore AI Programs <ChevronRight className="ml-1 h-4 w-4" />
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
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Powered by safe, research-backed AI • Designed for ages 4–16
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding" aria-labelledby="ai-pillars">
        <div className="container-tight mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                How AI learning works
              </span>
              <h2 id="ai-pillars" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Designed for curiosity, backed by science
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Each module combines storytelling, simulations, and guided reflection so children understand
                not just what AI can do — but how and when to use it responsibly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.08}>
                <div className="card-glow rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Topics grid */}
      <section className="section-padding bg-muted/30" aria-label="AI topics">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Learning tracks
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                A complete AI journey, step by step
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From first time coders to young innovators, our structured tracks grow with your child — no
                prior experience needed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.06}>
                <div className="group hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-elevated">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-label="AI call to action">
        <div className="container-tight mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="gradient-card relative overflow-hidden rounded-[1.75rem] border border-border/60 p-8 text-center shadow-card sm:p-10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-primary/20" />
              <div className="absolute -left-20 -bottom-20 h-52 w-52 rounded-full border border-primary/10" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Ready to open your school's AI lab?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Partner with Edsurance to bring research-backed AI learning, mental wellness support, and
                  scientific thinking into every classroom.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary px-8 text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105"
                  >
                    <Link to="/contact">Book a demo</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-border px-8 hover:border-primary hover:text-primary"
                  >
                    <Link to="/programs">View all programs</Link>
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

export default AILearningPage;
