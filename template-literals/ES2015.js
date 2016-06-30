/* Basic template literal example */
let name = "matt";
console.log(`Hi!
My name is ${name.toUpperCase()}`);
/*"Hi!
My name is MATT"*/

/* Object usage */
let animal = {
    name: "fido",
    species: "dog",
    noise: "bark",
}

console.log(`Hi, my name is ${animal.name}. I am a ${animal.species}. "${animal.noise.toUpperCase()}!"`);

/* Generate HTML */
let items = ["Cherry", "Strawberry", "Orange", "Apple", "Melon"];

let fruit = `<ul>
${items.map(item => `<li>${item}</li>`).join("\n\t")}
</ul>`;

console.log(fruit);
/*
<ul>
    <li>Cherry</li>
    <li>Strawberry</li>
    <li>Orange</li>
    <li>Apple</li>
    <li>Melon</li>
</ul>
*/

/* Tagged template literals */
let favourites = ["JS", "React", "CSS", "SASS", "Flash", "Chrome", "IE6", "Java Plugins"];
let banned = ["IE6", "Java Plugins", "Flash", "Table Layouts", "Fixed width"];

let myFavourite = censor `My favourite thing in the world is ${favourites[Math.floor(Math.random() * favourites.length)]}!`;

function censor(strings, ...placeholders) {
    //'placeholders' are any ${} encountered and their computed content
    //'strings' are the plain text in between them
    let complete = strings[0]; //Build a string
    for(let i = 0; i < placeholders.length; i++) {
        if(banned.indexOf(placeholders[i]) !== -1) {
            //Censor that word
            placeholders[i] = "****";
        }
        complete += placeholders[i] + strings[i+1];
    }

    return complete;
}

console.log(myFavourite); //"My favourite thing in the world is ****!"