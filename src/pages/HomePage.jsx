import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Brain, BookOpen, Shield, Users, Play, ChevronRight, Star, Lightbulb, Cpu, GraduationCap, CheckCircle2, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-image.jpg";
import { testimonials } from "@/data/testimonials";
import { founder } from "@/data/founder";

const features = [
  { icon: Brain, title: "AI-Powered Learning", description: "Adaptive algorithms personalize every lesson to match your child's unique learning style and pace.", color: "gradient-primary" },
  { icon: Sparkles, title: "AR Experiences", description: "Immersive augmented reality brings abstract concepts to life, making learning unforgettable.", color: "gradient-accent" },
  { icon: BookOpen, title: "Story-Based Videos", description: "Engaging narratives that teach complex subjects through captivating visual storytelling.", color: "gradient-primary" },
  { icon: Shield, title: "Child-Safe Platform", description: "100% safe, ad-free environment with curated content reviewed by child development experts.", color: "gradient-accent" },
  { icon: Users, title: "Parenting Guidance", description: "Expert resources to help parents support their child's educational journey at home.", color: "gradient-primary" },
  { icon: Cpu, title: "Future-Ready Skills", description: "Prepare children for tomorrow with coding, critical thinking, and digital literacy programs.", color: "gradient-accent" },
];

const stats = [
  { value: "50K+", label: "Active Learners", icon: GraduationCap },
  { value: "200+", label: "Expert Courses", icon: Award },
  { value: "98%", label: "Satisfaction", icon: CheckCircle2 },
  { value: "4.9★", label: "Average Rating", icon: Star },
];

const trustItems = ["Child-Safe Certified", "Expert-Curated", "AI-Powered", "COPPA Compliant"];

const HomePage = () => {
  return (
    <>
      <SEO
        title="AI-Powered Learning for Children"
        description="Edsurance empowers children with AI-powered, child-safe education. Adaptive learning, AR experiences, and expert-curated content for future-ready skills."
        path="/"
      />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden" aria-label="Hero">
        {/* Decorative blobs */}
        <div className="blob blob-primary absolute -left-24 top-20 h-96 w-96" aria-hidden="true" />
        <div className="blob blob-accent absolute -right-24 bottom-10 h-80 w-80" aria-hidden="true" />

        <div className="container-tight relative section-padding pb-8 lg:pb-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary"
              >
                <Sparkles className="h-4 w-4" /> AI-Powered Education Platform
              </motion.span>

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Unlock Your Child's Full Potential with{" "}
                <span className="text-gradient">AI-Powered Learning</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                A safe, intelligent, and interactive education platform designed by experts to nurture curiosity, creativity, and confidence in every child.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gradient-primary rounded-full px-8 text-lg text-primary-foreground shadow-glow transition-all hover:shadow-elevated hover:scale-105">
                  <Link to="/programs">
                    Start Learning..! <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-border px-8 text-lg transition-all hover:border-primary hover:text-primary">
                  <Link to="/about">
                    <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {trustItems.map((item) => (
                  <span key={item} className="trust-badge text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl shadow-elevated ring-1 ring-border/50">
                <img
                  src={heroImage}
                  alt="Children learning with AI-powered interactive displays"
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating card - students */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-elevated ring-1 ring-border/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-accent shadow-soft">
                    <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-foreground">50K+ Students</p>
                    <p className="text-xs text-muted-foreground">Learning daily</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - AI */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 top-6 rounded-2xl bg-card p-3 shadow-elevated ring-1 ring-border/30"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-soft">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">AI Powered</p>
                    <p className="text-[10px] text-muted-foreground">Adaptive Learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border bg-card" aria-label="Statistics">
        <div className="container-tight px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What is Edsurance */}
      <section className="relative section-padding" aria-labelledby="what-is-edsurance">
        <div className="blob blob-accent absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2" aria-hidden="true" />
        <div className="container-tight relative">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">About Our Platform</span>
              <h2 id="what-is-edsurance" className="font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                What is <span className="text-gradient">Edsurance</span>?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Edsurance is a premium educational platform that combines artificial intelligence, augmented reality, and expert pedagogy to create personalized learning experiences. Designed by scientists and educators, our platform ensures every child learns at their own pace in a safe, engaging environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/30" aria-labelledby="features-heading">
        <div className="container-tight">
          <ScrollReveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">Features</span>
              <h2 id="features-heading" className="font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                Everything Your Child Needs to{" "}
                <span className="text-gradient">Thrive</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A comprehensive suite of tools designed to make learning effective, safe, and exciting.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="card-glow group rounded-2xl border border-border bg-card p-7 transition-all hover-lift hover:shadow-elevated">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Credibility */}
      <section className="relative section-padding overflow-hidden" aria-labelledby="founder-heading">
        <div className="blob blob-primary absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2" aria-hidden="true" />
        <div className="container-tight relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">
                  <Lightbulb className="h-4 w-4" /> Meet Our Founder
                </span>
                <h2 id="founder-heading" className="mt-6 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                  Built by an Educator, for Every Child
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{founder.bio}</p>
                <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6 italic text-muted-foreground">
                  "{founder.quote}"
                </blockquote>
                <p className="mt-5 font-display text-lg font-bold text-foreground">— {founder.name}, <span className="text-primary">{founder.title}</span></p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {founder.expertise.map((skill, i) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-shadow hover:shadow-card"
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {[Brain, Cpu, BookOpen, Award][i] && (() => {
                        const Icon = [Brain, Cpu, BookOpen, Award][i];
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30" aria-labelledby="testimonials-heading">
        <div className="container-tight">
          <ScrollReveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">Testimonials</span>
              <h2 id="testimonials-heading" className="font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                Loved by Parents & Students
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Real stories from families who transformed their learning journey.</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="hover-lift group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:shadow-elevated">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 px-8 transition-all hover:border-primary hover:text-primary">
              <Link to="/testimonials">View All Testimonials <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-label="Call to action">
        <div className="container-tight">
          <ScrollReveal>
            <div className="relative gradient-cta overflow-hidden rounded-[2rem] p-10 text-center sm:p-14 lg:p-20">
              {/* Decorative circles */}
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-primary-foreground/10" aria-hidden="true" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-primary-foreground/10" aria-hidden="true" />
              <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-primary-foreground/5" aria-hidden="true" />

              <div className="relative">
                <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
                  Ready to Transform Your Child's Learning?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">
                  Join thousands of families who trust Edsurance for safe, intelligent, and engaging education.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-card px-10 text-lg text-primary shadow-elevated transition-all hover:bg-card/90 hover:scale-105">
                    <Link to="/programs">Explore Programs</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary-foreground bg-primary-foreground/10 px-10 text-lg text-primary-foreground font-semibold shadow-elevated transition-all hover:bg-primary-foreground/20 hover:scale-105">
                    <Link to="/contact">Talk to Us</Link>
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

export default HomePage;
