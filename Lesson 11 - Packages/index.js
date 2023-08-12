var http = require('http');

var server = http.createServer(function(req, res){
    const now = new Date();
    console.log(`[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] requested at ${req.url}`);
    // Headers
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Display data on the browser
    res.end('I am listenning your changes');
});

server.listen(3000, '127.0.0.1');
console.log('Listenning on port 3000');