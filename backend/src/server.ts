import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
const PORT = 3333;

// Middleware para habilitar CORS e JSON
app.use(cors());
app.use(express.json()); // ← ESSENCIAL

// Rotas
app.use("/caixa", routes);

app.get("/", (req, res) => res.send("Servidor rodando!"));

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
