export default function TechnicianDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07182E]">
        Bonjour {localStorage.getItem("first_name")} 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Bienvenue sur votre espace technicien.
      </p>
    </div>
  );
}
