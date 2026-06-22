import nikeIcon from "../../assets/nike.svg";
import okIcon from "../../assets/ok.svg";
import electriciteIcon from "../../assets/electricite.svg";

export default function BecomeTechnician() {
  const steps = [
    {
      number: "01",
      title: "Créez votre compte professionnel",
      description:
        "Inscrivez-vous gratuitement en renseignant vos informations personnelles ainsi que votre spécialité principale.",
    },
    {
      number: "02",
      title: "Activez votre abonnement",
      description:
        "Activez votre abonnement DepanGO afin d'accéder aux demandes de dépannage disponibles dans votre domaine d'expertise.",
    },
    {
      number: "03",
      title: "Recevez des demandes de clients",
      description:
        "Consultez les demandes correspondant à votre spécialité et sélectionnez celles qui vous intéressent.",
    },
    {
      number: "04",
      title: "Acceptez une intervention",
      description:
        "Lorsqu'une demande correspond à votre disponibilité, acceptez-la en un clic pour prendre en charge le client.",
    },
    {
      number: "05",
      title: "Contactez directement le client",
      description:
        "Accédez immédiatement aux coordonnées du client afin d'échanger avec lui et d'organiser l'intervention.",
    },
    {
      number: "06",
      title: "Développez votre activité",
      description:
        "Réalisez vos interventions, gagnez de nouveaux clients et recevez régulièrement de nouvelles opportunités grâce à DepanGO.",
    },
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-[4px] text-2xl md:text-3xl lg:text-4xl">
            Devenir artisan
          </span>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07182E] mt-10 lg:mt-16 leading-tight">
            Développez votre activité
            <br />
            avec DepanGO
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Rejoignez notre réseau de professionnels qualifiés et recevez
            régulièrement des demandes de dépannage dans votre domaine
            d'expertise.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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

      {/* Pourquoi rejoindre DepanGO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07182E]">
              Pourquoi rejoindre DepanGO ?
            </h2>

            <p className="text-center text-gray-600 mt-6 text-lg md:text-xl">
              Une solution simple pour développer votre clientèle et remplir
              votre planning.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#07182E] mt-6">
              Recevez de nouvelles demandes chaque jour
            </h3>

            <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Accédez à des demandes de dépannage qualifiées, choisissez les
              interventions qui vous intéressent et développez votre activité à
              votre rythme.
            </p>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-16">
            <div className="bg-[#F5F7FA] rounded-3xl p-6 lg:p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img
                  src={electriciteIcon}
                  alt="Plus de clients"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Plus de clients
              </h3>

              <p className="text-gray-600 mt-4">
                Recevez régulièrement de nouvelles opportunités dans votre
                secteur.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-3xl p-6 lg:p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img src={nikeIcon} alt="Liberté" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Liberté de choix
              </h3>

              <p className="text-gray-600 mt-4">
                Choisissez uniquement les demandes qui correspondent à vos
                disponibilités.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img src={okIcon} alt="Contact direct" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Contact direct
              </h3>

              <p className="text-gray-600 mt-4">
                Échangez directement avec vos clients pour organiser vos
                interventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
