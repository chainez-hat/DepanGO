import express from "express";
import ServiceController from "../controllers/ServiceController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const serviceRouter = express.Router();

// Routes protégées ADMIN
serviceRouter.use((req, res, next) =>
  AuthMiddleware(req, res, next, ["ADMIN"])
);

// Liste des services
serviceRouter.get("/", ServiceController.getServices);

// Récupérer un service par ID
serviceRouter.get("/:id", ServiceController.getServiceById);

// Créer un service
serviceRouter.post("/", ServiceController.createService);

// Modifier un service
serviceRouter.put("/:id", ServiceController.updateService);

// Supprimer un service
serviceRouter.delete("/:id", ServiceController.deleteService);

export default serviceRouter;