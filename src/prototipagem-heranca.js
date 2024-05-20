// Prototipagem
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Olá, meu nome é ${this.nome}`);
};

let kayke = new Pessoa("kayke", 19);
kayke.falar(); // Olá, meu nome é kayke

// Herança
function Funcionario(nome, idade, cargo) {
  Pessoa.call(this, nome, idade); // Chamar o construtor da classe Pessoa
  this.cargo = cargo;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.trabalhar = function () {
  console.log(`${this.nome} está trabalhando com ${this.cargo}`);
};

let maria = new Funcionario("Maria", 25, "Desenvolvedora");
maria.falar(); // Olá, meu nome é Maria
maria.trabalhar(); // Maria está trabalhando como Desenvolvedora
