import electriciteIcon from "../../assets/electricite.svg";
import nikeIcon from "../../assets/nike.svg";
import okIcon from "../../assets/ok.svg";

import EmergencyCTA from "../../components/EmergencyCTA";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choisissez un service",
      description:
        "Sélectionnez le type de dépannage dont vous avez besoin parmi les différentes catégories disponibles : électricité, plomberie, climatisation, électroménager, etc.",
    },
    {
      number: "02",
      title: "Indiquez l'adresse de l'intervention",
      description:
        "Renseignez l'adresse où le dépannage doit être réalisé afin que le technicien puisse localiser précisément votre intervention.",
    },
    {
      number: "03",
      title: "Décrivez votre problème et renseignez vos coordonnées",
      description:
        "Expliquez la nature du problème rencontré puis indiquez vos informations de contact (nom, prénom et numéro de téléphone).",
    },
    {
      number: "04",
      title: "Un technicien accepte votre demande",
      description:
        "Votre demande est transmise aux techniciens qualifiés. Dès qu'un professionnel accepte l'intervention, votre demande est prise en charge.",
    },
    {
      number: "05",
      title: "Recevez les coordonnées du technicien",
      description:
        "Les coordonnées du technicien ayant accepté votre demande vous sont envoyées par e-mail afin que vous puissiez échanger directement avec lui et organiser l'intervention.",
    },
    {
      number: "06",
      title: "Intervention réalisée",
      description:
        "Le technicien intervient à votre domicile ou sur le lieu indiqué pour résoudre votre problème dans les meilleurs délais.",
    },
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-[4px] text-2xl md:text-3xl lg:text-4xl">
            Comment ça marche
          </span>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07182E] mt-10 lg:mt-16 leading-tight">
            Votre dépannage
            <br />
            en 6 étapes simples
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Déposez votre demande en quelques minutes et soyez mis en relation
            avec un technicien qualifié pour intervenir rapidement à l'adresse
            de votre choix.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm text-center"
              >
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {step.number}
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#07182E] mt-6 lg:mt-8">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi utiliser DepanGO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07182E]">
              Pourquoi utiliser DepanGO ?
            </h2>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#07182E] mt-6">
              Dépannage rapide en moins de{" "}
              <span className="text-orange-500">2h</span>
            </h3>

            <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Une plateforme simple et efficace pour trouver rapidement un
              technicien qualifié et obtenir une intervention fiable.
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

            <div className="bg-[#F5F7FA] rounded-3xl p-10 text-center">
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
