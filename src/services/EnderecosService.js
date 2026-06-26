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
        cliente_id: clienteId,
      };

      const novoEndereco = await Endereco.create(dadosId);

      return novoEndereco;
    } catch (err) {
      throw new Error("Erro ao registrar endereco do cliente." + err.message);
    }
  }

  static async atualizarEnderecoCliente(clienteId, dadosEndereco) {
    try {
      const clienteEncontado = await Cliente.findByPk(clienteId);
      if (!clienteEncontado) {
        return null;
      }

      const enderecoExiste = await Endereco.findOne({
        where:{
          cliente_id: clienteId
        }
      })

      if(!enderecoExiste) {
        return null
      }

      await Endereco.update( dadosEndereco, {
        where: { cliente_id: clienteId}
      })

      const enderecoAtualizado = await Endereco.findOne({
        where: { cliente_id: clienteId }
      });

      return enderecoAtualizado;

    } catch (err) {
      throw new Error("Erro ao atualizar o endereco do cliente." + err.message);
    }
  }
}

module.exports = EnderecosService;
