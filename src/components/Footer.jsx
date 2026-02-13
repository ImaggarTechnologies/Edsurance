import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, Mail, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edsurance-logo.png";

const footerLinks = {
  Platform: [
    { label: "Programs", href: "/programs" },
    { label: "AI Learning", href: "/ai-learning" },
    { label: "Parenting Hub", href: "/parenting" },
    { label: "Resources", href: "/resources" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border" role="contentinfo">
      {/* Decorative blobs */}
      <div className="blob blob-primary absolute -right-32 -top-32 h-64 w-64" aria-hidden="true" />
      <div className="blob blob-accent absolute -left-32 bottom-0 h-48 w-48" aria-hidden="true" />

      {/* Newsletter CTA strip */}
      <div className="gradient-primary relative">
        <div className="container-tight flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg font-bold text-primary-foreground">Stay Updated with Edsurance</h3>
            <p className="mt-1 text-sm text-primary-foreground/80">Get the latest on AI education, tips, and new features.</p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-card px-8 text-primary shadow-card transition-all hover:bg-card/90 hover:scale-105">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative bg-muted/20">
        <div className="container-tight px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand column — wider */}
            <div className="space-y-5 lg:col-span-2">
              <Link to="/" aria-label="Edsurance Home" className="inline-block transition-transform hover:scale-105">
                <img src={logo} alt="Edsurance logo" className="h-10 w-auto" />
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Empowering the next generation with AI-powered, child-safe education that adapts to every learner's unique potential.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        

    <div className="mt-12 border-t border-border pt-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        

        <div className="text-left">
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with{" "}
            <Heart
              className="h-3.5 w-3.5 fill-primary text-primary"
              aria-label="love"
            />{" "}
            for learners everywhere
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edsurance. All rights reserved.
          </p>
        </div>

      
        <div className="text-left md:text-right">
          <p className="text-xs text-muted-foreground">
            Powered by Imaggar Technologies Pvt. Ltd.
          </p>
        </div>

      </div>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
