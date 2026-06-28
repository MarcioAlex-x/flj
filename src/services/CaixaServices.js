const { Op } = require("sequelize");
const Atendimento = require("../models/Atendimento");
const Caixa = require("../models/Caixa");

class CaixaService {
  static async fecharCaixaDiario() {
    try {
      const hoje = new Date();
      const inicioDoDia = new Date(hoje.setHours(0, 0, 0, 0));
      const fimDoDia = new Date(hoje.setHours(23, 59, 59, 999));

      const dataFormatada = hoje.toISOString().split("T")[0];

      const caixaJaFechado = await Caixa.findOne({
        where: { data_fechamento: dataFormatada },
      });

      if (caixaJaFechado) {
        throw new Error("O caixa de hoje já foi fechado!");
      }

      const qtdAtendimentos = await Atendimento.count({
        where: {
          createdAt: { [Op.between]: [inicioDoDia, fimDoDia] },
        },
      });

      if (qtdAtendimentos === 0) {
        throw new Error("Não houve atendimentos para fechar o caixa hoje.");
      }

      const totalSoma = await Atendimento.sum("valor_cobrado", {
        where: {
          createdAt: { [Op.between]: [inicioDoDia, fimDoDia] },
        },
      });

      const totalArrecadado = totalSoma || 0;

      const fechamento = await Caixa.create({
        data_fechamento: dataFormatada,
        total_arrecadado: totalArrecadado,
        quantidade_atendimentos: qtdAtendimentos,
      });

      return fechamento;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = CaixaService;
