import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ServicesSection from "./component/ServicesSection";
import ContactSection from "./component/ContactSection";

function home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default home;