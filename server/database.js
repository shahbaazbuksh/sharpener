const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Test#135', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
