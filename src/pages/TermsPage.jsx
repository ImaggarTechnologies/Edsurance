import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Edsurance terms and conditions. Read our terms of service governing the use of our AI-powered educational platform."
        path="/terms"
      />

      <section className="section-padding" aria-labelledby="terms-heading">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <h1 id="terms-heading" className="mb-8 font-display text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="mb-4 text-sm text-muted-foreground">Last updated: February 2026</p>

            <div className="prose-sm space-y-6 text-muted-foreground">
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>By accessing or using Edsurance, you agree to be bound by these terms. If you do not agree, please do not use our platform.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">2. Use of Service</h2>
                <p>Edsurance provides educational content and tools. You agree to use the platform only for lawful, educational purposes and in accordance with these terms.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">3. Accounts</h2>
                <p>Parents or guardians must create and manage accounts for children. You are responsible for maintaining the security of your account credentials.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">4. Intellectual Property</h2>
                <p>All content, trademarks, and materials on Edsurance are owned by or licensed to us. You may not copy, distribute, or create derivative works without permission.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
                <p>Edsurance is provided "as is." We make no warranties regarding the accuracy or completeness of content and shall not be liable for any damages arising from use of the platform.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">6. Contact</h2>
                <p>For questions about these terms, contact us at legal@edsurance.com.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
