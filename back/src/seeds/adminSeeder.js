import User from "../models/User.js";
import { hashPassword } from "../utils/password.js";

async function adminSeeder() {
  const adminExists = await User.findOne({
    where: {
      email: "admin@depango.fr",
    },
  });

  if (adminExists) {
    console.log("✅ Admin déjà existant");
    process.exit(0);
  }

  const hash = await hashPassword("Admin123");

  await User.create({
    first_name: "Admin",
    last_name: "DepanGO",
    email: "admin@depango.fr",
    phone: "0600000000",
    password: hash,
    role: "ADMIN",
    available: true,
  });

  console.log("✅ Compte admin créé");
  process.exit(0);
}

adminSeeder();