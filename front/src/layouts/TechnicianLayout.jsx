import { NavLink, Outlet } from "react-router";

export default function TechnicianLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#07182E] text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">DepanGO</h2>
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

      {/* Contenu */}
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
