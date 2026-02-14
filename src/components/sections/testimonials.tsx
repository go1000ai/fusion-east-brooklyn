"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { Star } from "lucide-react";
import { useRef } from "react";

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 sm:py-32" ref={testimonialRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <article className="max-w-screen-md mx-auto text-center space-y-2 mb-12">
          <TimelineContent
            as="p"
            className="text-sm font-medium uppercase tracking-[0.3em] text-gold"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            What People Say
          </TimelineContent>
          <TimelineContent
            as="h2"
            className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Guest Reviews
          </TimelineContent>
          <TimelineContent
            as="p"
            className="mx-auto text-warm-white/60 text-lg"
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Hear what our community has to say about Fusion East
          </TimelineContent>
        </article>

        {/* Testimonial Grid — 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-gold/10 overflow-hidden rounded-2xl border border-gold/20 p-6"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#D4A85320_1px,transparent_1px),linear-gradient(to_bottom,#D4A85320_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto relative z-10">
                <Stars />
                <p className="mt-3 text-warm-white/80 leading-relaxed">
                  &ldquo;The oxtail is absolutely incredible — tender, flavorful, and the best I&apos;ve had in Brooklyn. The vibe on a Saturday night with the DJ is unmatched.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-warm-white">Shanice R.</h3>
                    <p className="text-sm text-warm-white/50">Google Review</p>
                  </div>
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-coral overflow-hidden rounded-2xl p-6"
            >
              <article className="mt-auto">
                <Stars />
                <p className="mt-3 text-white/90 leading-relaxed">
                  &ldquo;We had Fusion East cater our office holiday party. The jerk chicken was the talk of the office for weeks.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-white">Denise P.</h3>
                    <p className="text-sm text-white/70">Catering Client</p>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-dark-card overflow-hidden rounded-2xl border border-dark-border p-6"
            >
              <article className="mt-auto">
                <Stars />
                <p className="mt-3 text-warm-white/80 leading-relaxed">
                  &ldquo;Brought my whole family for Sunday brunch and it was a hit. The chicken &amp; waffles are a must-try. Staff was warm and attentive.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-warm-white">Marcus T.</h3>
                    <p className="text-sm text-warm-white/50">Yelp Review</p>
                  </div>
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-dark-card overflow-hidden rounded-2xl border border-dark-border p-6"
            >
              <article className="mt-auto">
                <Stars />
                <p className="mt-3 text-warm-white/80 leading-relaxed">
                  &ldquo;Karaoke Mondays are my new favorite thing. Great drinks, great food, and a judgment-free zone to sing your heart out.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-warm-white">Kevin L.</h3>
                    <p className="text-sm text-warm-white/50">Google Review</p>
                  </div>
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-dark-card overflow-hidden rounded-2xl border border-dark-border p-6"
            >
              <article className="mt-auto">
                <Stars />
                <p className="mt-3 text-warm-white/80 leading-relaxed">
                  &ldquo;The fusion concept really works here. It&apos;s not just Caribbean or just soul food — it&apos;s something special. The curry shrimp pasta is out of this world.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-warm-white">Tanya W.</h3>
                    <p className="text-sm text-warm-white/50">Yelp Review</p>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-teal overflow-hidden rounded-2xl p-6"
            >
              <article className="mt-auto">
                <Stars />
                <p className="mt-3 text-white/90 leading-relaxed">
                  &ldquo;Best happy hour in East New York, hands down. Teachers get early access which is a beautiful touch.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-white">James D.</h3>
                    <p className="text-sm text-white/70">Regular</p>
                  </div>
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-gold/10 overflow-hidden rounded-2xl border border-gold/20 p-6"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#D4A85320_1px,transparent_1px),linear-gradient(to_bottom,#D4A85320_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto relative z-10">
                <Stars />
                <p className="mt-3 text-warm-white/80 leading-relaxed">
                  &ldquo;Had the food truck at our block party and everyone was blown away. The portions are generous, prices are fair, and the flavors are authentic. Fusion East is a Brooklyn gem — veteran-owned and community-first.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-5">
                  <div>
                    <h3 className="font-semibold text-warm-white">Rochelle M.</h3>
                    <p className="text-sm text-warm-white/50">Food Truck Client</p>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
