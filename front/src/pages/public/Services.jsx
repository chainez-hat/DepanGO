import { Link } from "react-router";

import electriciteIcon from "../../assets/electricite.svg";
import internetIcon from "../../assets/internet.svg";
import plomberieIcon from "../../assets/plombrie.svg";
import chauffageIcon from "../../assets/chauffage.svg";
import serrurerieIcon from "../../assets/serrurerie.svg";

import EmergencyCTA from "../../components/EmergencyCTA";
import nikeIcon from "../../assets/nike.svg";
import okIcon from "../../assets/ok.svg";

export default function Services() {
  const services = [
    {
      title: "Électricité",
      icon: electriciteIcon,
      description:
        "Installation, réparation et mise aux normes de vos équipements électriques.",
    },
    {
      title: "Plomberie",
      icon: plomberieIcon,
      description:
        "Fuite, débouchage, chauffe-eau et tous travaux de plomberie.",
    },
    {
      title: "Serrurerie",
      icon: serrurerieIcon,
      description: "Ouverture de porte, changement de serrure et sécurisation.",
    },
    {
      title: "Chauffage",
      icon: chauffageIcon,
      description:
        "Entretien, dépannage et installation de systèmes de chauffage.",
    },
    {
      title: "Internet",
      icon: internetIcon,
      description: "Connexion internet, réseau Wi-Fi et dépannage box.",
    },
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-[4px] text-4xl">
            Nos services
          </span>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07182E] mt-10 lg:mt-16 leading-tight">
            Des solutions de dépannage
            <br />
            pour tous vos besoins
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Des artisans qualifiés interviennent rapidement chez vous, 7j/7 et
            24h/24 pour tous vos dépannages.
          </p>
        </div>
      </section>

      {/* Cartes */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 text-center"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to="/request"
                  className="inline-block mt-6 text-orange-500 font-medium hover:text-orange-600"
                >
                  Créer une demande
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07182E]">
              Pourquoi choisir DepanGO ?
            </h2>

            <p className="text-center text-gray-600 mt-6 text-xl">
              Une plateforme pensée pour vous garantir une intervention rapide
              et fiable.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#07182E] mt-6">
              Dépannage rapide en moins de{" "}
              <span className="text-orange-500">2h</span>
            </h3>

            <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
              Trouvez un technicien qualifié près de chez vous en quelques clics
              et bénéficiez d'une intervention rapide, fiable et sécurisée pour
              tous vos besoins de dépannage.
            </p>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-16">
            <div className="bg-[#F5F7FA] rounded-3xl p-6 lg:p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img
                  src={electriciteIcon}
                  alt="Intervention rapide"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Intervention rapide
              </h3>

              <p className="text-gray-600 mt-4">
                Trouvez rapidement un technicien disponible près de chez vous.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-3xl p-6 lg:p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img
                  src={nikeIcon}
                  alt="Techniciens qualifiés"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Techniciens qualifiés
              </h3>

              <p className="text-gray-600 mt-4">
                Tous nos artisans sont sélectionnés et vérifiés.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img src={okIcon} alt="Service fiable" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Service fiable
              </h3>

              <p className="text-gray-600 mt-4">
                Une expérience simple, sécurisée et transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
}
