var http = require('http');
var fs = require('fs');

// Piping is the process by which byte data from one stream is sent to another stream

// Example 1: Taking data from the read stream to the write stream
var readStream = fs.createReadStream(__dirname + '/largetext.txt', 'utf-8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');
readStream.pipe(writeStream);

// Example 2: Bringing data from the read stream into a response
var server = http.createServer(function(req, res){
    // Open the stream
    var readStream = fs.createReadStream(__dirname + '/welcome.txt', 'utf-8');
    // Headers
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Display data on the browser
    readStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('Listenning on port 3000');


