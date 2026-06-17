import formulaireIcon from "../assets/formulaire.svg";
import technicienIcon from "../assets/avec casquette.svg";
import paiementIcon from "../assets/creditcarte.svg";
import validationIcon from "../assets/nike2.svg";

export default function WowItWork() {
  const steps = [
    {
      title: "Envoyer la demande",
      description: "Indiquez le type de dépannage et votre adresse",
      icon: formulaireIcon,
    },
    {
      title: "Un technicien accepte",
      description: "Un technicien qualifié accepte votre demande",
      icon: technicienIcon,
    },
    {
      title: "Payer un acompte",
      description: "Validez votre demande avec un acompte de 10€",
      icon: paiementIcon,
    },
    {
      title: "Intervention rapide",
      description: "Le technicien intervient en moins de 2h",
      icon: validationIcon,
    },
  ];

  return (
    <section className="bg-[#ECEFF3] py-16">
      <div className="max-w-[1500px] mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#07182E]">
          Comment ça marche ?
        </h2>

        <div className="grid grid-cols-4 gap-10 mt-14">
          {steps.map((step) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <img src={step.icon} alt={step.title} className="w-12 h-12" />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#07182E]">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
