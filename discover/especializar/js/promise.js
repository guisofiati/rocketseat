let accepted = false;

console.log("pedindo uber");
const promessa = new Promise((resolve, reject) => {
  if (accepted) {
    return promessa.resolve("corrida aceita");
  }
  return promessa.reject("corrida cancelada");
});

console.log("aguardando motorista...");

// depois de resolve ou reject
promessa
  .then((result) => console.log(result)) // se deu resolve
  .catch((erro) => console.log(erro)) // se for reject
  .finally(() => console.log("finalizado")); // fim de tudo
