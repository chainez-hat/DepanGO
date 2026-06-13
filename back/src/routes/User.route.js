import express from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const userRouter = express.Router();


// Route publique pour le profil de l'utilisateur connecté
userRouter.get(
  "/profile",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN", "ADMIN"]),
  UserController.getProfile,
);

userRouter.put(
  "/profile",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN", "ADMIN"]),
  UserController.updateProfile,
);

// Admin
userRouter.use((req, res, next) => AuthMiddleware(req, res, next, ["ADMIN"]));

userRouter.get("/", UserController.getUsers); // Liste de tous les utilisateurs
userRouter.get("/:id", UserController.getUserById); // Récupérer un utilisateur par ID
userRouter.post("/", UserController.createUser); // Créer un nouvel utilisateur
userRouter.delete("/:id", UserController.deleteUser); // Supprimer un utilisateur par ID
userRouter.put(
  "/:id",
  // (req, res, next) => AuthMiddleware(req, res, next, ["TECHNICIAN"]),
  UserController.updateUser,
); // Modifier un utilisateur par ID

export default userRouter;
