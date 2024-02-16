const { DataTypes } = require('sequelize');
const db = require('./db');

const Tema = db.define('Tema', {
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
    estatus: {
        type: DataTypes.STRING(10),
        defaultValue: 'activo'
    },
    identificador_mayoria: {
        type: DataTypes.STRING(255)
    },
    materiaId: {
        type: DataTypes.STRING(36),
        allowNull: false
    }
});

module.exports = Tema;
