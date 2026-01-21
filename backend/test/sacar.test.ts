import { sacar } from '../src/services/Caixaeletronico';


  describe('Teste de logica caixa eletronico', () => {

    it('deve retornar as notas corretas para 180 reais', () => {
    const resultado = sacar(180);
   expect(resultado).toEqual({ 100: 1, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
    });

  it('deve dar erro se o valor não for múltiplo das notas', () => {

    expect(() => sacar(1)).toThrow("Não é possível sacar esse valor");
  });
});