import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../api/requests.js";

export default function Requests() {
  // useQuery pour récupérer les demandes (charger les demandes disponibles pour le technicien)
  const { data: requestsResponse } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests();
    },
  });

  const requests = requestsResponse?.data || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Demandes disponibles</h1>

      <p className="text-gray-500 mt-2 mb-12">
        Consultez et acceptez les demandes des clients.
      </p>

      {/* <pre>{JSON.stringify(requests, null, 2)}</pre> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#07182E]">
                {request.Service?.name}
              </h2>

              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                En attente
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
