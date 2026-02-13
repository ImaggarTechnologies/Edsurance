import { Heart, Brain, Sprout, MessageCircle, BookHeart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const topics = [
  { icon: Heart, title: "Emotional Intelligence", description: "Help your child understand and manage emotions, build empathy, and develop strong interpersonal skills that last a lifetime." },
  { icon: Sprout, title: "Growth Mindset", description: "Foster resilience and a love of challenges. Learn practical strategies to help your child see effort as the path to mastery." },
  { icon: Brain, title: "Learning Psychology", description: "Understand how children's brains develop and learn. Discover the science behind effective study habits and memory retention." },
  { icon: MessageCircle, title: "Effective Communication", description: "Build strong parent-child communication that supports learning, trust, and healthy emotional development." },
  { icon: BookHeart, title: "Screen Time Balance", description: "Navigate the digital world confidently. Learn to maximize educational screen time while maintaining healthy boundaries." },
  { icon: Lightbulb, title: "Expert Guidance", description: "Access weekly insights from child psychologists, educators, and development specialists through our curated resource library." },
];

const pillars = [
  {
    title: "Science-backed parenting",
    description: "Simple frameworks rooted in child psychology, emotional intelligence, and learning science — distilled so any parent can apply them.",
  },
  {
    title: "Designed for busy families",
    description: "Short, actionable resources you can use in minutes a day: scripts, checklists, and conversation starters.",
  },
  {
    title: "Aligned with Edsurance learning",
    description: "Guides that connect directly to what children experience on Edsurance, so home and platform reinforce each other.",
  },
];

const ParentingPage = () => {
  return (
    <>
      <SEO
        title="Parenting Hub - Expert Resources for Parents"
        description="Access expert parenting resources on emotional intelligence, growth mindset, learning psychology, and effective communication strategies."
        path="/parenting"
      />

      <section className="gradient-hero section-padding relative overflow-hidden" aria-labelledby="parenting-hero">
        <div className="blob blob-primary absolute -left-24 top-10 h-72 w-72" aria-hidden="true" />
        <div className="blob blob-accent absolute -right-24 bottom-0 h-72 w-72" aria-hidden="true" />

        <div className="container-tight relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/90 px-5 py-2 text-sm font-semibold text-foreground shadow-soft">
              <Heart className="h-4 w-4" />
              Parenting Hub for Families
            </span>
            <h1
              id="parenting-hero"
              className="mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-[3rem]"
            >
              Your Partner in <span className="text-gradient">Modern Parenting</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Calm, clear guidance to help you raise emotionally strong, scientifically curious children — without
              adding to your daily overwhelm.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary rounded-full px-8 text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105"
              >
                <Link to="/programs">Explore Programs</Link>
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

      <section className="section-padding" aria-labelledby="parenting-pillars">
        <div className="container-tight mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                How we support you
              </span>
              <h2
                id="parenting-pillars"
                className="font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Made for real parents, not perfect ones
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.08}>
                <div className="h-full">
                  <div className="card-glow flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30" aria-labelledby="parenting-topics">
        <div className="container-tight">
          <ScrollReveal>
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-card shadow-soft">
                Deep-dive topics
              </span>
              <h2
                id="parenting-topics"
                className="font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Practical tools for everyday moments
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Bite-sized guides and frameworks you can use during homework time, difficult conversations,
                or daily routines.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.1}>
                <div className="group hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-secondary-foreground transition-transform group-hover:scale-110">
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ParentingPage;
