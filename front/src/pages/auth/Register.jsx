import { Link, useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";

import { signIn } from "../../api/auth.js";
import { useMutation } from "@tanstack/react-query";

import { getServices } from "../../api/services.js";
import { useQuery } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import toast from "react-hot-toast";

import logoDark from "../../assets/logodark.svg";

const registerSchema = z
  .object({
    first_name: z.string().min(2),
    last_name: z.string().min(2),
    email: z.string().email("Veuillez saisir une adresse email valide"),
    phone: z.string().min(10),
    password: z
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirm_password: z.string(),
    role: z.string(),
    service_id: z.string().min(1, "Veuillez choisir une spécialité"),
  })

  .refine((data) => data.password === data.confirm_password, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm_password"],
  });

export function Register() {
  if (localStorage.getItem("email")) {
    return (
      <>
        <h1 className="text-2xl">
          You are already logged in as {localStorage.getItem("email")}
        </h1>
        <Link to="/">Go to Home</Link>
      </>
    );
  }

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      service_id: "",
    },
  });

  const { data: servicesResponse } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await getServices();
    },
  });
  console.log("SERVICES :", servicesResponse);

  const services = servicesResponse?.data || [];

  const registerMutation = useMutation({
    mutationFn: async (data) => {
      return await signIn(data);
    },
    onSuccess: (data, variables, context) => {
      // If you are logged
      //
      toast.success(data.data?.message);
      navigate("/auth/login");
    },
    onError: (error) => {
      //console.log(error.response?.data);
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
      //console.log("ERREUR BACKEND :", error.response?.data);
    },
  });

  function onSubmit(data) {
    //console.log("FORMULAIRE ENVOYÉ", data);
    console.log(JSON.stringify(data, null, 2));
    return registerMutation.mutate(data);
  }
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-6 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <Link to="/">
              <img
                src={logoDark}
                alt="DepanGO"
                className="h-24 md:h-32 lg:h-40"
              />
            </Link>

            <div className="text-sm">
              <span className="text-gray-500">Déjà un compte?</span>

              <Link
                to="/auth/login"
                className="ml-2 text-orange-500 font-medium hover:underline"
              >
                Se connecter
              </Link>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#07182E]">
            Créer un compte
          </h1>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Rejoignez DepanGO et commencez à recevoir des interventions.
          </p>

          <div className="flex justify-center mt-10 mb-20">
            <div className="w-full max-w-md border border-orange-500 rounded-xl py-5 flex items-center justify-center gap-3 text-orange-500 font-semibold text-xl">
              <FaUser />
              <span>Je suis un technicien</span>
            </div>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value="TECHNICIAN" {...register("role")} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>

                <input
                  type="text"
                  placeholder="Votre prénom"
                  {...register("first_name")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>

                <input
                  type="text"
                  placeholder="Votre nom"
                  {...register("last_name")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>

              <input
                type="email"
                placeholder="Entrez votre email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mt-6">
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>

              <input
                type="tel"
                placeholder="Entrez votre numéro de téléphone"
                {...register("phone")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Mot de passe *
                </label>

                <input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  {...register("password")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe *
                </label>

                <input
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  {...register("confirm_password")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                />

                {errors.confirm_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Spécialité principale *
              </label>

              <select
                {...register("service_id")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              >
                <option value="">Sélectionnez votre spécialité</option>

                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            {/*}
            <div className="mt-8 flex items-center gap-3">
              <input type="checkbox" id="terms" />

              <label htmlFor="terms" className="text-gray-600">
                J'accepte les
                <span className="text-orange-500">
                  {" "}
                  conditions d'utilisation{" "}
                </span>
                et la
                <span className="text-orange-500">
                  {" "}
                  politique de confidentialité
                </span>
              </label>
            </div>*/}
            <button
              type="submit"
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
            >
              S'inscrire
            </button>

            <div className="text-center mt-8">
              <span className="text-gray-500">Vous avez déjà un compte ?</span>

              <Link
                to="/auth/login"
                className="ml-2 text-orange-500 font-medium hover:underline"
              >
                Se connecter
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
