import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fusion East",
  description: "Terms of Service for Fusion East Caribbean & Soul Food Restaurant.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gold hover:text-gold-light transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-warm-white mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-warm-white/40 mb-8">
          Last updated: February 2026
        </p>

        <div className="space-y-8 text-warm-white/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Fusion East website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">2. Use of Our Services</h2>
            <p>
              Our website provides information about Fusion East restaurant, bar, catering services, food truck, and events. You may use our website for personal, non-commercial purposes. You agree not to misuse our services or interfere with their operation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">3. Reservations &amp; Catering</h2>
            <p>
              Reservations and catering orders are subject to availability. We reserve the right to modify pricing, menus, and availability at any time. Catering deposits may be required and are subject to our cancellation policy. Please contact us directly for specific terms related to catering and event bookings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and design — is the property of Fusion East and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">5. User Conduct</h2>
            <p>
              When using our website or visiting our establishment, you agree to behave respectfully and comply with all applicable laws. We reserve the right to refuse service to anyone for any reason.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">6. Limitation of Liability</h2>
            <p>
              Fusion East is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our website is provided &quot;as is&quot; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">7. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of our website after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">8. Contact</h2>
            <p>
              If you have questions about these terms, contact us at:
            </p>
            <p className="mt-2">
              Fusion East<br />
              1179 Elton Street, Brooklyn, NY 11239<br />
              Phone: (718) 975-5065
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
