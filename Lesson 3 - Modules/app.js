// Modules are splits of your Nodejs application. 
// They're just JS files that built your application.

// The Global Object require returns a object that 
// contains all exported variables from the module 'lib'
const lib = require('./lib');

// Or... 
// const { counter, adder } = require('./lib')

console.log(lib.counter(['shaun', 'crystal', 'ryu']));
console.log(lib.adder(['shaun', 'crystal', 'ryu']))