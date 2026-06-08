import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../api/requests.js";

export default function Interventions() {
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
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E]">Mes interventions</h1>

      <p className="text-gray-500 mt-2 mb-12">
        Retrouvez toutes les demandes que vous avez acceptées.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {interventions.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center">
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

            <div className="mt-4 bg-gray-50 p-4 rounded-2xl min-h-[180px]">
              <p className="text-xs text-gray-500 mb-2">Description</p>

              <p className="font-semibold text-[#07182E]">
                {request.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
