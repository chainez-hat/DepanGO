import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/users.js";

export default function Profile() {
  const { data: userResponse } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await getUserById(localStorage.getItem("user_id"));
    },
  });

  const user = userResponse?.data;
  <pre>{JSON.stringify(user, null, 2)}</pre>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E]">Mon profil</h1>

      <p className="text-gray-500 mt-2 mb-12">
        Consultez vos informations personnelles.
      </p>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Nom</p>

            <p className="font-semibold text-[#07182E] mt-1">
              {user?.last_name}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Prénom</p>

            <p className="font-semibold text-[#07182E] mt-1">
              {user?.first_name}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Email</p>

            <p className="font-semibold text-[#07182E] mt-1">{user?.email}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Téléphone</p>

            <p className="font-semibold text-[#07182E] mt-1">{user?.phone}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Rôle</p>

            <p className="font-semibold text-[#07182E] mt-1">{user?.role}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <p className="text-sm text-gray-500">Disponibilité</p>

            <p
              className={`font-semibold mt-1 ${
                user?.available ? "text-green-500" : "text-red-500"
              }`}
            >
              {user?.available ? "Disponible" : "Indisponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
