const { EventEmitter } = require('events');

const ev = new EventEmitter();
ev.setMaxListeners(4); //maximo de 4 ouvintes

ev.on('say something', (message) => console.log('i can hear you', message)); // ouvindo, ligado
// ev.once() -> so ouve uma unica vez, achou um ouvinte e parou
ev.emit('say something', "José"); // emitindo evento, alguem precisa ouvir
ev.emit('say more');
ev.emit('say more');
ev.emit('say more');
ev.emit('say something', "Maria");
ev.emit('say more');
ev.emit('say something', "Pedro");
ev.emit('say something', "João");