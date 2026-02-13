import { Star } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/testimonials";

const TestimonialsPage = () => {
  return (
    <>
      <SEO
        title="Testimonials - Parent & Student Success Stories"
        description="Read real success stories from parents and students who transformed their learning journey with Edsurance's AI-powered platform."
        path="/testimonials"
      />

      <section className="gradient-hero section-padding" aria-labelledby="testimonials-hero">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1 id="testimonials-hero" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              What Families <span className="text-gradient">Say About Us</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real stories from real families. Hear how Edsurance is making a difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Testimonials">
        <div className="container-tight grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <div className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
