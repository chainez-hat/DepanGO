import Request from "../models/Request.js";
import Service from "../models/Service.js";
import User from "../models/User.js";
import { sendEmail } from "../utils/mail.js";

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
async function updateRequest(req, res) {
  const { id } = req.params;

  const request = await Request.findOne({
    where: { id },
  });

  if (!request) {
    return res.status(404).json({
      error: "Demande non trouvée",
    });
  }

  const updatedRequest = await request.update(req.body);

  // Envoyer un email si le statut de la demande est "acceptee" et qu'un technicien est assigné
  if (
  updatedRequest.status_request === "acceptee" &&
  updatedRequest.technician_id
) {
  const technician = await User.findByPk(
    updatedRequest.technician_id
  );

  console.log("Technicien trouvé :", technician?.email);
  console.log("Email client :", updatedRequest.email_client);

  await sendEmail(
  updatedRequest.email_client,
  "Votre demande a été acceptée",
  `
    <h2>Votre demande a été acceptée</h2>

    <p>Un technicien a accepté votre demande.</p>

    <p><strong>Nom :</strong> ${technician.last_name}</p>
    <p><strong>Prénom :</strong> ${technician.first_name}</p>
    <p><strong>Email :</strong> ${technician.email}</p>
    <p><strong>Téléphone :</strong> ${technician.phone}</p>

    <br>

    <p>L'équipe DepanGO</p>
  `
);
}

  res.json(updatedRequest);
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