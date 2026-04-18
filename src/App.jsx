import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import FeaturedVehicles from './sections/FeaturedVehicles';
import VehicleCategories from './sections/VehicleCategories';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedVehicles />
        <VehicleCategories />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
