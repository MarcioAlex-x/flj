const { DataTypes } = require('sequelize')
const sequelize = require('../config/connect')

const Endereco = sequelize.define('Endereco', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'enderecos',
    timestamps: true
})

module.exports = Endereco