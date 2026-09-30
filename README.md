Sistema de Auditoria

Sistema de monitoria de qualidade para gestão de equipes, fichas de auditoria e lançamento de avaliações. Projeto pessoal desenvolvido como evolução de um processo de auditoria já utilizado no trabalho, reconstruído com arquitetura própria (frontend, API e banco de dados relacional).

Motivação

O projeto nasce de um processo real de monitoria de qualidade, hoje conduzido de forma mais manual/limitada. O objetivo aqui é recriar esse fluxo com uma stack própria, adicionando estrutura de dados relacional, múltiplos usuários com papéis distintos (gerente e auditor) e histórico de auditorias vinculado a templates reutilizáveis.

Domínio do problema
Operações: agrupam funcionários em equipes/linhas de produto.
Usuários: funcionários do sistema, vinculados a uma Operação, com um cargo. Podem atuar como auditado ou como auditor.
Fichas: templates reutilizáveis de auditoria, com um conjunto de perguntas padronizadas.
Auditorias: aplicação de uma Ficha a um Usuário específico, conduzida por outro Usuário (auditor), com nota e data de lançamento.
Papéis de acesso
Área de gerenciamento: cadastro de equipes, operações e fichas (templates).
Área de auditoria: lançamento de novas auditorias e verificação/extração de auditorias já lançadas.
Estrutura do banco de dados

Banco relacional único, com quatro tabelas principais:

Operacoes — equipes/linhas de produto.
Usuarios — funcionários, vinculados a uma Operação.
Fichas — templates de perguntas para auditoria.
Auditoria — registro de cada aplicação de uma Ficha, referenciando o usuário auditado, o auditor e a ficha utilizada.

A ordem de criação das tabelas respeita as dependências de chave estrangeira: Operacoes → Fichas → Usuarios → Auditoria.

Rotas planejadas da API

Autenticação

GET /Login — retorna token de autenticação

Usuários

GET /Usuario
POST /Usuario
PATCH /Usuario
DELETE /Usuario

Fichas

GET /Fichas
GET /Fichas/:id
POST /Fichas
PATCH /Fichas
DELETE /Fichas

Auditoria

GET /Auditoria
POST /Auditoria
DELETE /Auditoria

(sem PATCH, por decisão de manter integridade do histórico de auditorias já lançadas)

Operações

GET /Operacoes
GET /Operacoes/:id
POST /Operacoes
PATCH /Operacoes
DELETE /Operacoes

Estrutura do repositório
schema.sql — definição das tabelas do banco de dados.
seed.sql — dados de teste para ambiente de desenvolvimento.
docs/ — diagramas de fluxo de telas, arquitetura e lista de rotas.
README.md — este arquivo.


Pedro — projeto pessoal, desenvolvido como parte de estudos em Engenharia de Software