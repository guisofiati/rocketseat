function imprimirDado(dado) {
  console.log("outras tarefas");
  console.log(dado());
}

// imprimirDado(1);
// imprimirDado("ola");
// imprimirDado(true);
// imprimirDado([1, 2, 3, 4]);
// imprimirDado({ age: 25 });
imprimirDado(function () {
  return "Callback";
});

// também é uma callback
setTimeout(function () {
  console.log("depois de 1s");
}, 1000);
