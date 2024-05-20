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

async function buscarRepositorios() {
  try {
    let response = await fetch("https://api.github.com/users/kaykeeb3/repos");
    if (!response.ok) {
      throw new Error("Erro ao buscas as informações!");
    }
    let repositorios = await response.json();
    console.log(repositorios);
  } catch (error) {
    console.log(error.mensagem);
  }
}
buscarRepositorios();
