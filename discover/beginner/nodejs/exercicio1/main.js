const flag = require('./flag')

// node main --name "..." --greeting "..."
console.log(`O seu nome é ${flag('--name')}. ${flag('--greeting')}`);