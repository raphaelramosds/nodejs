var fs = require('fs');

/* Synchronous methods break the flow of the code */

// Syncronous method for reading files
var readme = fs.readFileSync('readme.txt', 'utf-8');

console.log(readme);

// Syncronous method for writing files
fs.writeFileSync('writeme.txt', readme)

/* Asynchronous methods don't break the flow of the code */

// Asyncronous method for reading files
var readme = fs.readFile('readme.txt','utf-8', function(err,data) {
    console.log('File read');
});

console.log('Wow, I came first!');

// Asyncronous method for writing files
fs.writeFile('async-file.txt','I\'ve just created a file', (err) => {
    console.log("File created")
});

console.log("Am I going to be executed first?");

// Deletting files
fs.unlink('writeme.txt');