var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Don't worry, You'll learn about streams and piping later
    var readStream = fs.createReadStream(__dirname + '/index.html','utf-8');
    readStream.pipe(res);
})

server.listen(3000,'127.0.0.1');
console.log('Listenning on port 3000');