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
  const { first_name, last_name, phone, email, password, role, available } =
    req.body;

  User.findOne({ where: { id } }).then((user) => {
    if (user) {
      user.first_name = first_name || user.first_name;
      user.last_name = last_name || user.last_name;
      user.phone = phone || user.phone;
      user.email = email || user.email;
      user.password = password || user.password;
      user.role = role || user.role;
      user.available =
        available !== undefined ? available : user.available;

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


// Récupérer le profil de l'utilisateur connecté
function getProfile(req, res) {
  res.json(req.user);
}


// Mettre à jour le profil de l'utilisateur connecté par le technicien
function updateProfile(req, res) {
  console.log(req.body);
  const { first_name, last_name, phone, available } = req.body;

  User.findByPk(req.user.id).then((user) => {
    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.phone = phone || user.phone;
    user.available = available !== undefined ? available : user.available;
    user.save().then((updatedUser) => {
      res.json(updatedUser);
    });
  });
}

// Récupérer les services associés à l'utilisateur connecté
async function getProfileServices(req, res) {
  const user = await User.findByPk(req.user.id, {
    include: [
      {
        model: Service,
        through: {
          attributes: [],
        },
      },
    ],
  });

  res.json(user.Services);
}

// Ajouter un service au profil de l'utilisateur connecté
async function addProfileService(req, res) {
  const { service_id } = req.body;

  const user = await User.findByPk(req.user.id);

  const service = await Service.findByPk(service_id);

  if (!service) {
    return res.status(404).json({
      error: "Service non trouvé",
    });
  }

  await user.addService(service);

  res.status(201).json({
    message: "Spécialité ajoutée",
  });
}

// Supprimer un service du profil de l'utilisateur connecté
async function deleteProfileService(req, res) {
  const { id } = req.params;

  const user = await User.findByPk(req.user.id);

  const service = await Service.findByPk(id);

  if (!service) {
    return res.status(404).json({
      error: "Service non trouvé",
    });
  }

  await user.removeService(service);

  res.json({
    message: "Spécialité supprimée",
  });
}


export default {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  findUserByEmail,
  getProfile,
  updateProfile,
  getProfileServices,
  addProfileService,
  deleteProfileService,
};
