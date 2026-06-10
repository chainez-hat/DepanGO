export default function Subscription() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E] text-center">
        Mon abonnement
      </h1>

      <p className="text-gray-500 mt-2 mb-12 text-center">
        Gérez votre abonnement DepanGO.
      </p>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#07182E]">
              Abonnement Mensuel
            </h2>

            <p className="text-gray-500 mt-2">
              Recevez des demandes de dépannage en illimité.
            </p>
          </div>

          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Inactif
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500 text-center">Date de début</p>

            <p className="font-semibold text-[#07182E] mt-1 text-center">—</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500 text-center">Date de fin</p>

            <p className="font-semibold text-[#07182E] mt-1 text-center">—</p>
          </div>
        </div>

        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
          <p className="text-[#07182E] font-medium">
            Votre abonnement est actuellement inactif.
          </p>

          <p className="text-gray-500 mt-2">
            Activez votre abonnement pour recevoir et accepter des demandes de
            dépannage.
          </p>
        </div>

        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition">
          Souscrire maintenant
        </button>
      </div>
    </div>
  );
}
