import {
  FaClipboardList,
  FaTools,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../api/requests.js";

export default function TechnicianDashboard() {
  // charger les demandes disponibles pour le technicien
  const { data: requestsResponse } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests();
    },
  });

  const requests = requestsResponse?.data || [];

  // Filtrer les demandes pour n'afficher que celles qui sont en attente, acceptées et terminées pour le technicien connecté
  const availableRequests = requests.filter(
    (request) => request.status_request === "en_attente",
  );

  const activeInterventions = requests.filter(
    (request) =>
      request.status_request === "acceptee" &&
      request.technician_id === Number(localStorage.getItem("user_id")),
  );

  const completedInterventions = requests.filter(
    (request) =>
      request.status_request === "confirmee" &&
      request.technician_id === Number(localStorage.getItem("user_id")),
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E]">
        Bonjour {localStorage.getItem("first_name")} 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Bienvenue sur votre espace technicien.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* Demandes disponibles */}
        <div className="bg-white rounded-3xl p-8 min-h-[220px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <FaClipboardList className="text-orange-500 text-xl" />
            </div>

            <div>
              <p className="text-[#07182E] font-bold">Demandes disponibles</p>

              <h2 className="text-3xl font-bold text-[#07182E]">
                {availableRequests.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Interventions acceptées */}
        <div className="bg-white rounded-3xl p-8 min-h-[220px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FaTools className="text-blue-500 text-xl" />
            </div>

            <div>
              <p className="text-[#07182E] font-bold">
                Interventions acceptées
              </p>

              <h2 className="text-3xl font-bold text-[#07182E]">
                {activeInterventions.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Mon abonnement */}
        <div className="bg-white rounded-3xl p-8 min-h-[220px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <FaCreditCard className="text-orange-500 text-xl" />
            </div>

            <div>
              <p className="text-[#07182E] font-bold">Mon abonnement</p>

              <h2 className="text-3xl font-bold text-green-500">Actif</h2>
            </div>
          </div>
        </div>

        {/* Disponibilité */}
        <div className="bg-white rounded-3xl p-8 min-h-[220px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <FaCheckCircle className="text-green-500 text-xl" />
            </div>

            <div>
              <p className="text-[#07182E] font-bold">
                Interventions terminées
              </p>

              <h2 className="text-3xl font-bold text-[#07182E]">
                {completedInterventions.length}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
