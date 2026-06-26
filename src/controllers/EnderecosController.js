const  EnderecosService = require('../services/EnderecosService')
const {criarEnderecoSchema} = require('../schemas/enderecoSchema')

class EnderecoController {
  static async criarEnderecoController(req, res) {
    try {
      const { clienteId } = req.params
    const dadosValidos = criarEnderecoSchema.parse(req.body)
    const novoEndereco = await EnderecosService.criarEnderecoCliente(clienteId, dadosEndereco)
    if(!novoEndereco){
      return res.status(404).json({erro: 'Cliente não encontrado.'})
    }
    return res.status(201).json(novoEndereco)
    } catch (err) {
      res.status(500).json({erro: err.message})
    }
  }
}

module.exports = EnderecoController
