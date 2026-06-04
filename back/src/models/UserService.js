import sequelize from "../db/connection.js";

import User from "./User.js";
import Service from "./Service.js";

const UserService = sequelize.define("UserService", {});

User.belongsToMany(Service, {
  through: UserService,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Service.belongsToMany(User, {
  through: UserService,
  foreignKey: "service_id",
  onDelete: "CASCADE",
});

export default UserService;