const express = require("express");
const cors = require("cors");

const clientesRouter = require("../routes/clientesRouter");
const enderecosRouter = require("../routes/enderecosRouter");
const caixaRouter = require("../routes/caixaRouter");
const atendimentosRouter = require("../routes/atendimentoRouter");
const servicosRouter = require('../routes/servicosRouter')

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clientesRouter);
app.use("/caixa", caixaRouter);
app.use("/atendimentos", atendimentosRouter);
app.use('/servicos', servicosRouter)

module.exports = app;
