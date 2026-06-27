// models/Caixa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Caixa = sequelize.define('Caixa', {
  data_fechamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: true 
  },
  total_arrecadado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  quantidade_atendimentos: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'caixas',
  timestamps: true
});

module.exports = Caixa;
