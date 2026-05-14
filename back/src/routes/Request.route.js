import express from "express";
import RequestController from "../controllers/RequestController.js";

const requestRouter = express.Router();

// Liste des demandes
requestRouter.get("/", RequestController.getRequests);

// Récupérer une demande par ID
requestRouter.get("/:id", RequestController.getRequestById);

// Créer une demande
requestRouter.post("/", RequestController.createRequest);

// Modifier une demande
requestRouter.put("/:id", RequestController.updateRequest);

// Supprimer une demande
requestRouter.delete("/:id", RequestController.deleteRequest);

export default requestRouter;