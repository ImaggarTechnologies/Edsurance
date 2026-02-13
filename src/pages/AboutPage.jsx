import { Link } from "react-router-dom";
import { Shield, Heart, Lightbulb, Award, Users, Target, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { founder } from "@/data/founder";

const values = [
  { icon: Shield, title: "Safety First", description: "Every piece of content is reviewed by child safety experts. Our platform is 100% ad-free and COPPA compliant." },
  { icon: Heart, title: "Child-Centered Design", description: "Built around how children actually learn — with empathy, patience, and age-appropriate interactions." },
  { icon: Lightbulb, title: "Innovation", description: "We leverage cutting-edge AI, AR, and pedagogy research to create experiences that inspire curiosity." },
  { icon: Award, title: "Excellence", description: "Our content is crafted by subject matter experts and validated by educational researchers." },
  { icon: Users, title: "Inclusivity", description: "Accessible education for every child, regardless of background, learning style, or ability." },
  { icon: Target, title: "Outcome-Focused", description: "We measure success by real learning outcomes, not just screen time or completion rates." },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us - Our Mission & Vision"
        description="Learn about Edsurance's mission to democratize AI-powered education. Founded by Suresh Sathiyanarayanan, we're building the future of safe, intelligent learning."
        path="/about"
      />

      <section className="gradient-hero section-padding relative overflow-hidden" aria-labelledby="about-hero">
        <div className="blob blob-primary absolute top-[-8%] left-[-10%] h-72 w-72" />
        <div className="blob blob-accent absolute bottom-[-6%] right-[-8%] h-80 w-80" />
        <div className="container-tight mx-auto max-w-3xl text-center relative z-10">
          <ScrollReveal>
            <h1 id="about-hero" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Education Reimagined for the <span className="text-gradient">AI Age</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              We believe every child deserves access to world-class, personalized education that adapts to their unique potential.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]">
                Explore Programs
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground bg-card/80 hover:bg-card transition">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="mission">
        <div className="container-tight">
          <ScrollReveal>
            <h2 id="mission" className="mb-8 font-display text-3xl font-bold text-foreground text-center sm:text-left">Our Mission & Vision</h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 items-stretch">
            <ScrollReveal>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-soft h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">Our Mission</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Democratize world-class, child-safe learning through technology and research-backed pedagogy — so every child can learn confidently at their own pace.</p>
                  </div>
                </div>
                <div className="mt-4 flex-1" />
                <div className="mt-4">
                  <Link to="/programs" className="text-sm font-semibold text-primary">View Programs →</Link>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-soft h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">Our Vision</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A future where intelligent, empathetic systems support joyful learning — helping children develop curiosity, resilience, and real understanding.</p>
                  </div>
                </div>
                <div className="mt-4 flex-1" />
                <div className="mt-4">
                  <Link to="/contact" className="text-sm font-semibold text-primary">Contact Us →</Link>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30" aria-labelledby="values-heading">
        <div className="container-tight">
          <ScrollReveal>
            <h2 id="values-heading" className="mb-12 text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Core Values
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:scale-[1.02]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

<section className="section-padding relative bg-gradient-to-b from-white to-muted/20" aria-labelledby="founder-section">
  <div className="container-tight mx-auto max-w-5xl">
    <ScrollReveal>
      <div className="grid gap-16 lg:grid-cols-2 items-center">

        {/* ================= LEFT: CUTOUT IMAGE STYLE ================= */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">

            {/* Soft background glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-72 bg-primary/10 blur-3xl rounded-full"></div>

            <div className="relative rounded-3xl bg-white p-8 shadow-xl border border-border/40">

              {/* Cutout Image */}
              <div className="flex justify-center">
                <img
                  src={founder.image || "/founder.png"}
                  alt={founder.name}
                  className="w-full max-w-xs object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <div className="mt-6 text-center">
                <p className="font-display text-xl font-bold text-foreground">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm font-medium text-primary">
                  {founder.title}
                </p>
                <p className="mt-3 text-xs text-muted-foreground tracking-wide">
                  Educationist • Scientist • Speaker
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://sureshsathyanarayanan.com/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: PROFESSIONAL CONTENT ================= */}
        <div>
          <h2
            id="founder-section"
            className="font-display text-4xl font-bold leading-tight text-foreground"
          >
            Founded by a <span className="text-gradient">Multi-Faceted Icon</span>
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">
                Suresh Sathyanarayanan
              </strong>{" "}
              brings over 23 years of experience in education and leadership.
              He founded Edsurance to make research-backed,
              student-centered learning accessible to every child.
            </p>

            <p className="text-sm text-muted-foreground">
              Featured in national outlets including{" "}
              <span className="font-medium text-foreground">
                Times of India
              </span>
              ,{" "}
              <span className="font-medium text-foreground">
                ANI News
              </span>{" "}
              and{" "}
              <span className="font-medium text-foreground">
                The Print
              </span>
              .
            </p>
          </div>

          {/* Executive Quote Style */}
          <div className="mt-8 rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
            <p className="italic text-muted-foreground leading-relaxed">
              “{founder.quote}”
            </p>
          </div>

          {/* Expertise */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Core Expertise
            </h4>

            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
              {founder.expertise.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </ScrollReveal>
  </div>
</section>



    </>
  );
};





export default AboutPage;
