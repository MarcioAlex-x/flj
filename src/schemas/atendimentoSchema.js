const { z } = require("zod");

const criarAtendimentoSchema = z.object({
  cliente_id: z.number({ required_error: "O ID do cliente é obrigatório." }),
  veiculo_id: z.number({ required_error: "O ID do veículo é obrigatório." }),
  servico_id: z.number({ required_error: "O ID do serviço é obrigatório." }),
  // O valor cobrado é opcional. Se não for enviado, nosso Service vai puxar o preço padrão do catálogo!
  valor_cobrado: z.number().positive("O valor deve ser positivo.").optional(),
  status: z.string().optional().default("Agendado")
});

module.exports = { criarAtendimentoSchema };
