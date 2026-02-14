import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { RestaurantSection } from "@/components/sections/restaurant";
import { BarSection } from "@/components/sections/bar";
import { EventsSection } from "@/components/sections/events";
import { AboutSection } from "@/components/sections/about";
import { CateringSection } from "@/components/sections/catering";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { GallerySection } from "@/components/sections/gallery";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RestaurantSection />
        <BarSection />
        <EventsSection />
        <AboutSection />
        <CateringSection />
        <TestimonialsSection />
        <ContactSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
