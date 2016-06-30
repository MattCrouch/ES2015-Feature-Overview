/* Basic array example */
var exampleString = "This is an ES5 example";
var splitString = exampleString.split(" "); //[ 'This', 'is', 'an', 'ES5', 'example' ]

var a = splitString[0];
var b = splitString[1];
var c = splitString[2];
var d = splitString[3];
var e = splitString[4];
console.log(a,c,e); //'This', 'an', 'example'

/* Basic object example */
var exampleObject = {
    firstName: "Matt",
    lastName: "Crouch",
    age: 25
};

var firstName = exampleObject.firstName;
var lastName = exampleObject.lastName;
var age = exampleObject.age;
console.log(firstName, lastName, age); //'Matt', 'Crouch', 25

/* Nested object destructuring example */
var parentObject = {
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

var name = parentObject.name;
var firstTag = parentObject.tags[0];
var secondTag = parentObject.tags[1];
var otherTags = parentObject.tags.slice(2);
var authorFirstName = parentObject.author.firstName;
var authorLastName = parentObject.author.lastName;
var authorAge = parentObject.author.age;


console.log(name); //'New and Exciting things in ES2015'
console.log(firstTag); //'ES5'
console.log(secondTag); //'ES6'
console.log(otherTags); //[ 'ES2015', 'ES7', 'JavaScript' ]
console.log(authorFirstName); //Matt
console.log(authorLastName); //Crouch
console.log(authorAge); //25

/* Swapping variables around */
var x = "X";
var y = "Y";

var z = x;
x = y;
y = z;

console.log(x, y); //'Y', 'X'