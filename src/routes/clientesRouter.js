const Router = require('express')
const ClientesController = require('../controllers/ClientesController')

const router = Router()

router.get('/clientes',ClientesController.buscarTodos)
router.get('/clientes',ClientesController.buscarUnico)
router.post('/clientes',ClientesController.criarUsuario)

module.exports = router
