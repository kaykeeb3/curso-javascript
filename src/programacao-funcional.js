// Funções de Alta Ordem
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map((numeros) => numeros * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// Funções Puras
function soma(a, b) {
  return a + b; // Não altera valores externos
}

console.log(soma(1, 2)); // 3
