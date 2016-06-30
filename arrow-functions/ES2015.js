/* Basic Example */
const COLOURS = ["red", "blue", "yellow"];
console.log(COLOURS.map(colour => colour.toUpperCase())); //["RED", "BLUE", "YELLOW"]

/* Multiple Parameters */
const A = 151;
const B = 100;
const ADDER = (x, y) => x + y;

console.log(ADDER(A, B)); //251

/* Block Body Syntax */
const BLOCK_BODY = (x, y) => {
    z = x * y;
    z;
}

const BLOCK_BODY_RETURN = (x, y) => {
    z = x * y;
    return z;
}

console.log(BLOCK_BODY(3,2)); //undefined
console.log(BLOCK_BODY_RETURN(3,2)); //6

/* Returning Objects */
const OBJECT_MAKER = () => {
    name: "An Object"
};
const OBJECT_MAKER_PAREN = () => ({
    name: "An Object"
});

console.log(OBJECT_MAKER()); //undefined
console.log(OBJECT_MAKER_PAREN()); //{ name: 'An Object' }

/* Lexical 'this' */
function Group(scores) {
    //'this' refers to Group
    this.scores = scores;
    this.pass = 70;
    this.passes = 0;

    this.scores.forEach(score => {
        if(score >= this.pass) { //'This' refers to Group, not forEach function
            this.passes++; //Adjusts value within Group
        }
    });
}

group = new Group([55, 89, 94, 67, 71]);
console.log(group.passes); //3