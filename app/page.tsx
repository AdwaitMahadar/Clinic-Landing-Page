import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { DoctorsSection } from "@/components/doctors-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <AboutSection />
        <DoctorsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
