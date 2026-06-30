const {
  criarVeiculoSchema,
  editarVeiculoSchema,
} = require("../schemas/veiculoSchema");

const VeiculosService = require("../services/VeiculosService");

class VeiculosController {
  static async buscarVeiculoPorModelo(req, res) {
    try {
      const { modelo } = req.query;
      if (!modelo) {
        return res
          .status(400)
          .json({ erro: "Por favor, digite um modelo para buscar." });
      }
      const veiculos = await VeiculosService.buscarVeiculosPorModelo(modelo);
      if (veiculos.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum veículo encontrado." });
      }
      return res.status(200).json(veiculos);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  static async criarVeiculoCliente(req, res) {
    try {
      const { clienteId } = req.params;
      const dadosValidos = criarVeiculoSchema.parse(req.body);
      const novoVeiculo = await VeiculosService.criarVeiculoCliente(
        clienteId,
        dadosValidos,
      );
      if (!novoVeiculo) {
        return res
          .status(404)
          .json({ erro: "Cliente ou veículo não encontrado." });
      }
      return res.status(201).json(novoVeiculo);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  static async editarVeiculoCliente(req, res) {
    try {
      const { clienteId, veiculoId } = req.params;
      const dadosValidos = editarVeiculoSchema.parse(req.body);
      const veiculoAtualizado = await VeiculosService.editarVeiculoCliente(
        clienteId,
        veiculoId,
        dadosValidos,
      );
      if (!veiculoAtualizado) {
        return res
          .status(404)
          .json({ erro: "Cliente ou veículo não encontrado." });
      }

      return res.status(200).json(veiculoAtualizado);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  static async buscarVeiculosPorCliente(req, res) {
    try {
      const { clienteId } = req.params;
      
      const veiculos = await VeiculosService.buscarVeiculosPorCliente(clienteId);
      
      return res.status(200).json(veiculos);
    } catch (err) {
      console.log("Erro ao buscar veículos do cliente:", err);
      return res.status(500).json({ erro: err.message });
    }
  }
}

module.exports = VeiculosController;
