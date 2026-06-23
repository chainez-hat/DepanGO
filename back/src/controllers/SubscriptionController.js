import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

// Liste des abonnements
/*function getSubscriptions(req, res) {
  Subscription.findAll().then((subscriptions) => {
    res.json(subscriptions);
  });
}*/


function getSubscriptions(req, res) {
  Subscription.findAll({
    include: [
      {
        model: User,
      },
    ],
  }).then((subscriptions) => {
    res.json(subscriptions);
  });
}

// Récupérer un abonnement par ID
function getSubscriptionById(req, res) {
  const { id } = req.params;

  Subscription.findOne({ where: { id } }).then((subscription) => {
    if (subscription) {
      res.json(subscription);
    } else {
      res.status(404).json({
        error: "Abonnement non trouvé",
      });
    }
  });
}

// Créer un abonnement
// Si un abonnement existe déjà pour cet utilisateur, on le met à jour
function createSubscription(req, res) {
  const { user_id } = req.body;

  Subscription.findOne({
    where: { user_id },
  }).then((subscription) => {
    if (subscription) {
      subscription.update(req.body).then((updatedSubscription) => {
        res.json({
          message: "Abonnement mis à jour",
          subscription: updatedSubscription,
        });
      });
    } else {
      Subscription.create(req.body).then((newSubscription) => {
        res.status(201).json({
          message: "Abonnement créé",
          newSubscription,
        });
      });
    }
  });
}

// Modifier un abonnement
function updateSubscription(req, res) {
  const { id } = req.params;

  Subscription.findOne({ where: { id } }).then((subscription) => {
    if (subscription) {
      subscription.update(req.body).then((updatedSubscription) => {
        res.json(updatedSubscription);
      });
    } else {
      res.status(404).json({
        error: "Abonnement non trouvé",
      });
    }
  });
}

// Supprimer un abonnement
function deleteSubscription(req, res) {
  const { id } = req.params;

  Subscription.destroy({ where: { id } }).then(() => {
    res.status(204).json({
      message: "Abonnement supprimé",
    });
  });
}

export default {
  getSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};