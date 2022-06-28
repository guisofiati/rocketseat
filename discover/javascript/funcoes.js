function printPhrases() {
  console.log("Bom dia");
  console.log("Bom tarde");
  console.log("Bom noite");
}

printPhrases();

// function anonymous/expression
const sum = function (number1, number2) {
  // nao e recomendavel usar a variavel sem um identificador (let, const, var)
  let total = number1 + number2;
  return total;
};

let number1 = 3;
let number2 = 5;

console.log(`a soma de ${number1} e ${number2} é ${sum(3, 5)}`);
//console.log(total);

// hoisting - so com function statement
sayOtherWord();

function sayOtherWord() {
    console.log('alguma coisa');
} 

// arrow function
const sayMyName = (name) => {
  console.log(name);
};

sayMyName("Guilherme");

// callback function (funcao que esta passando uma funcao )
function sayWord(word) {
  console.log("antes de executar o callback");
  word();
  console.log("depois de executar a callback");
}

sayWord(() => {
  console.log("apple");
});

// constructor function
function Pessoa(nome) {
  this.nome = nome;
  this.walk = function() {
    return this.nome + " esta andando";
  };
}
const p1 = new Pessoa("Joao");
const p2 = new Pessoa("Maria");
console.log(p1);
console.log(p2);
console.log(p1.walk());
console.log(p2.walk());