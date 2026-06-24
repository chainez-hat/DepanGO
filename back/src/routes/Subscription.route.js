import express from "express";
import SubscriptionController from "../controllers/SubscriptionController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const subscriptionRouter = express.Router();


// TECHNICIAN + ADMIN
// Récupérer son propre abonnement
subscriptionRouter.get(
  "/me",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN", "ADMIN"]),
  SubscriptionController.getMySubscription,
);


// ADMIN UNIQUEMENT
subscriptionRouter.use((req, res, next) =>
  AuthMiddleware(req, res, next, ["ADMIN"]),
);

// Liste des abonnements
subscriptionRouter.get("/", SubscriptionController.getSubscriptions);

// Récupérer un abonnement par ID
subscriptionRouter.get("/:id", SubscriptionController.getSubscriptionById);

// Créer un abonnement
subscriptionRouter.post("/", SubscriptionController.createSubscription);

// Modifier un abonnement
subscriptionRouter.put("/:id", SubscriptionController.updateSubscription);

// Supprimer un abonnement
subscriptionRouter.delete("/:id", SubscriptionController.deleteSubscription);

export default subscriptionRouter;