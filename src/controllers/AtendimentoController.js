const { criarAtendimentoSchema } = require("../schemas/atendimentoSchema");
const AtendimentosServices = require("../services/AtendimentosServices");

class AtendimentoController {
  static async criarAtendimentoController(req, res) {
    try {
      const dadodValidos = criarAtendimentoSchema.parse(req.body);
      const novoAtendimento =
        await AtendimentosServices.CriarAtendimentoService(dadodValidos);
      return res.status(201).json(novoAtendimento);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }
}

module.exports = AtendimentoController;
