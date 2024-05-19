// Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Maçã

// Métodos de Arrays
frutas.push("Uva"); // Adiciona no final
console.log(frutas);
frutas.pop(); // Remove o último
console.log(frutas);

// Objetos
let pessoa = {
  nome: "Kayke",
  idade: 19,
  falar: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

console.log(pessoa.nome); // Kayke
pessoa.falar(); // Olá, meu nome é Kayke
