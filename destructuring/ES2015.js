/* Basic array destructuring example */
let exampleString = "This is a destructuring example";
let splitString = exampleString.split(" "); //[ 'This', 'is', 'a', 'destructuring', 'example' ]

let [a,b,c,d,e] = splitString;
console.log(a,c,e); //'This', 'a', 'example'

/* Basic object destructuring example */
let exampleObject = {
    firstName: "Matt",
    lastName: "Crouch",
    age: 25
};

let {firstName, lastName, age} = exampleObject;
console.log(firstName, lastName, age); //'Matt', 'Crouch', 25

/* Nested object destructuring example */
let parentObject = {
    name: "New and Exciting things in ES2015",
    tags: [
        "ES5",
        "ES6",
        "ES2015",
        "ES7",
        "JavaScript"
    ],
    author: {
        firstName: "Matt",
        lastName: "Crouch",
        age: 25
    }
};

let {
    name,
    tags: [
        firstTag,
        secondTag,
        ...otherTags //Rest operator collects the rest
    ],
    author: {
        firstName: authorFirstName, //Decide the name of a variable by supplying it as a key to the destructuring object
        lastName: authorLastName,
        age: authorAge
    }
} = parentObject;

console.log(name); //'New and Exciting things in ES2015'
console.log(firstTag); //'ES5'
console.log(secondTag); //'ES6'
console.log(otherTags); //[ 'ES2015', 'ES7', 'JavaScript' ]
console.log(authorFirstName); //Matt
console.log(authorLastName); //Crouch
console.log(authorAge); //25

/* Object shorthand gotcha */
//ES2015 includes a new shorthand syntax for defining objects...
let varName = "var value";
let anotherVarName = "another var value";
console.log({ varName, anotherVarName }); // { varName: 'var value', anotherVarName: 'another var value' }

//...which causes issues when destructuring...
{ varName, anotherVarName } = { varName: "second var value", anotherVarName: "another second var value"}; //SyntaxError

//...to resolve this, put the entire statement in parentheses
({ varName, anotherVarName } = { varName: "second var value", anotherVarName: "another second var value"});
console.log(varName, anotherVarName); // second var value, another second var value

/* Swapping variables around */
let x = "X";
let y = "Y";
[x, y] = [y, x];

console.log(x, y); //'Y', 'X'