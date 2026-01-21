

# 🏦 Desafio Morada – Caixa Eletrônico 



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
# Instalar dependências de produção e tipos
npm install express cors
npm install -D typescript ts-node-dev @types/express @types/node @types/cors

# Inicializar o TypeScript (caso ainda não tenha o tsconfig.json)
npx tsc --init

# Iniciar o servidor em modo de desenvolvimento
npm run dev
  
```

> O servidor iniciará em: `http://localhost:3333`

### 3. Configurando o Frontend

```bash
cd frontend
npm install
npm create vite@latest . -- --template react-ts
npm install react-router-dom
npm install axios
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
## Testes/Postman
<img width="990" height="467" alt="Captura de tela 2026-01-19 205642" src="https://github.com/user-attachments/assets/aaebead1-fe20-4460-a975-875cde93dcc7" />
<img width="1365" height="726" alt="Captura de tela 2026-01-19 205620" src="https://github.com/user-attachments/assets/606042af-84a9-4957-a88f-c3d0003e95e4" />
<img width="1365" height="765" alt="Captura de tela 2026-01-19 205546" src="https://github.com/user-attachments/assets/8d1ea7b5-beec-4414-9e71-893698fffbeb" />
<img width="1361" height="722" alt="Captura de tela 2026-01-19 204904" src="https://github.com/user-attachments/assets/c9872810-79ec-4d87-9dbf-67e69b8bae3a" />
<img width="1352" height="679" alt="Captura de tela 2026-01-19 204013" src="https://github.com/user-attachments/assets/3530d793-4c45-4320-a945-1fec4a7bfd03" />

## Testes/Jest
<img width="740" height="458" alt="Captura de tela 2026-01-21 192503" src="https://github.com/user-attachments/assets/ba0b8d1b-055a-4b85-b7f5-2cc498d695e3" />
<img width="562" height="223" alt="Captura de tela 2026-01-21 192454" src="https://github.com/user-attachments/assets/198744ab-6ac5-4c5e-b428-e14fcb10584a" />








## 💻 Tecnologias Utilizadas

* **Frontend:** React, Vite, TypeScript, CSS3.
* **Backend:** Node.js, Express, TypeScript.
* **Versionamento:** Git.


