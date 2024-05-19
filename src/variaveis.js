// Variáveis podem ser declaradas usando (modo antigo var), let e const

var variavelGlobal = "Var"; // Escopo global ou de função
let variavelDeBloco = "Let"; // Escopo de bloco
const constante = "Const"; // Escopo de bloco, valor constante

// Exemplo de escopo de bloco
if (true) {
  let dentroBloco = "Dentro";
  console.log(dentroBloco); // Funciona
}

console.log(dentroBloco); // Erro: dentroBloco não está definido
