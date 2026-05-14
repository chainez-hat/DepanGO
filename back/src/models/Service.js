import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Service = sequelize.define("Service", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Service;
