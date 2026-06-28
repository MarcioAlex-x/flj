const ServicosService = require("../services/ServicosServices");
const { criarServicoSchema } = require("../schemas/servicosSchema");

class ServicoController {
  static async criarNovoServico(req, res) {
    try {
      const dadosValidos = criarServicoSchema.parse(req.body);
      const novoServico = await ServicosService.criarNovoServico(dadosValidos);
      return res.status(201).json(novoServico);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async buscarServicos(req, res) {
    try {
      const servicos = await ServicosService.buscarSrvicos();
      return res.status(200).json(servicos);
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = ServicoController;
