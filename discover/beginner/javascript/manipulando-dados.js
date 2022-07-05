// casting
console.log('9' + 1);
console.log(Number('9') + 1);

let string = "123"
console.log(string);
console.log(Number(string));

let number = 321;
console.log(String(number));

let word = "abcdefghijklmnopqrstuvwxyz";
console.log('A palavra tem', word.length, 'letras')

// console.log(number.length) -> erro
console.log(String(number).length)

// equivalente a Locale.SetDefault(Locale.US) e Sting.format("%.2f", numero") no java 
let numero = 31.45645
console.log(numero.toFixed(2).replace(".", ","))
// console.log(Number(numero.toFixed(2).replace(".", ","))) -> Not A Number

let word1 = "   programar     "
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())
console.log(word1.trimStart());
console.log(word1.trimEnd())
console.log(word1.trim())

let phrase = "I cant believe that"
console.log(phrase.includes('love')) // false
console.log(phrase.includes('Believe')) // false case sensitivity
console.log(phrase.includes('believe')) // true

let palavra = "I want to drik"
let novaPalavraEmArray = palavra.split(" ")
let palavraComUnderscore = novaPalavraEmArray.join("_").toLowerCase()
console.log(palavraComUnderscore);

// let myArray = ['a', 'b', 'c']
// console.log(myArray)
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
console.log(myArray.length)

// transformar uma string em elementos de uma array
let novaPalavra = 'arvore'
console.log(Array.from(novaPalavra));

let techs = ["java", "javascript", "php", "ruby", "python"]
console.log(techs)
techs.push("html") // adicionar um novo elemento no FINAL da array
console.log(techs)
techs.unshift("css") // adicionar um novo elemento no COMEÇO do array
console.log(techs)
techs.pop() // remove da ultima posição 
console.log(techs)
techs.shift() // remove da posição 0
console.log(techs)
console.log(techs.slice(1, 5)) // 'criar' uma nova array so com alguns elementos do array
techs.splice(0, 3) // retirar elementos do array. (apartir de x tirar y elementos)
console.log(techs)
let index = techs.indexOf('python')
console.log(index)

// ternary
let idade = 18
const canDrive = idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';
console.log(canDrive)