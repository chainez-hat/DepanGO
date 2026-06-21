import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router";
import logo from "../assets/logo.svg";
import logoDark from "../assets/logodark.svg";

export default function Navbar({ dark = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={dark ? logoDark : logo}
              alt="DepanGO"
              className="h-22 cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex gap-8 text-base font-medium">
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
        <div className="hidden lg:block">
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full h-[530px] ${
            dark ? "bg-white text-black" : "bg-[#07182E] text-white"
          } border-t border-gray-200 shadow-lg`}
        >
          <div className="flex flex-col p-6 gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
              Comment ça marche
            </Link>

            <Link to="/become-technician" onClick={() => setMenuOpen(false)}>
              Devenir artisan
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>

            {!email && (
              <>
                <Link
                  to="/auth/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-orange-500 text-white px-4 py-3 rounded-md text-center"
                >
                  Connexion
                </Link>

                <Link
                  to="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-orange-500 text-white px-4 py-3 rounded-md text-center"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
