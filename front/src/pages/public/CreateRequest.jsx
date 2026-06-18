import { Link } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import logoDark from "../../assets/logodark.svg";

import { getServices } from "../../api/services.js";
import { createRequest } from "../../api/requests.js";

// Schema de validation avec zod
const requestSchema = z.object({
  first_name_client: z.string().min(2),
  last_name_client: z.string().min(2),
  phone_client: z.string().min(10),
  email_client: z.string().email(),
  adress_client: z.string().min(5),
  description: z.string().min(10),
  service_id: z.string().min(1, "Veuillez choisir un service"),
});

// useForm avec zodResolver
export default function CreateRequest() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      service_id: "",
    },
  });

  // useQuery pour récupérer les services
  const { data: servicesResponse } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await getServices();
    },
  });

  const services = servicesResponse?.data || [];

  // useMutationuseMutation pour créer une demande
  const createRequestMutation = useMutation({
    mutationFn: async (data) => {
      return await createRequest(data);
    },

    onSuccess: (response) => {
      alert(response.data?.message);
      reset();
    },

    onError: (error) => {
      alert(JSON.stringify(error.response?.data));
    },
  });

  // onSubmit
  function onSubmit(data) {
    console.log(data);
    return createRequestMutation.mutate(data);
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-12">
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logoDark} alt="DepanGO" className="h-32 cursor-pointer" />
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center text-[#07182E]">
          Créer une demande
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Décrivez votre besoin et trouvez rapidement un artisan.
        </p>
        {/* Formulaire */}
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>

              <input
                type="text"
                placeholder="Votre prénom"
                {...register("first_name_client")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              {errors.first_name_client && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name_client.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>

              <input
                type="text"
                placeholder="Votre nom"
                {...register("last_name_client")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              {errors.last_name_client && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name_client.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>

            <input
              type="email"
              placeholder="Entrez votre email"
              {...register("email_client")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            {errors.email_client && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email_client.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>

            <input
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              {...register("phone_client")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            {errors.phone_client && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone_client.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Adresse *
            </label>

            <input
              type="text"
              placeholder="Votre adresse"
              {...register("adress_client")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            {errors.adress_client && (
              <p className="text-red-500 text-sm mt-1">
                {errors.adress_client.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Service *
            </label>

            <select
              {...register("service_id")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
            >
              <option value="">Choisissez un service</option>

              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>

            {errors.service_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service_id.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Description du problème *
            </label>

            <textarea
              placeholder="Décrivez votre problème"
              {...register("description")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 h-40 resize-none focus:outline-none focus:border-orange-500"
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={createRequestMutation.isPending}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
          >
            {createRequestMutation.isPending
              ? "Envoi..."
              : "Envoyer la demande"}
          </button>
        </form>
      </div>
    </div>
  );
}
