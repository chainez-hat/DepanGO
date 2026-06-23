import User from "../models/User.js";
import { comparePassword } from "../utils/password.js";
import UserController from "./UserController.js";
import jwt from "jsonwebtoken";

function login(req, res) {
  const { email, password } = req.body;

  // Sequelize
  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    // Functions utilisateurs
    comparePassword(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(401).json({ error: "Email ou mot de passe incorrect" });
      }

      // jwt librairie
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
      });

      // Express response
      return res.status(200).json({
        message: "Login successful",
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        token,
      });
    });
  });
}

function register(req, res) {
  UserController.createUser(req, res);
  // Envoi d'email
}

export default { login, register };
