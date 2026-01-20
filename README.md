

# 🏦 Desafio Morada – Caixa Eletrônico Fullstack

Este projeto simula o funcionamento de um **Caixa Eletrônico**. O usuário informa o valor que deseja sacar e o sistema calcula a menor quantidade de notas possível, utilizando cédulas de R$ 100, 50, 20, 10, 5 e 2.

---

## 🚀 Funcionalidades

* ✅ **Cálculo Otimizado:** Algoritmo que prioriza as maiores notas para o saque.
* ✅ **Validação de Entradas:** Impede saques de valores negativos, zero ou quantias impossíveis de serem atendidas com as notas disponíveis (ex: R$ 1,00 ou R$ 3,00).
* ✅ **Interface Responsiva:** Frontend simples e intuitivo desenvolvido com React e Vite.
* ✅ **API REST:** Backend desacoplado que pode ser testado via Postman ou Insomnia.

---

## 📂 Estrutura do Projeto

```text
morada-desafio/
├─ backend/
│  ├─ src/
│  │  ├─ server.ts          # Inicialização do Express
│  │  ├─ routes/
│  │  │  └─ routes.ts       # Definição dos endpoints
│  │  └─ services/
│  │     └─ Caixaeletronico.ts # Lógica de negócio (Cálculo das notas)
├─ frontend/
│  ├─ src/
│  │  ├─ App.tsx            # Interface do usuário
│  │  ├─ App.css            # Estilização
│  │  └─ main.tsx           # Entry point do React
└─ README.md

```

---

## 🛠️ Como rodar o projeto

### 1. Pré-requisitos

* Node.js instalado (versão 16 ou superior)
* Gerenciador de pacotes (NPM ou Yarn)

### 2. Configurando o Backend

```bash
cd backend
npm install
npm run dev

```

> O servidor iniciará em: `http://localhost:3333`

### 3. Configurando o Frontend

```bash
cd frontend
npm install
npm run dev

```

> O frontend iniciará em: `http://localhost:5173`

---

## 📡 API Endpoints

### **POST** `/caixa/saque`

Envia um valor e recebe a distribuição das notas.

**Corpo da Requisição (JSON):**

```json
{
  "valor": 180
}

```

**Resposta de Sucesso (200):**

```json
{
  "100": 1,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0
}

```

**Resposta de Erro (400):**

```json
{
  "error": "Não é possível sacar esse valor"
}

```

---

## 🧪 Testando com Postman

1. Abra o **Postman**.
2. Crie uma nova requisição do tipo **POST**.
3. Insira a URL: `http://localhost:3333/caixa/saque`.
4. Em **Headers**, certifique-se que `Content-Type` é `application/json`.
5. Em **Body**, selecione `raw` e escolha `JSON`. Digite o valor desejado.

---

## 💻 Tecnologias Utilizadas

* **Frontend:** React, Vite, TypeScript, CSS3.
* **Backend:** Node.js, Express, TypeScript.
* **Versionamento:** Git.


