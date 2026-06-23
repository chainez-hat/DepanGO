import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/users.js";

export default function Technicians() {
  const { data: usersResponse, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await getUsers();
    },
  });

  const users = usersResponse?.data || [];

  const technicians = users.filter((user) => user.role === "TECHNICIAN");

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Techniciens</h1>

      <p className="text-gray-500 mb-8">
        Gérez les techniciens inscrits sur la plateforme.
      </p>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Nom</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Téléphone</th>
              <th className="text-left p-4">Disponibilité</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {technicians.map((technician) => (
              <tr key={technician.id} className="border-t">
                <td className="text-left p-4">
                  {technician.first_name} {technician.last_name}
                </td>

                <td className="text-left p-4">{technician.email}</td>

                <td className="text-left p-4">{technician.phone}</td>

                <td className="text-left p-4">
                  <span
                    className={
                      technician.available
                        ? "text-green-600 font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {technician.available ? "Disponible" : "Indisponible"}
                  </span>
                </td>

                <td className="text-left p-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm">
                    Voir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
