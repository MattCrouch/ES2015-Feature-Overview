const NAME = "Web Designer";
NAME += "Magazine"; //Not allowed - Throws a TypeError

for(let i = 1; i < 251; i++) {
    const NAME = "Web Designer Issue " + i; //Is allowed - Inside a new block scope
    console.log(NAME); 
}

const COLOURS = ["red", "blue"];

COLOURS = ["red", "blue", "yellow"]; //Not allowed - Throws a TypeError
COLOURS.push("yellow"); //Allowed - We are mutating the original const value

console.log(COLOURS); //["red", "blue", "yellow"]