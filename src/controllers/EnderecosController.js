const EnderecosService = require("../services/EnderecosService");
const {
  criarEnderecoSchema,
  editarEnderecoSchema,
} = require("../schemas/enderecoSchema");

class EnderecoController {
  static async criarEnderecoCliente(req, res) {
    try {
      const { clienteId } = req.params;
      const dadosValidos = criarEnderecoSchema.parse(req.body);
      const novoEndereco = await EnderecosService.criarEnderecoCliente(
        clienteId,
        dadosValidos,
      );
      if (!novoEndereco) {
        return res.status(404).json({ erro: "Cliente não encontrado." });
      }
      return res.status(201).json(novoEndereco);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
  static async atualizarEnderecoCliente(req, res) {
    try {
      const { clienteId } = req.params;
      const dadosValidos = editarEnderecoSchema.parse(req.body);
      const enderecoAtualizado =
        await EnderecosService.atualizarEnderecoCliente(
          clienteId,
          dadosValidos,
        );
      if (!enderecoAtualizado) {
        return res.status(404).json({ erro: "Cliente não encontrado." });
      }
      return res.status(200).json(enderecoAtualizado);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

module.exports = EnderecoController;
