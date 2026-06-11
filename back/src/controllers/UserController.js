import User from "../models/User.js";
import Service from "../models/Service.js";
import "../models/UserService.js";
import { hashPassword } from "../utils/password.js";

// Liste
function getUsers(req, res) {
  User.findAll().then((users) => {
    res.json(users);
  });
}

// Création
function createUser(req, res) {
  //console.log(req);

  if (!req.body) {
    return res.status(400).json({ error: "Données manquantes" });
  }

  const {
  last_name,
  first_name,
  email,
  phone,
  password,
  role,
  service_id,
  } = req.body;

  if (!last_name || !first_name || !email || !phone || !password || !role) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  User.findOne({ where: { email } }).then(async (user) => {
    if (user) {
      res.json({ message: "Utilisateur déjà existant", user });
    } else {
      const hash = await hashPassword(password);
      User.create({ last_name: last_name, first_name: first_name, email: email, phone: phone, password: hash, role: role }).then(
  async (newUser) => {

          const service = await Service.findByPk(service_id);

          if (service) {
          await newUser.addService(service);
          }

          res.status(201).json({ message: "Utilisateur créé", newUser });
        },
      );
    }
  });
}

// Suppression
function deleteUser(req, res) {
  const { id } = req.params;
  User.destroy({ where: { id } }).then(() => {
    res.status(204).json({ message: "Utilisateur supprimé" });
  });
}

// Modification
function updateUser(req, res) {
  const { id } = req.params;
  const { email, password, role } = req.body;

  User.findOne({ where: { id } }).then((user) => {
    if (user) {
      user.email = email || user.email;
      user.password = password || user.password;
      user.role = role || user.role;

      user.save().then((updatedUser) => {
        res.json(updatedUser);
      });
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  });
}

// Récupérer un utilisateur par ID
function getUserById(req, res) {
  const { id } = req.params;
  User.findOne({ where: { id } }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  });
}

function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

function getProfile(req, res) {
  res.json(req.user);
}

export default {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  findUserByEmail,
  getProfile,
};
