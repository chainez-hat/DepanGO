import { Link } from "react-router";
import logo from "../assets/logo petit.svg";

export default function EmergencyCTA() {
  return (
    <section className="bg-[#F5F7FA] pb-16">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="bg-[#07182E] rounded-md px-8 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt="DepanGO"
              className="w-20 h-20 object-contain"
            />

            <div className="text-left">
              <h3 className="text-white text-3xl font-bold">
                Besoin d'un dépannage urgent ?
              </h3>

              <p className="text-white/80 mt-1 text-xl text-left">
                Faites votre demande maintenant et soyez dépanné en moins de 2h.
              </p>
            </div>
          </div>

          <Link
            to="/request"
            className="bg-orange-500 hover:bg-orange-600 text-white w-[300px] py-3 rounded-md font-medium transition text-center"
          >
            Demander maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
