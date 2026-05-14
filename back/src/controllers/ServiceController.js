import Service from "../models/Service.js";

// Liste des services
function getServices(req, res) {
  Service.findAll().then((services) => {
    res.json(services);
  });
}

// Récupérer un service par ID
function getServiceById(req, res) {
  const { id } = req.params;

  Service.findOne({ where: { id } }).then((service) => {
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({
        error: "Service non trouvé",
      });
    }
  });
}

// Créer un service
function createService(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Le nom du service est requis",
    });
  }

  Service.create({ name }).then((newService) => {
    res.status(201).json({
      message: "Service créé",
      newService,
    });
  });
}

// Modifier un service
function updateService(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  Service.findOne({ where: { id } }).then((service) => {
    if (service) {
      service.name = name || service.name;

      service.save().then((updatedService) => {
        res.json(updatedService);
      });
    } else {
      res.status(404).json({
        error: "Service non trouvé",
      });
    }
  });
}

// Supprimer un service
function deleteService(req, res) {
  const { id } = req.params;

  Service.destroy({ where: { id } }).then(() => {
    res.status(204).json({
      message: "Service supprimé",
    });
  });
}

export default {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};