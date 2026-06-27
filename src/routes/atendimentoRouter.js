const AtendimentoController = require("../controllers/AtendimentoController");

const { Router } = require("express");

const router = Router();

router.post("/", AtendimentoController.criarAtendimentoController);

module.exports = router;
