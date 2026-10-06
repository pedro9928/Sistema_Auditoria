const express = require('express');
const operacoesRouter = express.Router(); // cria o roteador modular
const pool = require('../config/database');


//definição das rotas

operacoesRouter.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Operacoes');
        res.json(rows);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: 'Erro ao conectar com o banco' });
    }
});

operacoesRouter.get ('/:id', (req, res) => {
    res.send("detalhe de uma equipe pelo ID");
});

operacoesRouter.post('/', (req, res) => {
    console.log(req.body)
});

operacoesRouter.patch('/', (req, res) => {
    res.send("Atualiza uma equipe");
});

operacoesRouter.delete('/', (req, res) => {
    res.send("Deleta uma equipe");
});

module.exports = operacoesRouter;