const { DataTypes } = require('sequelize')
const sequelize = require('../config/connect')

const Veiculo = sequelize.define('Veiculo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'veiculos'
})
