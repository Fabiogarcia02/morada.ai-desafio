
🏦 Desafio Morada – Caixa Eletrônico Fullstack
Descrição do projeto

Este projeto é um Caixa Eletrônico desenvolvido em fullstack:

Frontend: React + Vite + TypeScript

Backend: Node.js + Express + TypeScript

Funcionalidades:

Recebe um valor de saque pelo frontend (ou via Postman)

Calcula a quantidade de notas necessárias para atender o valor

Valida entradas inválidas (valores negativos, 0 ou impossíveis de sacar)

Retorna o resultado no frontend ou via JSON

Estrutura do projeto
morada-desafio/
├─ backend/
│  ├─ src/
│  │  ├─ server.ts          # Servidor Express
│  │  ├─ routes/
│  │  │  └─ routes.ts       # Rota POST /caixa/saque
│  │  └─ services/
│  │     └─ Caixaeletronico.ts  # Lógica do saque
│  ├─ package.json
│  └─ tsconfig.json
├─ frontend/
│  ├─ src/
│  │  ├─ App.tsx            # Componente principal
│  │  ├─ App.css            # Estilos
│  │  └─ main.tsx           # Entrada do React
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ vite.config.ts
├─ .gitignore
└─ README.md

Rodando o projeto localmente
1. Backend
cd backend
npm install
npm run dev


O servidor vai rodar em: http://localhost:3333

Rotas disponíveis:

GET / → Teste simples (retorna "Servidor rodando!")

POST /caixa/saque → Recebe { "valor": number } e retorna JSON com notas

2. Frontend
cd frontend
npm install
npm run dev


O frontend roda normalmente em: http://localhost:5173

Interface simples para digitar o valor do saque e ver o resultado

Testando com Postman

Abra o Postman

Crie uma requisição POST:

URL: http://localhost:3333/caixa/saque
Headers: Content-Type → application/json
Body (raw → JSON):
{
  "valor": 150
}


Respostas esperadas:

Valor válido:

{
  "100": 1,
  "50": 1,
  "20": 0,
  "10": 0,
  "5": 0,
  "2": 0
}


Valor impossível de sacar (ex: 1):

{
  "error": "Não é possível sacar esse valor"
}


Valor negativo ou 0:

{
  "error": "Digite um valor inteiro positivo"
}

Tecnologias utilizadas

Frontend: React, Vite, TypeScript, CSS

Backend: Node.js, Express, TypeScript

Controle de versão: Git

Observações

Projeto está configurado para rodar frontend e backend juntos em pastas separadas
