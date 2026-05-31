import {
  FaHome,
  FaClipboardList,
  FaTools,
  FaCreditCard,
  FaUser,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router";
import logoDark from "../assets/logodark.svg";

export default function TechnicianLayout() {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar */}
        <div className="pt-0 pb-6 flex justify-center">
          <img src={logoDark} alt="DepanGO" className="h-24" />
        </div>

        <nav className="px-4 mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/technician"
                end
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
                to="/technician/requests"
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaClipboardList />
                  <span> Demandes</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technician/interventions"
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaTools />
                  <span> Interventions</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technician/subscription"
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaCreditCard />
                  <span> Abonnement</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technician/profile"
                className={({ isActive }) =>
                  isActive
                    ? "block px-5 py-4 rounded-2xl bg-gray-100 text-orange-500 font-semibold"
                    : "block px-5 py-4 rounded-2xl text-[#07182E] hover:bg-gray-50"
                }
              >
                <div className="flex items-center gap-3">
                  <FaUser />
                  <span>Profil</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="px-5 pb-6 mt-auto">
          <button
            onClick={handleLogout}
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
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-end px-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>

            <div>
              <p className="font-semibold text-[#07182E]">
                {localStorage.getItem("first_name")}
              </p>

              <p className="text-sm text-gray-500">Technicien</p>
            </div>
          </div>
        </header>

        {/* Contenu */}
        <main className="flex-1 p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
