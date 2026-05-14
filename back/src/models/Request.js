import User from "./User.js";
import Service from "./Service.js";
import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";


const Request = sequelize.define("Request", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  last_name_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  first_name_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  adress_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone_client: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status_request: {
    type: DataTypes.ENUM(
      "en_attente",
      "acceptée",
      "en_attente_paiement",
      "confirmé",
      "annulé"
    ),
    defaultValue: "en_attente",
  },

  acceptance_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  confirmation_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});


Service.hasMany(Request, {
  foreignKey: "service_id",
});

Request.belongsTo(Service, {
  foreignKey: "service_id",
});

User.hasMany(Request, {
  foreignKey: "technician_id",
});

Request.belongsTo(User, {
  foreignKey: "technician_id",
});

export default Request;