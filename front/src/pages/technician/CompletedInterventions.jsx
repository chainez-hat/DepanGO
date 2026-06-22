import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../api/requests.js";

export default function CompletedInterventions() {
  const { data: requestsResponse } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests();
    },
  });

  const requests = requestsResponse?.data || [];

  const interventions = requests.filter(
    (request) =>
      request.status_request === "confirmee" &&
      request.technician_id === Number(localStorage.getItem("user_id")),
  );

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-[#07182E]">
        Interventions terminées
      </h1>

      <p className="text-gray-500 mt-2 mb-12">
        Retrouvez l'historique de toutes vos interventions terminées.
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
                Terminée
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
          </div>
        ))}
      </div>
    </div>
  );
}
