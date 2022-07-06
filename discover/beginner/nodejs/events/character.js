const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter); 

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`));
console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help');

const chaves = new Character('chaves');
chaves.on('tinha que ser o chaves mesmo!', () => console.log('Ninguem tem paciência comigo...'));
console.log('Tinha que ser o chaves denovo!');
chaves.emit('tinha que ser o chaves mesmo!');