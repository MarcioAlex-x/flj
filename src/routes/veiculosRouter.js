const { Router } = require("express");
const VeiculosController = require("../controllers/VeiculosController");

const router = Router({ mergeParams: true });

router.post("/", VeiculosController.criarVeiculoCliente);
router.patch("/", VeiculosController.editarVeiculoCliente);
router.get("/buscar", VeiculosController.buscarVeiculoPorModelo);

module.exports = router;
