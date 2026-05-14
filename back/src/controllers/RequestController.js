import Request from "../models/Request.js";
import Service from "../models/Service.js";
import User from "../models/User.js";

// Liste des demandes
function getRequests(req, res) {
  Request.findAll({
    include: [Service, User],
  }).then((requests) => {
    res.json(requests);
  });
}

// Récupérer une demande par ID
function getRequestById(req, res) {
  const { id } = req.params;

  Request.findOne({
    where: { id },
    include: [Service, User],
  }).then((request) => {
    if (request) {
      res.json(request);
    } else {
      res.status(404).json({
        error: "Demande non trouvée",
      });
    }
  });
}

// Créer une demande
function createRequest(req, res) {
  Request.create(req.body).then((newRequest) => {
    res.status(201).json({
      message: "Demande créée",
      newRequest,
    });
  });
}

// Modifier une demande
function updateRequest(req, res) {
  const { id } = req.params;

  Request.findOne({ where: { id } }).then((request) => {
    if (request) {
      request.update(req.body).then((updatedRequest) => {
        res.json(updatedRequest);
      });
    } else {
      res.status(404).json({
        error: "Demande non trouvée",
      });
    }
  });
}

// Supprimer une demande
function deleteRequest(req, res) {
  const { id } = req.params;

  Request.destroy({ where: { id } }).then(() => {
    res.status(204).json({
      message: "Demande supprimée",
    });
  });
}

export default {
  getRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
};