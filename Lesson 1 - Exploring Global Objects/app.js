// Nodejs provides objects available in all modules you write
// These objects are called Global Objects.

// setInterval and clearInterval
var time = 0;
var timer = setInterval(function () {
    time += 2;
    console.log(time + ' seconds passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 1000);

// Your current directory
console.log(__dirname);

// Your current directory plus name of the file
console.log(__filename);
