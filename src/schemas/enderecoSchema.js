
const { z } = require('zod')

const criarEnderecoSchema = z.object({
  cep: z
    .string({ required_error: "O CEP é obrigatório." })
    .length(8, "O CEP deve ter exatamente 8 números (sem traços)."),
  logradouro: z
    .string({ required_error: "A rua/logradouro é obrigatória." })
    .min(3, "O logradouro precisa ter no mínimo 3 caracteres."),
  numero: z
    .string({ required_error: "O número é obrigatório." })
    .min(1, "Informe o número ou 'SN'."),
  complemento: z.string().optional(),
  bairro: z
    .string({ required_error: "O bairro é obrigatório." })
    .min(2, "O bairro precisa ter no mínimo 2 caracteres."),
  cidade: z
    .string({ required_error: "A cidade é obrigatória." })
    .min(2, "A cidade precisa ter no mínimo 2 caracteres."),
  estado: z
    .string({ required_error: "O estado (UF) é obrigatório." })
    .length(2, "A UF deve ter exatamente 2 letras (Ex: PB, SP, RJ).")
});

module.exports = {criarEnderecoSchema};
