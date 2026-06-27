const { z } = require("zod");

const criarServicoSchema = z.object({
  servico: z
    .string({ required_error: "O serviço é obrigatório." })
    .min(2, "O serviço precisa de no mínimo 3 caracteres"),
  valor: z
    .number({ required_error: "O valor do serviço é obrigatório." })
    .positive("O preço não pode ser negativo."),
});

module.exports = {
  criarServicoSchema
}
