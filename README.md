# Le projet DepanGO

## Présentation

DepanGO est une plateforme web de mise en relation entre particuliers et techniciens spécialisés dans le dépannage à domicile.

L'objectif de la plateforme est de permettre aux clients de créer facilement une demande de dépannage et de la transmettre aux techniciens disposant des compétences adaptées.

Le projet a été réalisé dans le cadre de la préparation au Titre Professionnel Développeur Web et Web Mobile.

---

## Prérequis

- Node.js 24+
- npm 11+
- MySQL 8+
- React 19.2.0
- Vite 7.2.4
- Express 5.2.1

---

## Technologies utilisées

### Frontend

- React 19.2.0
- React Router 7.12.0
- React Query 5.90.19
- Axios 1.13.2
- Tailwind CSS 4.1.18
- React Hook Form 7.71.1
- Zod 4.3.5
- React Hot Toast 2.6.0
- React Icons 5.6.0
- Vite 7.2.4

### Backend

- Node.js 24
- Express 5.2.1
- Sequelize 6.37.7
- MySQL 8
- JWT (jsonwebtoken 9.0.3)
- Bcrypt 6.0.0
- Nodemailer 9.0.0
- Dotenv 17.2.3
- Cors 2.8.5

---

## Fonctionnalités

### Espace public

- Consultation des services proposés
- Présentation du fonctionnement de la plateforme
- Création d'une demande de dépannage
- Inscription des techniciens
- Connexion à la plateforme
- Consultation de la page À propos

### Espace technicien

- Tableau de bord personnel
- Gestion du profil
- Gestion des spécialités
- Gestion de la disponibilité
- Consultation des demandes correspondant à ses spécialités
- Acceptation des demandes
- Gestion des interventions en cours
- Consultation des interventions terminées
- Consultation de son abonnement

### Espace administrateur

- Tableau de bord d'administration
- Gestion des techniciens
- Gestion des services
- Gestion des abonnements
- Activation et expiration des abonnements

---

## Architecture du projet

```text
DepanGO/
│
├── front/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── back/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── seeders/
│   ├── package.json
│   └── index.js
│
└── README.md
```

## Utiliser la version recommandée de Node.js

```sh
nvm install 24.13.0

nvm use 24.13.0
```

## Installation

### Cloner le projet

```sh
git clone <url-du-projet>

cd DepanGO
```

### Installer les dépendances du backend

```sh
cd back

npm install
```

### Installer les dépendances du frontend

```sh
cd front

npm install
```

## Configuration

Créer un fichier `.env` dans le dossier `back`.

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=depango

JWT_SECRET=votre_secret_jwt
```

## Lancement du projet

### Démarrer le backend

```sh
cd back

npm start
```

### Démarrer le frontend

```sh
cd front

npm run dev
```

Frontend :

```text
http://localhost:5173
```

Backend :

```text
http://localhost:3000
```

---

## Sécurité

- Authentification par JWT
- Gestion des rôles ADMIN et TECHNICIAN
- Protection des routes frontend avec RoleGuard
- Protection des routes backend avec AuthMiddleware
- Hachage des mots de passe avec Bcrypt
- Vérification des permissions selon le rôle utilisateur

---

## Fonctionnement général

1. Un client crée une demande de dépannage.
2. La demande est enregistrée sur la plateforme.
3. Les techniciens disposant de la spécialité correspondante peuvent consulter la demande.
4. Un technicien accepte la demande.
5. La demande devient une intervention.
6. Le technicien réalise l'intervention.
7. Le client confirme la réalisation de l'intervention.

---

## Perspectives d'amélioration

- Paiement en ligne des abonnements des techniciens
- Mise en place d'un acompte client avant la transmission des coordonnées du technicien ayant accepté la demande
- Notifications en temps réel par email et SMS
- Système d'avis et de notation des techniciens
- Géolocalisation et suivi des interventions
- Tableau de bord statistique avancé pour les administrateurs
- Application mobile Android et iOS
- Historique détaillé des interventions

---

## Auteur

Projet réalisé par **Chahinez** dans le cadre de la préparation au **Titre Professionnel Développeur Web et Web Mobile**.

```

