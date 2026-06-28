const ServicoController = require('../controllers/ServicoController')

const { Router } = require('express')

const router = Router()

router.post('/', ServicoController.criarNovoServico)
router.get('/', ServicoController.buscarServicos)

module.exports = router
