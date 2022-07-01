// Document Object Model (DOM)

// console.log(document.getElementById('blog-title')). erro pois nao ta em um evento
// getElementById -> id='teste'
// querySelector -> pega por seletor (igual no css). Se tiver mais de um ele pega o priemiro que achar
// querySelectorAll -> pega todos os elementos/atributos do seletor indicado
window.onload = () => {
    console.log('getElementById:')
    console.log(document.getElementById('blog-title'));
    console.log('querySelector:')
    console.log(document.querySelector('.sub-title'));
    console.log('querySelectorAll:') // return NodeList -> aceita forEach
    console.log(document.querySelectorAll('[src]'));
}

// getElementsByClassName -> varias classes com mesmo nome
const elementsByClasse = () => (document.getElementsByClassName('product'));
console.log('getElementByClassName:') // HTMLCollection
console.log(elementsByClasse());

// getElementByTagName -> tag html (h1, meta, p...)
console.log('getElementByTagName:')
console.log(document.getElementsByTagName('meta'));