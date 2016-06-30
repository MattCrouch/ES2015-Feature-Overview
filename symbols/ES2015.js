/* Create symbol references */
const MY_SYMBOL = Symbol("Sun");
const ANOTHER_SYMBOL = Symbol("Moon");

/* Symbols equal each other, but other symbols regardless of description */
console.log(Symbol("Star") === Symbol("Star")); //false
console.log(MY_SYMBOL === MY_SYMBOL); //true
console.log(MY_SYMBOL === ANOTHER_SYMBOL); //false

/* Using symbols as a unique object key */
let symbolObject = {
    [MY_SYMBOL]: "This key is a symbol",
    "name": "This key is a string",
    9: "This key is a number"
};

/* Locating symbol keys in objects */
console.log(Object.getOwnPropertyNames(symbolObject)); //[ '9', 'name' ]
console.log(Object.getOwnPropertySymbols(symbolObject)); // [ Symbol(Sun) ]