import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import {
  getProfile,
  updateProfile,
  getProfileServices,
  addProfileService,
  deleteProfileService,
} from "../../api/users.js";
import { getServices } from "../../api/services.js";

export default function EditProfile() {
  // Récupérer les données du profil de l'utilisateur pour pré-remplir le formulaire
  const { data: userResponse } = useQuery({
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

  // Récupérer la liste de tous les services
  const { data: allServicesResponse } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await getServices();
    },
  });

  // Pré-remplir le formulaire avec les données du profil de l'utilisateur
  const user = userResponse?.data;

  // Liste des spécialités du technicien
  const services = servicesResponse?.data || [];

  // Liste de tous les services disponibles
  const allServices = allServicesResponse?.data || [];

  const { register, handleSubmit, watch } = useForm({
    values: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      phone: user?.phone || "",
      available: user?.available ?? false,
    },
  });
  // Service sélectionné dans la liste
  const selectedService = watch("new_service");

  // Ajouter une spécialité sélectionnée
  function handleAddService() {
    if (!selectedService) {
      return;
    }

    addProfileServiceMutation.mutate(Number(selectedService));
  }

  // useMutation pour mettre à jour le profil de l'utilisateur
  const navigate = useNavigate();

  // useQueryClient pour invalider la requête du profil après la mise à jour
  const queryClient = useQueryClient();

  // Invalider la requête du profil après la mise à jour pour récupérer les nouvelles données
  const updateProfileMutation = useMutation({
    mutationFn: async (data) => {
      return await updateProfile(data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

      toast.success("Profil mis à jour");
      navigate("/technician/profile");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
    },
  });

  // Ajouter une spécialité au technicien
  const addProfileServiceMutation = useMutation({
    mutationFn: async (service_id) => {
      return await addProfileService(service_id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile-services"],
      });
    },
  });

  // Supprimer une spécialité du technicien
  const deleteProfileServiceMutation = useMutation({
    mutationFn: async (id) => {
      return await deleteProfileService(id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile-services"],
      });
    },
  });

  // Fonction pour gérer la soumission du formulaire
  function onSubmit(data) {
    updateProfileMutation.mutate(data);
  }

  return (
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-6 md:p-8 lg:p-12 mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#07182E]">
        Modifier mon profil
      </h1>

      <p className="text-center text-gray-500 mt-4 mb-12">
        Modifiez vos informations personnelles.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Prénom
            </label>

            <input
              type="text"
              {...register("first_name")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>

            <input
              type="text"
              {...register("last_name")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>

          <input
            type="text"
            {...register("phone")}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
          />
        </div>
        {/* Disponibilité */}
        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Disponibilité
          </label>

          <select
            {...register("available")}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
          >
            <option value="true">Disponible</option>
            <option value="false">Indisponible</option>
          </select>
        </div>
        {/* Mes spécialités */}
        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Mes spécialités
          </label>

          <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-left text-gray-700">
            {services.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-2 rounded-full break-all"
                  >
                    <span>{service.name}</span>

                    <button
                      type="button"
                      onClick={() =>
                        deleteProfileServiceMutation.mutate(service.id)
                      }
                      className="font-bold hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              "Aucune spécialité"
            )}
          </div>
        </div>

        {/* Ajouter une spécialité */}
        <div className="mt-6">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Ajouter une spécialité
          </label>

          <select
            {...register("new_service")}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
          >
            <option value="">Sélectionnez une spécialité</option>

            {allServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleAddService}
            className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-medium transition"
          >
            Ajouter la spécialité
          </button>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}
