const Sequelize = require("sequelize");

module.exports = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  usertName: {
    type: Sequelize.STRING(25),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
