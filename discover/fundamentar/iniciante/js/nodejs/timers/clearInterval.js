const timeOut = 1000; // 1 segundo
const checking = () => console.log('checked!');

let interval = setInterval(checking, timeOut);
setTimeout(() => clearInterval(interval), 3000);