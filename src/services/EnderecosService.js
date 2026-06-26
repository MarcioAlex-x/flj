const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");
class EnderecosService {
  static async criarEnderecoCliente(clienteId, dadosEndereco) {
    try {
      const clienteEncontado = await Cliente.findByPk(clienteId);
      if (!clienteEncontado) {
        return null;
      }

      const dadosId = {
        ...dadosEndereco,
        clienteId,
      };

      const novoEndereco = await Endereco.create(dadosId);

      return novoEndereco;
    } catch (err) {
      throw new Error("Erro ao registrar endereco do cliente." + err.message);
    }
  }
}

module.exports = EnderecosService;
