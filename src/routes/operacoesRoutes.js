const express = require('express');
const operacoesRouter = express.Router(); // cria o roteador modular

//definição das rotas

operacoesRouter.get ('/', (req, res) => {
    res.send("Lista de equipes");
});

operacoesRouter.get ('/:id', (req, res) => {
    res.send("detalhe de uma equipe pelo ID");
});

operacoesRouter.post('/', (req, res) => {
    console.log(req.body)
    res.json({ mensagem: "Operação criada", dados: req.body })
});

operacoesRouter.patch('/', (req, res) => {
    res.send("Atualiza uma equipe");
});

operacoesRouter.delete('/', (req, res) => {
    res.send("Deleta uma equipe");
});

module.exports = operacoesRouter;