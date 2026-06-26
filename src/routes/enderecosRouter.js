const { Router } = require('express')
const { criarEnderecoController } = require('../controllers/EnderecosController')

const router = Router()

router.get('/',criarEnderecoController)

module.exports = router