import { useQuery } from "@tanstack/react-query";
import { getProfile, getProfileServices } from "../../api/users.js";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();

  // Récupérer le profil du technicien connecté
  const {
    data: userResponse,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await getProfile();
    },
  });

  // Récupérer les spécialités du technicien connecté
  const { data: servicesResponse } = useQuery({
    queryKey: ["profile-services"],
    queryFn: async () => {
      return await getProfileServices();
    },
  });

  // Afficher un message pendant le chargement du profil
  if (isLoading) {
    return <h1>Chargement...</h1>;
  }

  // Afficher un message en cas d'erreur
  if (error) {
    return <h1>Erreur lors du chargement du profil</h1>;
  }

  // Données du profil
  const user = userResponse?.data;

  // Liste des spécialités du technicien
  const services = servicesResponse?.data || [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E]">Mon profil</h1>

      <p className="text-gray-500 mt-2 mb-12">
        Consultez vos informations personnelles.
      </p>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-12 mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Prénom
            </label>

            <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
              {user?.first_name}
            </div>
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>

            <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
              {user?.last_name}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
            {user?.email}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>

          <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
            {user?.phone}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Rôle
          </label>

          <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
            {user?.role}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Disponibilité
          </label>

          <div
            className={`w-full border rounded-xl px-4 py-3 text-left font-medium ${
              user?.available
                ? "border-green-300 bg-green-50 text-green-600"
                : "border-red-300 bg-red-50 text-red-600"
            }`}
          >
            {user?.available ? "Disponible" : "Indisponible"}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Mes spécialités
          </label>

          <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
            {services.length > 0 ? (
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.id}>• {service.name}</li>
                ))}
              </ul>
            ) : (
              "Aucune spécialité"
            )}
          </div>
        </div>

        <button
          onClick={() => navigate("/technician/profile/edit")}
          className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
        >
          Modifier mon profil
        </button>
      </div>
    </div>
  );
}
