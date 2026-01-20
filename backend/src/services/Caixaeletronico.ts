export type ResultadoSaque = {
  [nota: number]: number;
};

export function sacar(valor: number): ResultadoSaque {
  if (!Number.isInteger(valor) || valor <= 0) {
    throw new Error("Digite um valor inteiro positivo");
  }

  const notas = [100, 50, 20, 10, 5, 2];
  let restante = valor;
  const resultado: ResultadoSaque = {};

  for (const nota of notas) {
    const qtd = Math.floor(restante / nota);
    resultado[nota] = qtd;
    restante -= qtd * nota;
  }

  if (restante !== 0) {
    throw new Error("Não é possível sacar esse valor");
  }

  return resultado;
}
