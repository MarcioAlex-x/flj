const Atendimento = require("../models/Atendimento");
const Cliente = require("../models/Cliente");
const Veiculo = require("../models/Veiculo");
const Servico = require("../models/Servico");

class AtendimentosServices {
  static async CriarAtendimentoService(dadosAtendimento) {
    try {
      const { cliente_id, veiculo_id, servico_id } = dadosAtendimento;
      
      const clienteEncontrado = await Cliente.findByPk(cliente_id);
      if (!clienteEncontrado) {
        return new Error("Cliente não encontrado.");
      }

      const veiculoEncontrado = await Cliente.findOne({
        where: {
          id: veiculo_id,
          proprietario_id,
          cliente_id,
        },
      });
      if (!veiculoEncontrado) {
        return new Error("Veículo não encontrado." + err.message);
      }

      const servicoEncontrado = Servico.findByPk(servico_id);
      if (!servicoEncontrado) {
        throw new Error("Serviço não encontrado no catálogo." + err.message);
      }

      const novoAtendimento = await Atendimento.create({
        cliente_id: cliente_id,
        veiculo_id: veiculo_id,
        servico_id: servico_id,
        valor_cobrado: servicoEncontrado.valor,
        staus: "AGUARDANDO",
      });

      return novoAtendimento;

    } catch (err) {
      throw new Error("Ocorreu um erro ao salvar o atendimento." + err.message);
    }
  }
}

module.exports = AtendimentosServices;
