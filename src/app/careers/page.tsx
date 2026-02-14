import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team | Fusion East",
  description: "Career opportunities at Fusion East Caribbean & Soul Food Restaurant in Brooklyn, NY.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gold hover:text-gold-light transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-warm-white mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-warm-white/60 mb-12">
          Fusion East is always looking for passionate, hardworking people to join our family. Whether you&apos;re experienced in the food industry or just starting out, we want to hear from you.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Line Cook",
              type: "Full-time / Part-time",
              description:
                "Prepare dishes according to our recipes and standards. Experience with Caribbean or soul food cuisine is a plus.",
            },
            {
              title: "Server / Waitstaff",
              type: "Full-time / Part-time",
              description:
                "Provide excellent customer service in a fast-paced environment. Must be friendly, reliable, and able to work evenings and weekends.",
            },
            {
              title: "Bartender",
              type: "Part-time",
              description:
                "Craft signature cocktails and serve drinks at our bar. Must have bartending experience and knowledge of spirits.",
            },
            {
              title: "Food Truck Staff",
              type: "Part-time / Seasonal",
              description:
                "Help operate our mobile kitchen at events and festivals across the NYC metro area. Must be flexible with scheduling.",
            },
            {
              title: "Catering Assistant",
              type: "Part-time / Event-based",
              description:
                "Assist with catering events including setup, service, and breakdown. Must be professional and detail-oriented.",
            },
          ].map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-dark-border bg-dark-card p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h2 className="font-serif text-xl font-semibold text-warm-white">
                  {job.title}
                </h2>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {job.type}
                </span>
              </div>
              <p className="text-sm text-warm-white/60">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-warm-white mb-3">
            Ready to Apply?
          </h3>
          <p className="text-warm-white/60 mb-6">
            Send your resume and a brief introduction to us. Walk-ins are also welcome during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7189755065"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-light"
            >
              Call (718) 975-5065
            </a>
            <p className="text-sm text-warm-white/40">
              or visit us at 1179 Elton Street, Brooklyn, NY 11239
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
