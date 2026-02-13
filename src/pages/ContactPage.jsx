import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What age groups does Edsurance support?", a: "Edsurance is designed for children aged 4–16, with age-appropriate content and adaptive difficulty for every level." },
  { q: "Is the platform safe for children?", a: "Absolutely. Our platform is 100% ad-free, COPPA compliant, and all content is reviewed by child safety experts." },
  { q: "How does AI personalize learning?", a: "Our AI analyzes each child's learning patterns, strengths, and areas for improvement to create a tailored learning path." },
  { q: "Can parents track progress?", a: "Yes! Parents have a dedicated dashboard to monitor their child's progress, achievements, and learning insights." },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all required fields before submitting." });
      return;
    }

    const mailto = new URL(`mailto:hello@edsurance.com`);
    const params = new URLSearchParams({
      subject: form.subject || "Edsurance contact enquiry",
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    mailto.search = params.toString();

    window.location.href = mailto.toString();

    setStatus({ type: "success", message: "Your email client has been opened. Please review and send your message." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Have questions about Edsurance? Contact our team for inquiries about programs, partnerships, or support. We'd love to hear from you."
        path="/contact"
      />

      <section className="gradient-hero section-padding" aria-labelledby="contact-hero">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1 id="contact-hero" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions, feedback, or partnership ideas? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" aria-label="Contact form and info">
        <div className="container-tight grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
              {status.type !== "idle" && (
                <div
                  className={`mb-4 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-100"
                      : "border-red-500/40 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-100"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">Full Name</label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">Email</label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-foreground">Subject</label>
                  <Input id="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more..." />
                </div>
                <Button type="submit" size="lg" className="gradient-primary rounded-full px-8 text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@edsurance.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 mt-10 font-display text-xl font-bold text-foreground">FAQ</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-border bg-card p-4">
                    <p className="mb-1 text-sm font-semibold text-foreground">{faq.q}</p>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
