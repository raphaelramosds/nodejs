// Nodejs has built-in modules

// Modules 'events' and 'util' are two examples
var events = require('events');
var util = require('util');

// 'events' makes variables being able to trigger an event
// Note. event  = function 
//       emitter = trigger the event

var myEmitter = new events.EventEmitter();

myEmitter.on('event', function (something) {
    console.log(`You've just said ${something}!`);
})

myEmitter.emit('event', 'hello');

// 'util' has classes based functionalities

// One of them is to make an object inherits properties of another
// So, let's create a class
class Person {
    constructor(name) {
        this.name = name;
    }
}

// And make it able to emmit events
util.inherits(Person, events.EventEmitter);

// Setting up the emitter
var james = new Person('James');
james.on('speak', function (message) {
    console.log(`${this.name} said ${message}`);
})

// So, just emmits
james.emit('speak', 'I can be a emitter')