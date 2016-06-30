/* Create a random string to reduce the likelyhood of clashes */
function generateRandomKey() {
    var generatedString = "";
    var possibleValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(var i = 0; i < 30; i++) {
        generatedString += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
    }

    return generatedString;
}

var uniqueLabel = generateRandomKey(); //Store value for reference later

var newObject = {
    [uniqueLabel]: "This key is a random string",
    "name": "This key is a string",
    9: "This key is a number"
}

console.log(Object.getOwnPropertyNames(newObject)); //[ '9', 'kZ5CwHACog2E5ozftRgN8di7K9kDPV', 'name' ]
console.log(newObject[uniqueLabel]) //"This key is a random string"