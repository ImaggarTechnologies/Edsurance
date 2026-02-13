import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edsurance-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Parenting Hub", href: "/parenting" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex h-18 items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105" aria-label="Edsurance Home">
          <img src={logo} alt="Edsurance logo" className="h-9 w-auto sm:h-11" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 rounded-full border border-border/50 bg-card/80 px-2 py-1.5 shadow-soft backdrop-blur-sm lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button asChild size="lg" className="gradient-primary rounded-full px-7 text-primary-foreground shadow-glow transition-all hover:shadow-elevated hover:scale-105">
            <Link to="/contact">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-muted lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/50 bg-background shadow-elevated lg:hidden"
          >
            <div className="container-tight flex flex-col gap-1 px-4 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? "gradient-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild size="lg" className="gradient-primary mt-3 rounded-full text-primary-foreground shadow-glow">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
