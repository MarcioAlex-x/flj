const {
  criarClienteSchema,
  atualizarClienteSchema,
} = require("../schemas/clienteSchema");
const ClientesService = require("../services/ClientesService");

class ClientesController {
  static async buscarTodos(req, res) {
    try {
      const clientes = await ClientesService.buscarTodos();
      return res.status(200).json(clientes);
    } catch (err) {
      return res.status(404).json({ erro: err.message });
    }
  }

  static async buscarUnico(req, res) {
    const { id } = req.params;
    try {
      const cliente = await ClientesService.buscarUnico(id);
      if (!cliente) {
        return res.status(404).json({ erro: "Clienete não encontrado." });
      }
      return res.status(200).json(cliente);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  static async criarUsuario(req, res) {
    try {
      const dadosValidos = criarClienteSchema.parse(req.body);
      const novoCliente = await ClientesService.criarCliente(dadosValidos);
      return res.status(201).json(novoCliente);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  static async atualizarCliente(req, res) {
    try {
      const { id } = req.params;
      const dadosValidos = atualizarClienteSchema.parse(req.body);
      const clienteAtualizado = await ClientesService.atualizarCliente(
        id,
        dadosValidos,
      );
      if (!clienteAtualizado) {
        return res.status(404).json({ erro: "Cliente não encontrado." });
      }
      return res.status(200).json(clienteAtualizado);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  static async removerCliente(req, res) {
        try {
            const { id } = req.params;
            const removido = await ClientesService.removerCliente(id);

            if (!removido) {
                return res.status(404).json({ erro: 'Cliente não encontrado.' });
            }

            return res.status(204).json({mensagem: 'Cliente removido com sucesso.'}); 
        } catch (err) {
            return res.status(500).json({ erro: err.message });
        }
    }
}

module.exports = ClientesController;
