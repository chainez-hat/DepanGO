import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSubscriptions,
  createSubscription,
  updateSubscription,
} from "../../api/subscriptions.js";

import toast from "react-hot-toast";

export default function Subscriptions() {
  const queryClient = useQueryClient();

  const { data: usersResponse, isLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      return await getSubscriptions();
    },
  });

  const technicians = usersResponse?.data || [];

  const createSubscriptionMutation = useMutation({
    mutationFn: async (data) => {
      return await createSubscription(data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subscriptions"],
      });

      toast.success("Abonnement créé");
    },

    onError: () => {
      toast.error("Une erreur est survenue");
    },
  });

  const updateSubscriptionMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      return await updateSubscription(id, data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subscriptions"],
      });

      toast.success("Abonnement mis à jour");
    },

    onError: () => {
      toast.error("Une erreur est survenue");
    },
  });

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Abonnements</h1>

      <p className="text-gray-500 mb-8">
        Gérez les abonnements des techniciens.
      </p>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Technicien</th>
              <th className="text-left p-4">Début</th>
              <th className="text-left p-4">Fin</th>
              <th className="text-left p-4">Statut</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {technicians.map((technician) => {
              const subscription =
                technician.Subscriptions && technician.Subscriptions.length > 0
                  ? technician.Subscriptions[0]
                  : null;

              return (
                <tr key={technician.id} className="border-t">
                  <td className="text-left p-4">
                    {technician.first_name} {technician.last_name}
                  </td>

                  <td className="text-left p-4">
                    {subscription
                      ? new Date(subscription.start_date).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="text-left p-4">
                    {subscription
                      ? new Date(subscription.end_date).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="text-left p-4">
                    {!subscription ? (
                      <span className="text-gray-500 font-medium">
                        Aucun abonnement
                      </span>
                    ) : (
                      <span
                        className={
                          subscription.status === "active"
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }
                      >
                        {subscription.status === "active" ? "Actif" : "Expiré"}
                      </span>
                    )}
                  </td>

                  <td className="p-4">
                    {!subscription ? (
                      <button
                        onClick={() =>
                          createSubscriptionMutation.mutate({
                            user_id: technician.id,
                            start_date: new Date(),
                            end_date: new Date(
                              Date.now() + 30 * 24 * 60 * 60 * 1000,
                            ),
                            status: "active",
                          })
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
                      >
                        Créer
                      </button>
                    ) : subscription.status === "active" ? (
                      <button
                        onClick={() =>
                          updateSubscriptionMutation.mutate({
                            id: subscription.id,
                            data: {
                              status: "expire",
                            },
                          })
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                      >
                        Expirer
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          updateSubscriptionMutation.mutate({
                            id: subscription.id,
                            data: {
                              status: "active",
                              start_date: new Date(),
                              end_date: new Date(
                                Date.now() + 30 * 24 * 60 * 60 * 1000,
                              ),
                            },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
                      >
                        Activer
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
