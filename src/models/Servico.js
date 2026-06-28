const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

const Servico = sequelize.define(
  "Servicos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    servico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
  },
  {
    tableName: "servicos",
    timestamps: true,
  },
);

module.exports = Servico;
