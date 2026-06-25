const Cliente = require('./Cliente')
const Endereco = require('./Endereco')
const Veiculo = require('./Veiculo')
const Atendimento = require('./Atendimento')

Cliente.hasMany(Veiculo, { foreignKey: 'proprietario_id' })
Veiculo.belongsTo(Cliente, { foreignKey: 'proprietario_id' ,as: 'proprietario' })

Cliente.hasOne(Endereco, { foreignKey: 'cliente_id' })
Endereco.belongsTo(Cliente, { foreignKey: 'cliente_id' })

Veiculo.hasMany(Atendimento, { foreignKey: 'veiculo_id' })
Atendimento.belongsTo(Veiculo, { foreignKey: 'veiculo_id', as: 'veiculo' })
