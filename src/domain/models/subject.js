const { DataTypes } = require('sequelize');
const db = require('./db');

const Materia = db.define('Materia', {
    uuid: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(10),
        defaultValue: 'activo'
    }
});

Materia.prototype.desactivar = function() {
    this.estatus = 'inactivo';
};

module.exports = Materia;
