const { Router } = require('express')
const  criarEnderecoController  = require('../controllers/EnderecosController')
const EnderecoController = require('../controllers/EnderecosController')

const router = Router({ mergeParams: true })

router.post('/',EnderecoController.criarEnderecoCliente)
router.patch('/', EnderecoController.atualizarEnderecoCliente)

module.exports = router