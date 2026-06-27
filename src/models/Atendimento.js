const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

const Atendimento = sequelize.define(
  "Atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    veiculo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "veiculos",
        key: "id",
      },
    },
    servico_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "servicos",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("AGUARDANDO", "EM_LAVAGEM", "FINALIZADO"),
      defaultValue: "AGUARDANDO",
    },
    valor_cobrado: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "atendimentos",
    timestamps: true,
  },
);

module.exports = Atendimento;
