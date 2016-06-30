/* Basic generator example */
function* myGenerator(initial) {
    for(let i = 1; i <= 3; i++) {
        initial++;
        yield initial;
    }
}

let gen = myGenerator(10);
console.log(gen.next()); //{ value: 11, done: false }
console.log(gen.next()); //{ value: 12, done: false }
console.log(gen.next()); //{ value: 13, done: false }
console.log(gen.next()); // value: undefined, done: true }