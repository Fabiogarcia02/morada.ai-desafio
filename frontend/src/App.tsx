import { useState } from "react";
import "./App.css";

type ResultadoSaque = { [nota: number]: number };

function App() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState<ResultadoSaque | null>(null);

  async function handleSaque() {
    try {
      if (!valor || Number(valor) <= 0) {
        alert("Digite um valor inteiro positivo");
        setResultado(null);
        return;
      }

      const res = await fetch("http://localhost:3333/caixa/saque", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor: Number(valor) }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro ao sacar");
        setResultado(null);
        return;
      }

      setResultado(data);
      alert("Saque realizado com sucesso!");
    } catch (e: any) {
      alert(e.message || "Erro inesperado");
      setResultado(null);
    }
  }

  return (
    <div className="atm-container">
      <h1 className="atm-title">🏦 Caixa Eletrônico</h1>

      <div className="atm-input-group">
        <input
          className="atm-input"
          type="number"
          placeholder="Digite o valor do saque"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className="atm-button" onClick={handleSaque}>
          Sacar
        </button>
      </div>

      {resultado && (
        <div className="atm-result">
          <h2>Notas entregues:</h2>
          <ul>
            {Object.entries(resultado)
              .filter(([_, qtd]) => qtd > 0)
              .map(([nota, qtd]) => (
                <li key={nota}>
                  <span>R$ {nota}</span> → <strong>{qtd}</strong> nota(s)
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
