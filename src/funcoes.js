// Declaração de função
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Mundo")); // Olá, Mundo!

// Função anônima
let saudacaoAnonima = function (nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacaoAnonima("Kayke")); // Olá, Mundo!

// Função de seta (Arrow Function)
let saudacaoArrow = (nome) => `Olá, ${nome}!`;
console.log(saudacaoArrow("Pedro")); // Olá, Mundo!
