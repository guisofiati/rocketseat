// eventos (click, hover...) on... click, onblur...

function print() {
    console.log('Clickado');
}

function showMessage() {
    console.log('Test');
}

function hello() {
    console.log('Hello')
}

// eventos teclado
const getInput = document.querySelector('input');
getInput.onkeydown = function() {
    console.log('rodei')
}

const title = document.querySelector('h2');
// passando uma funcao como argumento
title.addEventListener('click', print)

title.addEventListener('click', function() {
    console.log('outro evento');
});

getInput.onkeyup = function(event) {
    console.log(event) // keyboard event / mouse event -> varias propriedades
}

// addEventListener e onclick
// melhor usar o eventListener pois podemos ter mais de um evento no elemento