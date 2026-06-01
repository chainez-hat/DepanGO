import {
  FaClipboardList,
  FaTools,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

export default function TechnicianDashboard() {
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

              <h2 className="text-3xl font-bold text-[#07182E]">0</h2>
            </div>
          </div>
        </div>

        {/* Interventions confirmées */}
        <div className="bg-white rounded-3xl p-8 min-h-[220px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FaTools className="text-blue-500 text-xl" />
            </div>

            <div>
              <p className="text-[#07182E] font-bold">
                Interventions confirmées
              </p>

              <h2 className="text-3xl font-bold text-[#07182E]">0</h2>
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
              <p className="text-[#07182E] font-bold">Disponibilité</p>

              <h2 className="text-3xl font-bold text-green-500">Disponible</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
