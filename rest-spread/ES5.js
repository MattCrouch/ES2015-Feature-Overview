/* Rest example */
function returnsExtraParameters(first, second) {
    var rest = Array.prototype.slice.call(arguments, 2); //'arguments' is not an array, so cannot call slice() directly
    return rest;
}

returnsExtraParameters("a", "b", "c", "d", "e", "f"); //['c', 'd', 'e', 'f']

/* Spread example */
function takesThreeArguments(first, second, third) {
    return first + second + third;
}

var myArguments = [1, 10, 100];
takesThreeArguments.apply(null, myArguments); //111

/* Combine arrays using spread */
var firstArray = ["red", "blue", "yellow"];
var secondArray = ["gold", "silver", "crystal"];
var thirdArray = ["ruby", "sapphire", "emerald"];

var combinedArray = firstArray.concat(secondArray, thirdArray); //['red', 'blue', 'yellow', 'gold', 'silver', 'crystal', 'ruby', 'sapphire', 'emerald'];