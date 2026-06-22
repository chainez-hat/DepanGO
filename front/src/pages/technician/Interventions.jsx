import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getRequests,
  cancelRequest,
  completeRequest,
} from "../../api/requests.js";

export default function Interventions() {
  const queryClient = useQueryClient();

  // charger les demandes disponibles pour le technicien
  const { data: requestsResponse } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests();
    },
  });

  const requests = requestsResponse?.data || [];

  // Filtrer les demandes pour n'afficher que celles qui sont acceptées et assignées au technicien connecté
  const interventions = requests.filter(
    (request) =>
      request.status_request === "acceptee" &&
      request.technician_id === Number(localStorage.getItem("user_id")),
  );

  const cancelRequestMutation = useMutation({
    mutationFn: async (requestId) => {
      return await cancelRequest(requestId, {
        status_request: "en_attente",
        technician_id: null,
        acceptance_date: null,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });

      toast.success("Intervention annulée");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
    },
  });

  const completeRequestMutation = useMutation({
    mutationFn: async (requestId) => {
      return await completeRequest(requestId, {
        status_request: "confirmee",
        confirmation_date: new Date(),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });

      toast.success("Intervention terminée");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
    },
  });

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-[#07182E]">
        Mes interventions
      </h1>

      <p className="text-gray-500 mt-2 mb-12">
        Retrouvez toutes les demandes que vous avez acceptées.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interventions.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <h2 className="text-2xl font-bold text-[#07182E]">
                {request.Service?.name}
              </h2>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                Acceptée
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

            <div className="mt-4 bg-gray-50 p-4 rounded-2xl min-h-[140px] md:min-h-[180px]">
              <p className="text-xs text-gray-500 mb-2">Description</p>

              <p className="font-semibold text-[#07182E]">
                {request.description}
              </p>
            </div>

            {/* buttons pour terminer ou annuler l'intervention*/}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => completeRequestMutation.mutate(request.id)}
                className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition"
              >
                Terminer l'intervention
              </button>

              <button
                type="button"
                onClick={() => cancelRequestMutation.mutate(request.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition"
              >
                Annuler l'intervention
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
