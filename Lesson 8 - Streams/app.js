var fs = require('fs');

// A stream is an abstract interface for working with streaming data in Node.js

// Write streams - allow nodejs to write data to a stream
// Read streams - allow nodejs to read data from a stream
// Duplex - allow nodjs to read and write to a stream

var readStream = fs.createReadStream(__dirname + '/largetext.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

// Emmited everytime the stream received a data
// 1. Read the data
// 2. Fill the Buffer with a chunk (part of the data)
// 3. Sent it to the stream
readStream.on('data', function(chunk) {
    console.log('New chunk received:');
    console.log(chunk);
    // Write this chunk of data on writeme.txt
    writeStream.write(chunk);
})

// Note. fs.readData is less efficiently because it waits for
// the whole file to be read/written. Streams dont do that,
// they separete the file in chunks.

