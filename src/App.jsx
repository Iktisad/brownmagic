import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import PressFeature from "./components/PressFeature";
import About from "./components/About";
import OriginStory from "./components/OriginStory";
import CareerHighlights from "./components/CareerHighlights";
import SignatureShow from "./components/SignatureShow";
import Experience from "./components/Experience";
import Services from "./components/Services";
import FestivalStages from "./components/FestivalStages";
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
        <About />
        <PressFeature />
        <OriginStory />
        <CareerHighlights />
        <SignatureShow />
        <Experience />
        <Services />
        <FestivalStages />
        <PhotoStrip />
        <PressLogos />
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
