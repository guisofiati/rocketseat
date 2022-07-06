console.log('test nodejs');
console.log(__dirname);
console.log(__filename);

const path = require('path');
console.log(path.basename(__filename));

console.log('importando meu proprio modulo:')
const myModule = require('./modulo');
console.log(myModule);

console.log('');
console.log(process.argv);