// Condicionais
let numero = 10;

if (numero > 15) {
  console.log("O número é maior que 15");
} else if (numero > 5) {
  console.log("O número é maior que 5, mas menor ou igual a 15");
} else {
  console.log("O número é menor ou igual a 5");
}

// Switch = A estrutura condicional switch permite executar um bloco de código diferente
let cor = "verde";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelha");
    break;
  case "azul":
    console.log("A cor é azul");
    break;
  case "verde":
    console.log("A cor é verde");
    break;
  default:
    console.log("Cor desconhecida");
}

// Laços
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

let j = 0;
while (j < 5) {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
}
