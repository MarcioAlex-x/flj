const { z } = require('zod')

const criarClienteSchema = z.object({
    nome: z.string({required_error: 'O nome é obrigatório.'})
        .min(3, "O nome precisa ter no mínimo 3 caracteres."),
    telefone1: z.string({required_error: 'O telefone principal é obrigatório.'})
        .min(11, 'O número de telefone inválido.'),
    telefone2: z.string().optional(),
    email: z.string({required_error: 'O email é obrigatório.'})
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Formato de e-mail inválido")
})

module.exports = criarClienteSchema
