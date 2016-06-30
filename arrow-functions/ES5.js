/* Basic Example */
var colours = ["red", "blue", "yellow"];

console.log(colours.map(function(colour) {
    return colour.toUpperCase();
})); //["RED", "BLUE", "YELLOW"]

/* Multiple Parameters */
var a = 151;
var b = 100;
var adder = function(x, y) {
    return x + y;
}

console.log(adder(a, b)); //251

/* Block Body Syntax */
var block_body = function(x, y) {
    z = x * y;
    return z;
}

console.log(block_body(3,2)); //6

/* Returning Objects */
var object_maker = function() {
    return {
        name: "An Object"
    }
};

console.log(object_maker()); //{ name: 'An Object' }

/* Lexical 'this' */
function Group(scores) {
    //'this' refers to Group
    this.scores = scores;
    this.pass = 70;
    this.passes = 0;

    this.scores.forEach(function(score) {
        if(score >= this.pass) { 
            this.passes++;
        }
    }.bind(this)); //Changes context to refer to Group, not forEach
}

group = new Group([55, 89, 94, 67, 71]);
console.log(group.passes); //3