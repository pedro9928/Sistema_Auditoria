
CREATE TABLE Operacoes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Fichas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    Pergunta_1 VARCHAR(100) NOT NULL,
    Pergunta_2 VARCHAR(100) NOT NULL,
    Pergunta_3 VARCHAR(100) NOT NULL
);
CREATE TABLE Usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(11) UNIQUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cargo VARCHAR(100),
    operacao INT,

    FOREIGN KEY (Operacao) REFERENCES Operacoes(id)
);
CREATE TABLE Auditoria(
    ficha_id INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_auditoria TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuarios_id INT,
    auditor_id INT,

    FOREIGN KEY (usuarios_id) REFERENCES Usuarios(id),
    FOREIGN KEY (auditor_id) REFERENCES Usuarios(id),
    FOREIGN KEY (ficha_id) REFERENCES Fichas(id)
);