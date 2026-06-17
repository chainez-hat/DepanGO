import Button from "../../components/Button";
import "./Home.css";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
import EmergencyCTA from "../../components/EmergencyCTA";

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <EmergencyCTA />

      {/* Bienvenue ! */}
    </>
  );
}

export default Home;
