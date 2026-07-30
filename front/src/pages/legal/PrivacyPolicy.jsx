export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Objet",
      content: (
        <p className="text-gray-600 leading-8">
          La présente politique de confidentialité explique comment DepanGO
          collecte, utilise et protège les données personnelles des
          utilisateurs, conformément au Règlement Général sur la Protection des
          Données (RGPD).
        </p>
      ),
    },
    {
      title: "2. Données collectées",
      content: (
        <>
          <p className="text-gray-600 leading-8 mb-5">
            Lors de l'utilisation de DepanGO, les informations suivantes peuvent
            être collectées :
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-8 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse d'intervention</li>
            <li>Description de la demande</li>
            <li>Informations liées au compte technicien</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Utilisation des données",
      content: (
        <>
          <p className="text-gray-600 leading-8 mb-5">
            Les données collectées sont utilisées uniquement afin de :
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-8 space-y-2">
            <li>Créer et gérer un compte technicien.</li>
            <li>Traiter les demandes d'intervention.</li>
            <li>Mettre en relation les clients et les techniciens.</li>
            <li>Envoyer les notifications liées aux interventions.</li>
            <li>Améliorer les services proposés par DepanGO.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Conservation des données",
      content: (
        <p className="text-gray-600 leading-8">
          Les données personnelles sont conservées uniquement pendant la durée
          nécessaire au fonctionnement de la plateforme et conformément aux
          obligations légales applicables.
        </p>
      ),
    },
    {
      title: "5. Partage des données",
      content: (
        <p className="text-gray-600 leading-8">
          Les données personnelles ne sont ni vendues ni cédées à des tiers.
          Elles sont utilisées uniquement pour permettre la mise en relation
          entre les clients et les techniciens dans le cadre des prestations
          proposées par DepanGO.
        </p>
      ),
    },
    {
      title: "6. Vos droits",
      content: (
        <>
          <p className="text-gray-600 leading-8 mb-5">
            Conformément au RGPD, chaque utilisateur dispose des droits suivants
            :
          </p>

          <ul className="list-disc list-inside text-gray-600 leading-8 space-y-2">
            <li>Droit d'accès à vos données personnelles.</li>
            <li>Droit de rectification des informations inexactes.</li>
            <li>Droit à l'effacement de vos données.</li>
            <li>Droit à la limitation du traitement.</li>
            <li>Droit d'opposition au traitement de vos données.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Sécurité",
      content: (
        <p className="text-gray-600 leading-8">
          DepanGO met en œuvre des mesures techniques et organisationnelles
          destinées à protéger les données personnelles contre tout accès non
          autorisé, toute perte, toute modification ou toute divulgation.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-[4px] text-2xl md:text-3xl lg:text-4xl">
            Politique de confidentialité
          </span>

          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-4"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07182E] mt-10 leading-tight">
            Protection de vos
            <br />
            données personnelles
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-8">
            Chez DepanGO, nous accordons une importance particulière à la
            protection de vos données personnelles. Cette politique explique
            quelles informations sont collectées, comment elles sont utilisées
            et les droits dont vous disposez.
          </p>

          <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-medium mt-8">
            Dernière mise à jour : Juillet 2026
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-[#07182E] mb-6">
                {section.title}
              </h2>

              {section.content}
            </div>
          ))}

          {/* Contact */}
          <div className="bg-[#07182E] rounded-3xl p-6 md:p-8 text-white">
            <h2 className="text-3xl font-bold mb-5">8. Contact</h2>

            <p className="text-gray-300 leading-8">
              Pour toute question concernant cette politique de confidentialité
              ou l'exercice de vos droits relatifs à vos données personnelles,
              vous pouvez nous contacter à l'adresse suivante :
            </p>

            <p className="text-orange-500 text-xl font-semibold mt-6">
              contact@depango.fr
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
