function criarContador() {
  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
  };
}

let contador_1 = criarContador();
contador_1(); // 1
contador_1(); // 2

let contador_2 = criarContador();
contador_2(); // 1
