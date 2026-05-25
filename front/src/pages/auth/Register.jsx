import { Link, useNavigate } from "react-router";

import { signIn } from "../../api/auth.js";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import logoDark from "../../assets/logodark.svg";

const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export function Register() {
  if (localStorage.getItem("username")) {
    return (
      <>
        <h1 className="text-2xl">
          You are already logged in as {localStorage.getItem("username")}
        </h1>
        <Link to="/">Go to Home</Link>
      </>
    );
  }

  let navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: async (data) => {
      return await signIn(data);
    },
    onSuccess: (data, variables, context) => {
      // If you are logged
      //
      alert(data.data?.message);
      navigate("/auth/login");
    },
  });

  function onSubmit(data) {
    return registerMutation.mutate(data);
  }
  return (
    <>
      
  <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6 py-20">
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-12">
      <div className="flex items-center justify-between mb-8">
  
  <img
    src={logoDark}
    alt="DepanGO"
    className="h-40"
  />

  <div className="text-sm">
    <span className="text-gray-500">
      Déjà un compte? 
    </span>

    <Link
      to="/auth/login"
      className="ml-2 text-orange-500 font-medium hover:underline"
    >
      Se connecter
    </Link>
  </div>

</div>

      <h1 className="text-4xl font-bold text-center text-[#07182E]">
        Créer un compte
      </h1>

      <p className="text-center text-gray-500 mt-4 text-sm">
        Rejoignez DepanGO et commencez à recevoir des interventions.
      </p>
    </div>
  </div>

    </>
  );
}
