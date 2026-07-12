import express from "express";
import RequestController from "../controllers/RequestController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const requestRouter = express.Router();


// Route publice pour créer une demande
requestRouter.post("/", RequestController.createRequest);

// TECHNICIAN routes//
// Liste des demandes
requestRouter.get(
  "/",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN"]),
  RequestController.getRequests,
);

// Récupérer une demande par ID
requestRouter.get(
  "/:id",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN"]),
  RequestController.getRequestById,
);

// Modifier une demande
requestRouter.put(
  "/:id",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["TECHNICIAN"]),
  RequestController.updateRequest,
);

//ADMIN uniquement por Supprimer une demande
//À développer ultérieurement
requestRouter.delete(
  "/:id",
  (req, res, next) =>
    AuthMiddleware(req, res, next, ["ADMIN"]),
  RequestController.deleteRequest,
);

export default requestRouter;