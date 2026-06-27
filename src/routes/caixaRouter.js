const { Router } = require("express");
const CaixaController = require("../controllers/CaixaController");
const router = Router();

router.post("/", CaixaController.fecharCaixa);

module.exports = router;
