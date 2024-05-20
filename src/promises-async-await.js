// Promises
let minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true; // (false) simula uma falha
  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu erro!");
  }
});

minhaPromise
  .then((mensagem) => {
    console.log(mensagem); // Deu certo
  })
  .catch((mensagem) => {
    console.log(mensagem); // Deu erro
  });

// Async/Await
async function minhaFuncao() {
  try {
    let resultado = await minhaPromise;
    console.log(resultado); // Deu certo
  } catch (erro) {
    console.log(erro); // Deu erro
  }
}

minhaFuncao();
