import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use("/caixa", routes);

app.get("/", (req, res) => {
  res.send("API do backend rodando!");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
