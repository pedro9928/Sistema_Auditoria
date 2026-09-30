
-- Seed: dados de teste para desenvolvimento

INSERT INTO Operacoes (nome) VALUES
('Qualidade'),
('Operação');

INSERT INTO Fichas (Pergunta_1, Pergunta_2, Pergunta_3) VALUES
('O atendimento seguiu o script de abertura?', 'O cliente foi identificado corretamente?', 'O encerramento foi adequado?');

INSERT INTO Usuarios (nome, CPF, cargo, operacao) VALUES
('Pedro Silva', '12345678900', 'Monitor de Qualidade', 1),
('Ana Souza', '98765432100', 'Analista de Qualidade', 1),
('Carlos Lima', '11122233344', 'Monitor de Qualidade', 2);

INSERT INTO Auditoria (nome, usuarios_id, auditor_id, ficha_id, Nota) VALUES
('Auditoria mensal - Pedro', 1, 2, 1, 100),
('Auditoria mensal - Carlos', 3, 2, 1, 0);