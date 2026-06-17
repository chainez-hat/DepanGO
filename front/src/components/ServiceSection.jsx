import electriciteIcon from "../assets/electricite.svg";
import internetIcon from "../assets/internet.svg";
import plomberieIcon from "../assets/plombrie.svg";
import chauffageIcon from "../assets/chauffage.svg";
import serrurerieIcon from "../assets/serrurerie.svg";

export default function ServiceSection() {
  const services = [
    {
      title: "Électricité",
      description: "Panne, installation, mise aux normes...",
      icon: electriciteIcon,
    },
    {
      title: "Internet",
      description: "Connexion, panne, installation...",
      icon: internetIcon,
    },
    {
      title: "Plomberie",
      description: "Fuite, débouchage, chauffe-eau...",
      icon: plomberieIcon,
    },
    {
      title: "Chauffage",
      description: "Entretien, panne, installation...",
      icon: chauffageIcon,
    },
    {
      title: "Serrurerie",
      description: "Ouverture de porte, changement serrure...",
      icon: serrurerieIcon,
    },
  ];

  return (
    <section className="bg-[#F5F7FA] pt-26 pb-16">
      <div className="max-w-[1500px] mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#07182E]">
          Nos services
        </h2>

        <div className="grid grid-cols-5 gap-10 mt-16 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 text-center min-h-[220px] flex flex-col justify-center hover:shadow-lg transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mx-auto"
              />

              <h3 className="mt-4 text-2xl font-semibold text-[#07182E]">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="w-[260px] border border-orange-500 text-orange-500 py-3 rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
            Voir tous les services
          </button>
        </div>
      </div>
    </section>
  );
}
