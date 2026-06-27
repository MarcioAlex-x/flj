const { Op } = require("sequelize");
const Cliente = require("../models/Cliente");
const Veiculos = require("../models/Veiculo");

class VeiculosService {
  static async buscarVeiculosPorModelo(modelo) {
    try {
      const veiculos = await Veiculos.findAll({
        where: {
          modelo: {
            [Op.iLike]: `%${modelo}%`,
          },
        },
        order: [["modelo", "ASC"]],
      });

      return veiculos;
    } catch (err) {
      throw new Error("Erro ao buscar veículos por modelo." + err.message);
    }
  }

  static async criarVeiculoCliente(clienteId, dadosVeiculo) {
    try {
      const clienteEcontrado = await Cliente.findByPk(clienteId);
      if (!clienteEcontrado) {
        return null;
      }

      const dadosId = {
        ...dadosVeiculo,
        proprietario_id: clienteId,
      };

      const novoVeiculo = await Veiculos.create(dadosId);

      return novoVeiculo;
    } catch (err) {
      throw new Error("Erro ao criar veículo do cliente." + err.message);
    }
  }

  static async editarVeiculoCliente(clienteId, veiculoId, dadosVeiculo) {
    try {
      const clienteEcontrado = await Cliente.findByPk(clienteId);

      if (!clienteEcontrado) {
        return null;
      }

      const veiculoExistente = await Veiculos.findOne({
        where: {
          id: veiculoId,
          proprietario_id: clienteId,
        },
      });

      if (veiculoExistente) return null;

      await Veiculos.update(dadosVeiculo, {
        where: {
          id: veiculoId,
          proprietario_id: clienteId,
        },
      });

      const veiculoAtualizado = await Veiculos.findOne({
        where: {
          id: veiculoId,
          proprietario_id: clienteId,
        },
      });

      return veiculoAtualizado;

      return;
    } catch (err) {
      throw new Error("Erro ao editar veículo do cliente" + err.message);
    }
  }
}

module.exports = VeiculosService;
