var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200,{
        'Content-Type': 'application/json'
    })
    var data = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(data));
})

server.listen(3000, '127.0.0.1');

console.log('Listenning on port 3000');