import { useState } from "react";

import { FaHome, FaUsers, FaCreditCard, FaTools, FaBars } from "react-icons/fa";

import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router";

import logoDark from "../assets/logodark.svg";

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("user_id");

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex relative">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-screen w-72 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="pt-4 pb-6 flex items-center justify-center px-4 relative">
          <img src={logoDark} alt="DepanGO" className="h-20" />

          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden absolute right-4 text-2xl text-[#07182E]"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaHome />
                  <span>Tableau de bord</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/technicians"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaUsers />
                  <span>Techniciens</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/subscriptions"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaCreditCard />
                  <span>Abonnements</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaTools />
                  <span>Services</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Déconnexion */}
        <div className="px-5 pb-6 mt-auto">
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-3 px-5 py-4 text-[#07182E] hover:text-orange-500 transition"
          >
            <FiLogOut size={20} />
            <span>Se déconnecter</span>
          </button>
        </div>
      </aside>

      {/* Partie droite */}
      <div className="flex-1 bg-[#F5F7FA]">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#07182E]"
          >
            <FaBars size={24} />
          </button>

          <div className="hidden lg:block"></div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                {localStorage.getItem("first_name")?.charAt(0)}
              </div>

              <div>
                <p className="font-semibold text-[#07182E]">
                  {localStorage.getItem("first_name")}
                </p>

                <p className="text-sm text-gray-500">Administrateur</p>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu */}
        <main role="main" className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
