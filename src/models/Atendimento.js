const { DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

const Atendimento = sequelize.define('Atendimento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    veiculo_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'veiculos',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM(
            'AGUARDANDO', 
            'EM_LAVAGEM', 
            'ACABAMENTO', 
            'PRONTO', 
            'FINALIZADO'
        ),
        defaultValue: 'AGUARDANDO'
    }
}, {
    tableName: 'atendimentos',
    timestamps: true
});

module.exports = Atendimento;