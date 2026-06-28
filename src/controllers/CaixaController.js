const CaixaService = require("../services/CaixaServices");

class CaixaController {
  static async fecharCaixa(req, res) {
    try {
      const resultado = await CaixaService.fecharCaixaDiario();
      return res.status(201).json({
        mensagem: "Caixa fechado com sucesso!",
        dados: resultado,
      });
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }
}

module.exports = CaixaController;
