import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Edsurance's privacy policy. Learn how we collect, use, and protect your data and your child's information."
        path="/privacy"
      />

      <section className="section-padding" aria-labelledby="privacy-heading">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <h1 id="privacy-heading" className="mb-8 font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mb-4 text-sm text-muted-foreground">Last updated: February 2026</p>

            <div className="prose-sm space-y-6 text-muted-foreground">
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">1. Information We Collect</h2>
                <p>We collect information you provide directly, such as name, email, and contact details when you register or contact us. For child accounts, we collect only the minimum information necessary.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">2. How We Use Information</h2>
                <p>Your information is used to provide personalized learning experiences, communicate updates, and improve our platform. We never sell personal data to third parties.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">3. Children's Privacy (COPPA)</h2>
                <p>Edsurance is committed to complying with COPPA. We require parental consent before collecting any data from children under 13 and provide parents full access to their child's information.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">4. Data Security</h2>
                <p>We employ industry-standard security measures including encryption, secure servers, and regular security audits to protect your information.</p>
              </div>
              <div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">5. Contact Us</h2>
                <p>If you have questions about this policy, contact us at privacy@edsurance.com.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
