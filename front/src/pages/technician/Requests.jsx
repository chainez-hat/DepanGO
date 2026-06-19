import { Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRequests, acceptRequest } from "../../api/requests.js";

import toast from "react-hot-toast";

import { getSubscriptions } from "../../api/subscriptions.js";

export default function Requests() {
  const queryClient = useQueryClient();

  // useQuery pour récupérer les demandes (charger les demandes disponibles pour le technicien)
  const { data: requestsResponse } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests();
    },
  });

  const requests = requestsResponse?.data || [];

  // useQuery pour récupérer l'abonnement du technicien
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

  // Filtrer les demandes pour n'afficher que celles qui sont en attente
  const availableRequests = requests.filter(
    (request) => request.status_request === "en_attente",
  );

  // useMutation pour accepter une demande avec le bouton "Accepter
  const acceptRequestMutation = useMutation({
    mutationFn: async (requestId) => {
      return await acceptRequest(requestId, {
        status_request: "acceptee",
        technician_id: Number(localStorage.getItem("user_id")),
        acceptance_date: new Date(),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });

      toast.success("Demande acceptée");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
    },
  });

  // Si l'abonnement du technicien n'est pas actif, afficher un message pour l'informer et masquer les demandes disponibles
  if (subscription?.status !== "active") {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl font-bold text-[#07182E]">
            Accès aux demandes indisponible
          </h1>

          <p className="text-gray-500 mt-4">
            Votre abonnement est actuellement inactif.
          </p>

          <p className="text-gray-500 mt-2">
            Activez votre abonnement pour consulter et accepter les demandes des
            clients.
          </p>

          <Link
            to="/technician/subscription"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Voir mon abonnement
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Demandes disponibles</h1>

      <p className="text-gray-500 mt-2 mb-12">
        Consultez et acceptez les demandes des clients.
      </p>

      {/* <pre>{JSON.stringify(requests, null, 2)}</pre> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {availableRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#07182E]">
                {request.Service?.name}
              </h2>
              {/* Récupérer le statut de la demande et l'afficher avec une couleur différente selon le statut (en attente, acceptée, refusée) */}
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  request.status_request === "en_attente"
                    ? "bg-yellow-100 text-yellow-600"
                    : request.status_request === "acceptee"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {request.status_request}
              </span>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Client</p>

                <p className="font-semibold text-[#07182E]">
                  {request.first_name_client} {request.last_name_client}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Téléphone</p>

                <p className="font-semibold text-[#07182E]">
                  {request.phone_client}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-2xl">
              <p className="text-xs text-gray-500">Adresse</p>

              <p className="font-semibold text-[#07182E]">
                {request.adress_client}
              </p>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-2xl min-h-[180px]">
              <p className="text-xs text-gray-500 mb-2">Description</p>

              <p className="font-semibold text-[#07182E]">
                {request.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => acceptRequestMutation.mutate(request.id)}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition"
            >
              Accepter la demande
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
