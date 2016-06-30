/* Rest example */
function returnsExtraParameters(first, second, ...rest) {
    return rest;
}

console.log(returnsExtraParameters("a", "b", "c", "d", "e", "f")); //['c', 'd', 'e', 'f']

/* Spread example */
function takesThreeArguments(first, second, third) {
    return first + second + third;
}

let myArguments = [1, 10, 100];
console.log(takesThreeArguments(...myArguments)); //111

/* Combine arrays using spread */
let firstArray = ["red", "blue", "yellow"];
let secondArray = ["gold", "silver", "crystal"];
let thirdArray = ["ruby", "sapphire", "emerald"];

let combinedArray = [...firstArray, ...secondArray, ...thirdArray]; //['red', 'blue', 'yellow', 'gold', 'silver', 'crystal', 'ruby', 'sapphire', 'emerald'];