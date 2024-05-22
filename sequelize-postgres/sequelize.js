const { Sequelize } = require('sequelize')


// Initialize Sequelize with your PostgreSQL database credentials

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres', // Specify the dialect for PostgreSQL
});

module.exports = sequelize;
