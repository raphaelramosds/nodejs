var fs = require('fs');

// Synchronous way
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

// Assynchronous way
fs.mkdir('stuff', function () {
    fs.readFile('readme.txt', 'utf-8', function (err, data) {
        fs.writeFile('./stuff/writeme.txt', data, 'utf-8', function (err) {
            console.log('File created');
        });
    })
})

// Removing file and directory assynchronously
fs.unlink('./stuff/writeme.txt', function() {
    fs.rmdir('stuff', function(err) {
        console.log('Directory removed');
    });
})