const Servico = require('../models/Servico')

class ServicosService {
  static async criarNovoServico(dadosServico) {
    try {
      const novoServico = await Servico.create(dadosServico)
      return novoServico
    } catch (err) {
      throw new Error('Não foi possível salvar o serviço.' + err.message)
    }
  }
  
}