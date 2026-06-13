import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getProfile } from "../../api/users.js";
import { updateProfile } from "../../api/users.js";

export default function EditProfile() {
  // Récupérer les données du profil de l'utilisateur pour pré-remplir le formulaire
  const { data: userResponse } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await getProfile();
    },
  });

  // Pré-remplir le formulaire avec les données du profil de l'utilisateur
  const user = userResponse?.data;

  const { register, handleSubmit } = useForm({
    values: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      phone: user?.phone || "",
    },
  });

  // useMutation pour mettre à jour le profil de l'utilisateur
  const navigate = useNavigate();

  const updateProfileMutation = useMutation({
    mutationFn: async (data) => {
      return await updateProfile(data);
    },

    // Invalider la requête du profil après la mise à jour pour récupérer les nouvelles données
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

      alert("Profil mis à jour");
      navigate("/technician/profile");
    },

    onError: (error) => {
      alert(JSON.stringify(error.response?.data));
    },
  });

  // useQueryClient pour invalider la requête du profil après la mise à jour
  const queryClient = useQueryClient();

  // Fonction pour gérer la soumission du formulaire
  function onSubmit(data) {
    updateProfileMutation.mutate(data);
  }

  return (
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-12 mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#07182E]">
        Modifier mon profil
      </h1>

      <p className="text-center text-gray-500 mt-4 mb-12">
        Modifiez vos informations personnelles.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
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
