import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import User from "./User.js";

const Subscription = sequelize.define("Subscription", {
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM("active", "expire"),
    defaultValue: "expire",
  },
});


User.hasMany(Subscription, {
  foreignKey: "user_id",
});

Subscription.belongsTo(User, {
  foreignKey: {
    name: "user_id",
    unique: true,
  },
});
export default Subscription;