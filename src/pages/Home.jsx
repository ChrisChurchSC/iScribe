import Nav from '../components/Nav'
import Hero from '../components/Hero'
import KpiBand from '../components/KpiBand'
import UseCases from '../components/UseCases'
import DoctorVideos from '../components/DoctorVideos'
import ProductSection from '../components/ProductSection'
import HowItWorks from '../components/HowItWorks'
import BentoSection from '../components/BentoSection'
import Integrations from '../components/Integrations'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <KpiBand />
      <Testimonials />
      <Integrations />
      <HowItWorks />
      {/* <UseCases /> hidden for now */}
      <ProductSection />
      {/* <BentoSection /> hidden for now */}
      <DoctorVideos />
      <FAQ />
      <Footer />
    </>
  )
}
