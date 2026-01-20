  import { useState } from "react";
  import axios from "axios";
  import "./App.css";

  type ResultadoSaque = { [nota: number]: number };

  function App() {

    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<ResultadoSaque | null>(null);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3333";

    async function handleSaque() {

      try {
        if (!valor || Number(valor) <= 0) {

          alert("Digite um valor inteiro positivo");
          setResultado(null);

          return;
        }

      const res = await axios.post(`${API_URL}/caixa/saque`, { valor: Number(valor) });

      setResultado(res.data);
      alert("Saque realizado com sucesso!");
    } catch (e: any) {

      if (e.response && e.response.data && e.response.data.error) {
        alert(e.response.data.error);

      } else {

        alert(e.message || "Erro inesperado");
      }
      setResultado(null);
    }
  }

  return (
    <div className="container-caixa">
      
      <h1 className="titulo-caixa">🏦 Caixa Eletrônico</h1>

      <div className="grupo-input">
        <input
          className="input-valor"
          type="number"
          placeholder="Digite o valor do saque"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <button className="botao-sacar" onClick={handleSaque}>
          Sacar
        </button>

      </div>

      {resultado && (
        <div className="resultado-notas">

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
