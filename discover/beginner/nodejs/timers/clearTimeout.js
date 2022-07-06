// cancelar um timeOut
const timeOut = 3000; // 3 segundos
const finished = () => console.log('done!');

let timer = setTimeout(finished, timeOut); // funcao sera executada depois do timeOut. Callback e assincronismo
console.log('Show'); 
clearTimeout(timer);