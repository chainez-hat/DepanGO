import electriciteIcon from "../../assets/electricite.svg";
import nikeIcon from "../../assets/nike.svg";
import okIcon from "../../assets/ok.svg";

export default function About() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-[4px] text-4xl">
            À propos
          </span>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <h1 className="text-6xl font-bold text-[#07182E] mt-16 leading-tight">
            DepanGO simplifie
            <br />
            le dépannage à domicile
          </h1>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Une plateforme qui facilite la mise en relation entre particuliers
            et artisans qualifiés pour répondre rapidement aux besoins de
            dépannage du quotidien.
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <h2 className="text-4xl font-bold text-[#07182E] text-center">
              Notre mission
            </h2>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

            <div className="mt-10 text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                DepanGO est une plateforme de mise en relation entre
                particuliers et artisans qualifiés dans les domaines du
                dépannage à domicile.
              </p>

              <p>
                Notre mission est de simplifier la recherche d'un professionnel
                fiable en permettant aux clients de déposer rapidement une
                demande d'intervention et d'être mis en contact avec un
                technicien compétent.
              </p>

              <p>
                Que ce soit pour un problème d'électricité, de plomberie, de
                climatisation ou d'électroménager, DepanGO facilite la prise de
                contact et accélère la mise en relation entre les deux parties.
              </p>

              <p>
                Pour les artisans, DepanGO représente une opportunité de
                développer leur activité en recevant régulièrement des demandes
                correspondant à leur spécialité.
              </p>

              <p>
                Notre objectif est de proposer une solution simple, rapide et
                efficace pour répondre aux besoins de dépannage du quotidien
                tout en valorisant le savoir-faire des professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#07182E]">Nos valeurs</h2>

            <p className="text-gray-600 mt-6 text-xl">
              Les principes qui guident notre plateforme au quotidien.
            </p>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-16">
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div className="w-20 h-20 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto">
                <img
                  src={electriciteIcon}
                  alt="Rapidité"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Rapidité
              </h3>

              <p className="text-gray-600 mt-4">
                Trouvez rapidement un professionnel disponible pour intervenir
                selon vos besoins.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div className="w-20 h-20 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto">
                <img src={nikeIcon} alt="Fiabilité" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Fiabilité
              </h3>

              <p className="text-gray-600 mt-4">
                Des artisans qualifiés et spécialisés dans leur domaine pour des
                interventions en toute confiance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div className="w-20 h-20 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto">
                <img src={okIcon} alt="Simplicité" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-[#07182E] mt-6">
                Simplicité
              </h3>

              <p className="text-gray-600 mt-4">
                Une mise en relation directe entre clients et techniciens, sans
                démarches compliquées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir DepanGO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#07182E]">
              Pourquoi choisir DepanGO ?
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-[#F5F7FA] rounded-3xl p-10">
              <h3 className="text-3xl font-semibold text-[#07182E] mb-6">
                Pour les particuliers
              </h3>

              <ul className="space-y-4 text-gray-600 text-lg">
                <li>✓ Déposer une demande en quelques minutes.</li>
                <li>✓ Trouver rapidement un technicien qualifié.</li>
                <li>✓ Recevoir les coordonnées du professionnel.</li>
                <li>✓ Organiser facilement l'intervention.</li>
              </ul>
            </div>

            <div className="bg-[#F5F7FA] rounded-3xl p-10">
              <h3 className="text-3xl font-semibold text-[#07182E] mb-6">
                Pour les artisans
              </h3>

              <ul className="space-y-4 text-gray-600 text-lg">
                <li>✓ Recevoir régulièrement de nouvelles demandes.</li>
                <li>✓ Développer sa clientèle.</li>
                <li>✓ Choisir les interventions qui l'intéressent.</li>
                <li>✓ Gérer son activité plus efficacement.</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-20">
            <p className="text-xl text-gray-600 leading-relaxed">
              Chez DepanGO, nous croyons qu'un dépannage ne devrait jamais être
              compliqué. Notre ambition est de proposer une solution simple,
              rapide et efficace qui rapproche les particuliers des
              professionnels qualifiés et facilite les interventions du
              quotidien.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
