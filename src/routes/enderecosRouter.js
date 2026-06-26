const { Router } = require('express')
const { criarEnderecoController } = require('../controllers/EnderecosController')

const router = Router()

router.post('/',criarEnderecoController)

module.exports = router