import { Link } from "react-router";
import logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07182E] text-white">
      <div className="max-w-[1500px] mx-auto py-16">
        <div className="grid grid-cols-4 gap-20 ml-20 mr-20 text-left">
          {/* Colonne 1 */}
          <div>
            <img src={logo} alt="DepanGO" className="h-14 mb-5" />

            <p className="text-gray-300 leading-7 max-w-xs">
              DepanGO vous met en relation avec des artisans qualifiés pour des
              interventions rapides à domicile.
            </p>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Navigation</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/">Accueil</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/how-it-works">Comment ça marche</Link>
              </li>

              <li>
                <Link to="/how-it-works">Devenir artisan</Link>
              </li>

              <li>
                <Link to="/about">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Pour les techniciens</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/become-technician">Devenir technicien</Link>
              </li>

              <li>
                <Link to="/auth/register">Inscription</Link>
              </li>

              <li>
                <Link to="/auth/login">Se connecter</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Nous contacter</h3>

            <ul className="space-y-3 text-gray-300">
              <li>07 49 56 56 56</li>

              <li>contact@depango.fr</li>

              <li>Suivez-nous</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-300">
            <div className="flex flex-wrap gap-8">
              <span>© 2026 DepanGO. Tous droits réservés</span>
              <span>Politique de confidentialité</span>
              <span>Mentions légales</span>
              <span>Conditions générales d'utilisation</span>
            </div>

            <div className="flex items-center gap-6 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-orange-500 transition" />
              <FaYoutube className="cursor-pointer hover:text-orange-500 transition" />
              <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
