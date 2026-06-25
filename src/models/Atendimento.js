const { DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

const Atendimento = sequelize.define('Atendimento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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