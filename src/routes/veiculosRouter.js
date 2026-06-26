const { Router } = require("express");
const VeiculosController = require("../controllers/VeiculosController");

const router = Router({ mergeParams: true });

router.post('/',VeiculosController.criarVeiculoCliente)

module.exports = router;
