// var = escopo global, mesmo declarando em um escopo de bloco, podera ser impressa fora
// let = declarando uma let em um escopo de bloco, ela so podera ser impressa dentro do bloco
// const = mesma coisa que o let porem imutavel

console.log('teste');

var clima = "quente";
console.log(clima);

clima = "frio";
console.log(clima);

console.log(typeof clima)

let temperatura = 30;
console.log(temperatura);

temperatura = 12;
console.log(temperatura);

console.log(typeof temperatura)

const dia_semana = 12
console.log(dia_semana);

// dia_semana = 13;
// console.log(dia_semana); // erro pois é const

console.log("*******");

{
    var x = 10;
    console.log(x);
}

console.log(x);

{
    let y = 20;
    console.log(y);
}

// console.log(y); -> erro

{
    const z = 30;
    console.log(z);
}

// console.log(z) -> erro

console.log("*******");
console.log('Hoisting')
// ele retira a declaração do bloco e joga para cima, antes da variavel ser chamada
// porem, só é declarado (var a) e no bloco so é atribuido o valor
// funciona apenas com o var, com let e const temos que chamar so depois da declaração
console.log('existe "a" antes do bloco? ', a)

{
    var a = 10;
}

console.log('existe "a" depois do bloco? ', a)

console.log("*******");
let b = 1;
console.log(`b = ${b}`)

{
    b = 0;
    console.log(`b = ${b}`)
}

console.log(`b = ${b}`)

console.log("*******");
console.log("Agrupamento de declarações")
let age, isHuman;

age = 30;
isHuman = true;

console.log(typeof age + " " + age)
console.log(typeof isHuman, isHuman)
console.log(`A pessoa tem ${age}. É humano? ${isHuman}`);