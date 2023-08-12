var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
}

var adder = function(arr) {
    let sum = '';
    arr.forEach(element => {
        sum += element;
    });
    return `The sum of the elements is ${sum}`;
}

// Export a object with the desired methods and variables 
module.exports = {
    counter: counter,
    adder: adder
};
