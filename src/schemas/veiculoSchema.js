const { z } = require("zod");

const criarVeiculoSchema = z.object({
  marca: z.string({required_error: "Informar a marca do veículo é obrigatório."})
    .min(3, "A marca do veículo precisa ter no mínimo 3 caracteres."),
  modelo: z.string({required_error: "Informar o modelo do veículo é obrigatório."})
    .min(3, "O modelo do veículo precisa ter no mínimo 3 caracteres."),
  ano: z.string({required_error: "Informar a marca do veículo é obrigatório."})
    .min(4, "O ano do veículo precisa ter no mínimo 4 caracteres."),
  placa: z.string({required_error: "Informar a placa do veículo é obrigatório."})
    .min(7, "A placa do veículo precisa ter no mínimo 7 caracteres (sem o traço)."),
})

const editarVeiculoSchema = z.object({
  marca: z.string()
    .min(3, "A marca do veículo precisa ter no mínimo 3 caracteres.")
    .optional(),
  modelo: z.string()
    .min(3, "O modelo do veículo precisa ter no mínimo 3 caracteres.")
    .optional(),
  ano: z.string()
    .min(4, "O ano do veículo precisa ter no mínimo 4 caracteres.")
    .optional(),
  placa: z.string()
    .min(7, "A placa do veículo precisa ter no mínimo 7 caracteres (sem o traço).")
    .optional(),
})

module.exports = {
  criarVeiculoSchema,
  editarVeiculoSchema
}
