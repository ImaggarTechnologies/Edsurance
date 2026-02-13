import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { blogs } from "@/data/blogs";

const BlogPage = () => {
  return (
    <>
      <SEO
        title="Blog - Insights on AI Education & Parenting"
        description="Read expert articles on AI-powered education, parenting strategies, growth mindset, and future-ready skills for children."
        path="/blog"
      />

      <section className="gradient-hero section-padding" aria-labelledby="blog-hero">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1 id="blog-hero" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              The Edsurance <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Insights, research, and practical advice on education, parenting, and the future of learning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Blog articles">
        <div className="container-tight mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 rounded-2xl border border-border bg-card/70 p-6 shadow-soft backdrop-blur">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Edsurance in the News
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Edsurance and its founder,{" "}
                <span className="font-medium text-foreground">Suresh Sathyanarayanan</span>, have been
                featured in leading global publications for championing scientific thinking in schools and
                holistic student development.
              </p>
              <ul className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
                <li className="rounded-xl border border-border bg-background/60 p-4 hover-lift hover-glow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Times of India</p>
                  <p className="mt-1 font-medium text-foreground">
                    Edsurance platform champions scientific thinking in schools
                  </p>
                  <a
                    href="https://timesofindia.indiatimes.com/entertainment/events/suresh-sathyanarayanans-edsurance-platform-champions-scientific-thinking-in-schools/articleshow/121363187.cms"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center text-xs font-medium text-primary hover:underline"
                  >
                    Read on Times of India
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li className="rounded-xl border border-border bg-background/60 p-4 hover-lift hover-glow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">ANI News</p>
                  <p className="mt-1 font-medium text-foreground">
                    Norwegian institutions honour Suresh Sathyanarayanan for education transformation
                  </p>
                  <a
                    href="https://www.aninews.in/news/business/suresh-sathyanarayanan-ceo-of-uns-groups-honored-by-norwegian-educational-institutions-for-pioneering-contributions-to-education-transformation20250218125315/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center text-xs font-medium text-primary hover:underline"
                  >
                    Read on ANI
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li className="rounded-xl border border-border bg-background/60 p-4 hover-lift hover-glow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">AJPR (Journal)</p>
                  <p className="mt-1 font-medium text-foreground">
                    Edsurance: A Revolutionary Educational Guidance Platform for Holistic Student Development
                  </p>
                  <a
                    href="https://ajprui.com/index.php/ajpr/article/view/373"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center text-xs font-medium text-primary hover:underline"
                  >
                    Read research article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <ScrollReveal key={blog.id} delay={i * 0.08}>
              <Link
                to={`/blog/${blog.id}`}
                aria-label={`Read ${blog.title}`}
                className="group hover-lift flex flex-col rounded-2xl border border-border bg-card shadow-soft overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-elevated cursor-pointer"
              >
                <div className="gradient-primary h-2" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block self-start rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {blog.category}
                  </span>
                  <h2 className="mb-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
