// Document Object Model (DOM)

// console.log(document.getElementById('blog-title')). erro pois nao ta em um evento
// getElementById -> id='teste'
// querySelector -> pega por seletor (igual no css). Se tiver mais de um ele pega o priemiro que achar
// querySelectorAll -> pega todos os elementos/atributos do seletor indicado
window.onload = () => {
    console.log('')
    console.log('getElementById:')
    console.log(document.getElementById('blog-title'));
    console.log('')
    console.log('querySelector:')
    console.log(document.querySelector('.sub-title'));
    console.log('')
    console.log('querySelectorAll:') // return NodeList -> aceita forEach
    console.log(document.querySelectorAll('[src]'));
    console.log('')
}

// getElementsByClassName -> varias classes com mesmo nome
const elementsByClasse = document.getElementsByClassName('product');
console.log('getElementByClassName:') // HTMLCollection
console.log(elementsByClasse);
console.log('')

// textContent // innerText -> Mudar / Acrescentar valor
// innerHTML -> aceita mais tags dentro do texto
const elemento = document.querySelector('.product');
console.log(elemento);
elemento.textContent = 'PRODUTO';
console.log(elemento);

// getElementByTagName -> tag html (h1, meta, p...)
console.log('getElementByTagName:')
console.log(document.getElementsByTagName('meta'));
console.log('')

const getInputElement = document.querySelector('input');
console.log('Input value:')
console.log(getInputElement);
console.log('')
getInputElement.value = 'Escreva algo aqui';

const btn = document.querySelector('button')
btn.setAttribute('disabled', 'disabled');

 // adicionando atributos 
 //const footer = document.querySelector('footer')
 //footer.setAttribute('id', 'my-footer')
 //const footerID = document.getElementById('#my-footer')
 //console.log('Get id added by dom:')
 //console.log(footerID);

 // pegando atributos
 console.log('get attribute (id) do h1:')
 console.log(document.querySelector('h1').getAttribute('id'));
 console.log('')

 //removendo atributo
 console.log('remove attribute do h1:')
 document.querySelector('h1').removeAttribute('id');
 console.log(document.getElementById('.blog-title'));
 console.log('')

 // adicionando styles
 const corpo = document.querySelector('body')
 corpo.style.backgroundColor = '#0ff';

 // getParent
 const paisDoElemento = document.querySelector('p')
 console.log('pais do elemento:');
 console.log(paisDoElemento.parentElement); 
 console.log(paisDoElemento.parentNode); 
 console.log('')

 // getChild
const filhosDoElementoBody = document.querySelector('body')
console.log('filhos do elemento body:')
console.log(filhosDoElementoBody.childNodes); // conta os espaços como text
console.log(filhosDoElementoBody.children); // somento os elementos html
console.log('primeiro filho:', filhosDoElementoBody.firstElementChild);
console.log('primeiro filho:', filhosDoElementoBody.firstChild);
console.log('ultimo filho:', filhosDoElementoBody.lastElementChild); 
console.log('ultimo filho:', filhosDoElementoBody.lastChild);  
console.log('irmao:', filhosDoElementoBody.nextElementSibling);  

// criar elemento
const titulo = document.createElement('h1');
titulo.innerHTML = "Ola dev! <strong> Bem vindo <strong>";

// add o elemento criado na pagina
const addElement = document.querySelector('body')
//addElement.append(titulo);
addElement.prepend(titulo); // adicionar na primeira posicao do elemento
//addElement.insertBefore(titulo, document.querySelector('script')); // adicionar no meio