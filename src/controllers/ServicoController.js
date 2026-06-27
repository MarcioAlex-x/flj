const ServicosService = require('../services/ServicosServices')
const { criarServicoSchema } = require('../schemas/servicosSchema')

class ServicoController {
  static async criarNovoServico(req, res) {
    try {
      const dadosValidos = criarServicoSchema.parse(req.body)
      const novoServico = ServicosService.criarNovoServico(dadosValidos)
      return res.status(201).json(novoServico)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = ServicoController