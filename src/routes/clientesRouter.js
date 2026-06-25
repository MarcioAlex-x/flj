const {Router} = require('express')
const ClientesController = require('../controllers/ClientesController')

const router = Router()

router.get('/',ClientesController.buscarTodos)
router.get('/:id',ClientesController.buscarUnico)
router.post('/',ClientesController.criarUsuario)

module.exports = router
