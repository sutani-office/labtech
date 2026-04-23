import HeroSection from '../components/home/HeroSection'
import ClientsSection from '../components/home/ClientsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import ValuesSection from '../components/home/ValuesSection'
import SolutionsSection from '../components/home/SolutionsSection'
import StatsSection from '../components/home/StatsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BlogSection from '../components/home/BlogSection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <ValuesSection />
      <SolutionsSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
