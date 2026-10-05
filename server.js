require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

//trazendo as rotas
const operacoesRouter = require('./src/routes/operacoesRoutes');
app.use('/Operacoes', operacoesRouter);

const usuariosRouter = require('./src/routes/usuariosRoutes');
app.use('/Usuario', usuariosRouter);

const fichasRouter = require('./src/routes/fichasRoutes');
app.use('/Fichas', fichasRouter);

const auditoriaRouter = require('./src/routes/auditoriaRoutes');
app.use('/Auditoria', auditoriaRouter);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});