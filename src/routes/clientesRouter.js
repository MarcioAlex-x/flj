const {Router} = require('express')
const ClientesController = require('../controllers/ClientesController')

const router = Router()

router.get('/',ClientesController.buscarTodos)
router.get('/:id',ClientesController.buscarUnico)
router.post('/',ClientesController.criarUsuario)
router.patch('/:id',ClientesController.atualizarCliente)
router.delete('/:id',ClientesController.removerCliente)

//rotas expeciais
router.get('/nome/:nome', ClientesController.buscarClientePorNome)

module.exports = router