```

# DepanGO Frontend

## Présentation

Le frontend de DepanGO est développé avec React et Vite.

Il permet aux utilisateurs, techniciens et administrateurs d'interagir avec la plateforme via une interface moderne, responsive et intuitive.

---

## Technologies utilisées

- React 19.2.0
- React Router 7.12.0
- React Query 5.90.19
- Axios 1.13.2
- Tailwind CSS 4.1.18
- React Hook Form 7.71.1
- Zod 4.3.5
- React Hot Toast 2.6.0
- React Icons 5.6.0
- Vite 7.2.4

---

## Installation

Installer les dépendances :

```sh
npm install
```

---

## Lancement du projet

Mode développement :

```sh
npm run dev
```

Application disponible sur :

```text
http://localhost:5173
```

---

## Build de production

Créer une version optimisée :

```sh
npm run build
```

Prévisualiser la version de production :

```sh
npm run preview
```

---

## Structure du projet

```text
src/
│
├── api/
├── assets/
├── components/
├── layouts/
├── middlewares/
├── pages/
│   ├── admin/
│   ├── auth/
│   ├── public/
│   └── technician/
│
├── index.css
└── main.jsx
```

---

## Fonctionnalités principales

### Espace public

- Consultation des services
- Création d'une demande de dépannage
- Présentation du fonctionnement de la plateforme
- Inscription des techniciens
- Authentification

### Espace technicien

- Tableau de bord
- Gestion du profil
- Gestion des spécialités
- Gestion de la disponibilité
- Consultation des demandes
- Gestion des interventions
- Consultation de l'abonnement

### Espace administrateur

- Tableau de bord
- Gestion des techniciens
- Gestion des services
- Gestion des abonnements

---

## Gestion des routes

La navigation est assurée par React Router.

Les accès sont protégés grâce au composant :

```text
RoleGuard.jsx
```

Les rôles disponibles sont :

```text
ADMIN
TECHNICIAN
```

---

## Gestion des requêtes API

Les appels au backend sont centralisés dans :

```text
src/api/
```

Les données sont gérées avec :

```text
React Query
```

afin d'assurer :

- le cache des données
- la synchronisation automatique
- l'invalidation des requêtes après modification

---

## Validation des formulaires

Les formulaires utilisent :

- React Hook Form
- Zod

pour assurer la validation côté client.

---

## Notifications

Les messages utilisateurs utilisent :

```text
React Hot Toast
```

pour afficher :

- les succès
- les erreurs
- les confirmations

---

## Auteur

Projet réalisé par Chahinez dans le cadre du Titre Professionnel Développeur Web et Web Mobile.

# DepanGO Backend

## Présentation

Le backend de DepanGO est développé avec Node.js, Express et Sequelize.

Il fournit l'ensemble des API REST utilisées par le frontend pour gérer :

- l'authentification
- les utilisateurs
- les techniciens
- les services
- les demandes de dépannage
- les interventions
- les abonnements

---

## Technologies utilisées

- Node.js 24
- Express 5.2.1
- Sequelize 6.37.7
- MySQL 8
- JWT (jsonwebtoken 9.0.3)
- Bcrypt 6.0.0
- Nodemailer 9.0.0
- Brevo SMTP
- Dotenv 17.2.3
- Cors 2.8.5
- Nodemon 3.1.11

---

## Installation

Installer les dépendances :

```sh
npm install
```

---

## Configuration

Créer un fichier `.env` à la racine du projet backend.

Exemple :

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=depango

JWT_SECRET=votre_secret_jwt

BREVO_HOST=smtp-relay.brevo.com
BREVO_PORT=587
BREVO_USER=votre_email
BREVO_PASSWORD=votre_mot_de_passe_smtp
```

