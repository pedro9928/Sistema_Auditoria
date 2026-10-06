const mysql = require('mysql2/promise');

// Criação do Pool de Conexões
const pool = mysql.createPool({
    host: process.env.DB_HOST,       // Endereço do servidor MySQL
    user: process.env.DB_USER,            // Usuário do banco de dados
    password: process.env.DB_PASSWORD,    // Senha do banco de dados
    database: process.env.DB_DATABASE,   // Nome do banco de dados
    waitForConnections: true, // Aguarda se todas as conexões estiverem ocupadas
    connectionLimit: 10,     // Limite máximo de conexões simultâneas
    queueLimit: 0            // Sem limite na fila de espera (0 = ilimitado)
});

module.exports = pool;