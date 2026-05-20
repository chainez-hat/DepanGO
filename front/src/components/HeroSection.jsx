import heroBg from "../assets/hero-bg.png";

export default function HeroSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <img
        src={heroBg}
        alt="Technicien en intervention"
        className="block w-full h-auto"
      />
    </section>
  );
}