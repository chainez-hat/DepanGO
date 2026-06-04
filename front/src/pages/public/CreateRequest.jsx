import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../api/services.js";

const requestSchema = z.object({
  first_name_client: z.string().min(2),
  last_name_client: z.string().min(2),
  phone_client: z.string().min(10),
  email_client: z.string().email(),
  adress_client: z.string().min(5),
  description: z.string().min(10),
  service_id: z.string().min(1),
});

export default function CreateRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(requestSchema),
  });

  const { data: servicesResponse } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await getServices();
    },
  });

  const services = servicesResponse?.data || [];

  return (
    <div>
      <h1>Créer une demande</h1>
    </div>
  );
}
