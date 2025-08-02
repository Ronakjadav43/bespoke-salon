import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import AppointmentSection from "@/components/appointment-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <AppointmentSection />
      <Footer />
    </div>
  )
}
