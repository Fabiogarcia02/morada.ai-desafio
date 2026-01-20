import { Router, Request, Response } from "express";
import { sacar, type ResultadoSaque } from "../services/Caixaeletronico";

const router = Router();

router.post("/saque", (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Body está vazio" });
    }

    const { valor } = req.body;

    if (valor === undefined) {
      return res.status(400).json({ error: "Digite um valor" });
    }

    const resultado: ResultadoSaque = sacar(Number(valor));
    res.json(resultado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
