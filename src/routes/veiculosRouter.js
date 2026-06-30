const { Router } = require("express");
const VeiculosController = require("../controllers/VeiculosController");

const router = Router({ mergeParams: true });

router.post("/", VeiculosController.criarVeiculoCliente);
router.patch("/", VeiculosController.editarVeiculoCliente);
router.get("/buscar", VeiculosController.buscarVeiculoPorModelo);
router.get("/", VeiculosController.buscarVeiculosPorCliente);

module.exports = router;
