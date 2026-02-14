import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fusion East",
  description: "Privacy Policy for Fusion East Caribbean & Soul Food Restaurant.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-warm-white/40 mb-8">
          Last updated: February 2026
        </p>

        <div className="space-y-8 text-warm-white/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide when you contact us, make a reservation, place a catering order, or submit a job application. This may include your name, email address, phone number, and event details.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Process reservations and catering orders</li>
              <li>Respond to inquiries and customer service requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Process job applications</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, processing orders, or serving our customers, provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">4. Cookies &amp; Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience and collect anonymous usage data. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-warm-white mb-3">8. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
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
