import { NavLink, Outlet } from "react-router";
import logoDark from "../assets/logodark.svg";

export default function TechnicianLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar */}
        <div className="p-8 flex justify-center">
          <img src={logoDark} alt="DepanGO" className="h-24" />
        </div>

        <nav className="px-4">
          <ul className="space-y-2">
            <li>
              <NavLink to="/technician">🏠 Tableau de bord</NavLink>
            </li>

            <li>
              <NavLink to="/technician/requests">📋 Demandes</NavLink>
            </li>

            <li>
              <NavLink to="/technician/interventions">🔧 Interventions</NavLink>
            </li>

            <li>
              <NavLink to="/technician/subscription">💳 Abonnement</NavLink>
            </li>

            <li>
              <NavLink to="/technician/profile">👤 Profil</NavLink>
            </li>
          </ul>
        </nav>
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
