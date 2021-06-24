const Sequelize = require("sequelize");

module.exports = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: Sequelize.STRING(25),
  lastName: Sequelize.STRING(25),
  email: Sequelize.STRING(50),
  password: Sequelize.STRING(100),
});
