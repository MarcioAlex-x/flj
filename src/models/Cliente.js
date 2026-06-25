const { DataTypes } = require('sequelize')
const sequelize = require('../config/connect')

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
}, {
    tableName: 'clientes',
    timestamps: true
})

module.exports = Cliente
