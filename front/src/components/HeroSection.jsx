import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../api/services.js";

import heroBg from "../assets/hero-bg.png";
import okIcon from "../assets/ok.svg";
import nikeIcon from "../assets/nike.svg";
import electriciteIcon from "../assets/electricite.svg";

export default function HeroSection() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [serviceId, setServiceId] = useState("");

  const { data: servicesResponse } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await getServices();
    },
  });

  const services = servicesResponse?.data || [];
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <img
        src={heroBg}
        alt="Technicien en intervention"
        className="block w-full h-[750px] object-cover"
      />

      {/* Contenu Hero */}
      <div className="absolute inset-0 flex items-center mt-30">
        <div className="max-w-4xl ml-20 text-left">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Dépannage rapide
            <br />
            en moins de <span className="text-orange-500">2h</span>
          </h1>

          <p className="text-white text-3xl font-medium mt-6 leading-relaxed">
            Trouvez un technicien qualifié près de chez vous
            <br />
            en quelques clics.
          </p>
          {/* Bouton "Trouver un technicien" */}
          <div className="flex items-center gap-10 mt-25 text-white">
            <div className="flex items-center gap-4">
              {/* Icône d'intervention rapide */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img
                  src={electriciteIcon}
                  alt="Intervention rapide"
                  className="w-8 h-8"
                />
              </div>

              <span className="font-medium">Intervention rapide</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Icône de techniciens qualifiés */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img
                  src={nikeIcon}
                  alt="Techniciens qualifiés"
                  className="w-8 h-8"
                />
              </div>

              <span className="font-medium">Techniciens qualifiés</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Icône de service fiable */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src={okIcon} alt="Service fiable" className="w-8 h-8" />
              </div>

              <span className="font-medium">Service fiable</span>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-md p-3 flex items-center w-[900px] shadow-lg justify-between">
            <input
              type="text"
              placeholder="Votre adresse"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="px-6 py-3 w-72 outline-none text-gray-700"
            />

            <div className="w-px h-10 bg-gray-200"></div>

            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="px-6 py-3 w-60 outline-none text-gray-700"
            >
              <option value="">Type de service</option>

              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>

            <button
              onClick={() =>
                navigate(
                  `/request?address=${encodeURIComponent(address)}&service_id=${serviceId}`,
                )
              }
              className="ml-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition"
            >
              Trouver un dépanneur
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