---

## Lancement du serveur

Mode développement :

```sh
npm start
```

Le serveur sera accessible sur :

```text
http://localhost:3000
```

---

## Structure du projet

```text
src/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── seeders/
├── services/
└── config/

index.js
```

---

## Architecture

Le backend suit une architecture en couches.

### Routes

Les routes définissent les endpoints de l'API.

Exemple :

```text
/users
/services
/requests
/subscriptions
/auth
```

---

### Controllers

Les contrôleurs contiennent la logique métier.

Exemples :

```text
UserController
AuthController
RequestController
SubscriptionController
ServiceController
```

---

### Models

Les modèles Sequelize représentent les tables de la base de données.

Exemples :

```text
User
Request
Service
Subscription
```

---

### Middlewares

Les middlewares permettent :

- l'authentification
- la gestion des rôles
- la sécurisation des routes

Exemple :

```text
AuthMiddleware
```

---

## Authentification

L'authentification repose sur JWT (JSON Web Token).

Fonctionnement :

1. L'utilisateur saisit ses identifiants.
2. Le serveur vérifie les informations.
3. Un token JWT est généré.
4. Le token est envoyé au frontend.
5. Les routes protégées nécessitent la présence du token.

Exemple :

```http
Authorization: Bearer <token>
```

---

## Gestion des rôles

Deux rôles sont disponibles :

```text
ADMIN
TECHNICIAN
```

Les routes sensibles sont protégées grâce au middleware :

```text
AuthMiddleware
```

Exemple :

```js
(req, res, next) => AuthMiddleware(req, res, next, ["ADMIN"]);
```

Cette approche garantit qu'un utilisateur ne peut accéder qu'aux ressources autorisées selon son rôle.

---

## Gestion des emails

Le projet utilise Nodemailer associé au serveur SMTP de Brevo afin d'envoyer automatiquement des emails aux utilisateurs.

Les emails permettent notamment :

- de confirmer la création d'une demande de dépannage ;
- d'informer le client lorsqu'un technicien accepte sa demande ;
- de transmettre les informations liées à l'intervention ;
- d'envoyer différentes notifications depuis la plateforme.

L'utilisation de Brevo permet de disposer d'un service d'envoi d'emails fiable et sécurisé.

---

## Sécurité

Le backend met en œuvre plusieurs mécanismes de sécurité :

- Authentification JWT
- Protection des routes par middleware
- Gestion des rôles ADMIN et TECHNICIAN
- Hachage des mots de passe avec Bcrypt
- Validation des permissions utilisateur
- Protection des ressources sensibles
- Gestion sécurisée des variables d'environnement avec Dotenv
- Envoi d'emails via un serveur SMTP sécurisé (Brevo)

---

## Base de données

Le projet utilise MySQL avec Sequelize comme ORM.

Principales entités :

```text
User
Service
Request
Subscription
```

Relations principales :

```text
User ↔ Service
User ↔ Subscription
Request ↔ Service
Request ↔ User
```

---

## Seeders

Créer un administrateur :

```sh
npm run seed:admin
```

Créer les services :

```sh
npm run seed:services
```

---

## API REST

Principales ressources exposées :

```text
/auth
/users
/services
/requests
/subscriptions
```

Les réponses sont renvoyées au format JSON.

---

## Fonctionnement général

1. Un client crée une demande de dépannage.
2. La demande est enregistrée dans la base de données.
3. Les techniciens disposant de la spécialité correspondante peuvent consulter la demande.
4. Un technicien accepte la demande.
5. Le client est informé de l'acceptation de sa demande.
6. L'intervention est réalisée.
7. Le client confirme la réalisation de l'intervention.

---

## Auteur

Projet réalisé par **Chahinez** dans le cadre de la préparation au **Titre Professionnel Développeur Web et Web Mobile**.
