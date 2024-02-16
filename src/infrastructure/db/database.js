const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'subjects.sqlite'
});

module.exports = sequelize;