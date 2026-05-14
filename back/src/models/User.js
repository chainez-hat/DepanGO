
import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const User = sequelize.define("User", {
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM("ADMIN", "TECHNICIAN"),
    defaultValue: "TECHNICIAN",
    allowNull: false,
  },

  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;