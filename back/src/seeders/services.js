import Service from "../models/Service.js";

const services = [
  "Electricité",
  "Plomberie",
  "Chauffage",
  "Serrurerie",
  "Internet",
];

async function seedServices() {
  try {
    for (const name of services) {
      await Service.findOrCreate({
        where: { name },
      });
    }

    console.log("✅ Services créés avec succès");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur :", error);
    process.exit(1);
  }
}

seedServices();