
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3333;


app.use(cors());
app.use(express.json());


app.use("/caixa", routes);


const frontendPath = path.join(__dirname, "../../frontend/build");
app.use(express.static(frontendPath));


app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
