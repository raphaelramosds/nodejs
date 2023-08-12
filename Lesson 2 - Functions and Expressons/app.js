// Regular Javascript function
function sayHi() {
    console.log('Hi');
}

sayHi();

// Function Expression: variables equal to functions
var sayBye = function() {
    console.log("Bye");
}

sayBye();

// Callbacks
function callFunction(callback) {
    callback();
}

callFunction(sayBye)