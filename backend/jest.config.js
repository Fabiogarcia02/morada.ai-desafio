module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Essa linha abaixo garante que ele procure em qualquer lugar do projeto
  testMatch: ["**/*.test.ts"] 
};