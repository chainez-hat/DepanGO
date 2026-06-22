import { Link, useNavigate } from "react-router";

import logoDark from "../../assets/logodark.svg";
import { login } from "../../api/auth.js";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Veuillez saisir une adresse email valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export function Login() {
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

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      return await login(data);
    },
    onSuccess: (response, variables, context) => {
      // If you are logged
      localStorage.setItem("user_id", response.data?.id);
      localStorage.setItem("first_name", response.data?.first_name);
      localStorage.setItem("last_name", response.data?.last_name);
      localStorage.setItem("email", response.data?.email);
      localStorage.setItem("role", response.data?.role);
      localStorage.setItem("token", response.data?.token);

      switch (response.data?.role) {
        case "ADMIN":
          navigate("/admin");
          break;

        case "TECHNICIAN":
          navigate("/technician");
          break;

        default:
          navigate("/");
          break;
      }
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Une erreur est survenue",
      );
    },
  });

  function onSubmit(data) {
    return loginMutation.mutate(data);
  }
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src={logoDark}
                alt="DepanGO"
                className="h-20 md:h-24 lg:h-30"
              />
            </Link>
          </div>

          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#07182E] mt-8">
            Connexion
          </h1>

          <p className="text-center text-gray-500 text-lg mt-3 mb-10">
            Connectez-vous à votre compte pour continuer
          </p>

          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-left text-base font-medium text-[#07182E] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Entrez votre email"
                  {...register("email")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="mt-8">
                <label className="block text-left text-base font-medium text-[#07182E] mb-2">
                  Mot de passe
                </label>

                <input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  {...register("password")}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-orange-500"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6">
                  <label className="flex items-center gap-2 text-gray-600 text-sm">
                    <input type="checkbox" className="accent-orange-500" />
                    Se souvenir de moi
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-orange-500 text-sm hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Se connecter
                </button>

                <div className="text-center mt-8">
                  <span className="text-gray-500">
                    Vous n'avez pas de compte ?
                  </span>

                  <Link
                    to="/auth/register"
                    className="ml-2 text-orange-500 font-medium hover:underline"
                  >
                    Créer un compte
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
