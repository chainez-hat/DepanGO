import { FaUser } from "react-icons/fa";

import { Link } from "react-router";
import logo from "../assets/logo.svg";
import logoDark from "../assets/logodark.svg";

export default function Navbar({ dark = false }) {
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    window.location.reload();
  }

  return (
    <nav
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-screen z-50 py-4 ${
        dark
          ? "bg-white text-black border-b border-gray-200"
          : "bg-transparent text-white"
      }`}
    >
      {/* <nav
  className={`absolute top-0 left-1/2 -translate-x-1/2 w-screen z-50 bg-transparent py-4 ${
    dark ? "text-black" : "text-white"
  }`}
> */}

      {/* Container */}
      <div className="w-full px-8 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={dark ? logoDark : logo} alt="DepanGO" className="h-22" />
        </div>

        {/* Navigation */}
        <ul className="flex gap-8 text-base font-medium">
          <li>
            {/* <Link to="/">Accueil</Link> */}
            <Link to="/" className="hover:text-orange-400 transition">
              {" "}
              Accueil{" "}
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-orange-400 transition">
              {" "}
              Services{" "}
            </Link>
          </li>

          <li>
            <Link
              to="/how-it-works"
              className="hover:text-orange-400 transition"
            >
              Comment ça marche
            </Link>
          </li>

          <li>
            <Link
              to="/become-technician"
              className="hover:text-orange-400 transition"
            >
              Devenir artisan
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-orange-400 transition">
              À propos
            </Link>
          </li>
        </ul>

        {/* Auth */}
        <div>
          {email ? (
            <div className="flex items-center gap-4">
              <span>
                Bonjour, {firstName} {lastName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-orange-500 px-4 py-2 rounded-md"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/auth/login"
                className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-md border border-orange-500 transition hover:bg-transparent hover:text-orange-400 hover:border-orange-400"
              >
                <FaUser />
                Connexion
              </Link>

              <Link
                to="/auth/register"
                className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-md border border-orange-500 transition hover:bg-transparent hover:text-orange-400 hover:border-orange-400"
              >
                Inscription
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
