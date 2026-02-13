import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { blogs } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <section className="section-padding">
        <div className="container-tight text-center">
          <h2 className="text-2xl font-bold">Article not found</h2>
          <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.id}`} />

      <section className="gradient-hero section-padding" aria-labelledby="post-hero">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground mb-4">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
            <h1 id="post-hero" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.author}</span>
              {post.externalUrl && (
                <>
                  <span>•</span>
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    View original source
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </>
              )}
            </div>
            <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight mx-auto max-w-3xl">
          <article className="prose prose-lg mx-auto text-foreground">
            {post.content}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
