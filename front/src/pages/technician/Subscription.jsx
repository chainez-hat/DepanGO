import { useQuery } from "@tanstack/react-query";
import { getSubscriptions } from "../../api/subscriptions.js";

export default function Subscription() {
  // Charger les abonnements pour le technicien connecté
  const { data: subscriptionsResponse } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      return await getSubscriptions();
    },
  });

  const subscriptions = subscriptionsResponse?.data || [];

  const subscription = subscriptions.find(
    (subscription) =>
      subscription.user_id === Number(localStorage.getItem("user_id")),
  );

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-[#07182E] text-center">
        Mon abonnement
      </h1>

      <p className="text-gray-500 mt-2 mb-12 text-center">
        Gérez votre abonnement DepanGO.
      </p>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#07182E]">
              Abonnement Mensuel
            </h2>

            <p className="text-gray-500 mt-2">
              Recevez des demandes de dépannage en illimité.
            </p>
          </div>
          {/* Afficher le statut de l'abonnement*/}
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              subscription?.status === "active"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {subscription?.status === "active" ? "Actif" : "Inactif"}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500 text-center">Date de début</p>

            <p className="font-semibold text-[#07182E] mt-1 text-center">
              {subscription?.start_date
                ? new Date(subscription.start_date).toLocaleDateString("fr-FR")
                : "—"}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500 text-center">Date de fin</p>

            <p className="font-semibold text-[#07182E] mt-1 text-center">
              {subscription?.end_date
                ? new Date(subscription.end_date).toLocaleDateString("fr-FR")
                : "—"}
            </p>
          </div>
        </div>

        {/* Afficher un message d'information sur le statut de l'abonnement*/}
        <div
          className={`mt-8 rounded-2xl p-6 text-center border ${
            subscription?.status === "active"
              ? "bg-green-50 border-green-200"
              : "bg-orange-50 border-orange-200"
          }`}
        >
          <p className="text-[#07182E] font-medium">
            {subscription?.status === "active"
              ? "Votre abonnement est actuellement actif."
              : "Votre abonnement est actuellement inactif."}
          </p>

          <p className="text-gray-500 mt-2">
            {subscription?.status === "active"
              ? "Vous pouvez recevoir et accepter des demandes de dépannage."
              : "Activez votre abonnement pour recevoir et accepter des demandes de dépannage."}
          </p>
        </div>
        {/* Afficher un bouton pour souscrire si l'abonnement n'est pas actif*/}
        {subscription?.status !== "active" && (
          <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition">
            Souscrire maintenant
          </button>
        )}
      </div>
    </div>
  );
}
