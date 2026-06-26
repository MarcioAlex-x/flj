const { Op } = require("sequelize");

const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");
const Veiculo = require("../models/Veiculo");

class ClientesService {
  static async buscarTodos() {
    try {
      const clientes = await Cliente.findAll({
        order: [
          ["nome", "ASC"],
        ],
        include: [{ model: Endereco }, { model: Veiculo }],
      });
      return clientes;
    } catch (err) {
      throw new Error("Erro ao buscar clientes." + err.message);
    }
  }

  static async buscarUnico(id) {
    try {
      const cliente = await Cliente.findByPk(id, {
        include: [{ model: Endereco }, { model: Veiculo }],
      });
      return cliente;
    } catch (err) {
      throw new Error("Erro ao buscar cliente." + err.message);
    }
  }

  static async criarCliente(dadosCliente) {
    try {
      const novoCliente = await Cliente.create(dadosCliente);
      return novoCliente;
    } catch (err) {
      throw new Error("Erro ao registrar cliente." + err.message);
    }
  }

  static async atualizarCliente(id, dadosCliente) {
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) return null;
      await cliente.update(dadosCliente);
      return cliente;
    } catch (err) {
      throw new Error("Erro ao atualizar cliente." + err.message);
    }
  }

  static async removerCliente(id) {
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) return null;
      await cliente.destroy();
      return true;
    } catch (err) {
      throw new Error("Erro ao remover cliente." + err.message);
    }
  }

  //metodos especiais

  static async buscarClientePorNome(nome) {
    try {
      const cliente = await Cliente.findAll({
        where: {
          nome: {
            [Op.iLike]: `%${nome}%`,
          },
        },
        order: [
          ["nome", "ASC"],
        ],
        include: [{ model: Veiculo }, { model: Endereco }],
      });

      return cliente;
    } catch (err) {
      throw new Error("Erro ao buscar cliente." + err.message);
    }
  }

}

module.exports = ClientesService;
