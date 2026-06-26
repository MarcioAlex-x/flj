const {
  criarVeiculoSchema,
  editarVeiculoSchema,
} = require("../schemas/veiculoSchema");

const VeiculosService = require('../services/VeiculosService')

class VeiculosController {
  static async criarVeiculoCliente(req, res) {
    try {
      const { clienteId } = req.params;
      const dadosValidos = criarVeiculoSchema.parse(req.body);
      const novoVeiculo = await VeiculosService.criarVeiculoCliente(
        clienteId,
        dadosValidos,
      );
      if (!novoVeiculo) {
        return res.status(404).json({ erro: "Cliente não encontrado." });
      }
      return res.status(201).json(novoVeiculo);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

module.exports = VeiculosController;
