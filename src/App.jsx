import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import FeaturedBento from "./components/FeaturedBento";
import Experience from "./components/Experience";
import Services from "./components/Services";
import PhotoStrip from "./components/PhotoStrip";
import PressLogos from "./components/PressLogos";
import SocialMetrics from "./components/SocialMetrics";
import Reviews from "./components/Reviews";
import Legacy from "./components/Legacy";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PressLogos />
        <About />
        <FeaturedBento />
        <Experience />
        <Services />
        <PhotoStrip />
        <SocialMetrics />
        <Reviews />
        <Legacy />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
