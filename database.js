const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookings', 'root', 'Test#135', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;