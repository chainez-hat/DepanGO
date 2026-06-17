import Button from "../../components/Button";
import "./Home.css";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
import EmergencyCTA from "../../components/EmergencyCTA";
import HowItWork from "../../components/HowItWork";

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <EmergencyCTA />
      <HowItWork />
      {/* Bienvenue ! */}
    </>
  );
}

export default Home;
