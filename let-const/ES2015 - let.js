for(let i = 50; i < 55; i++) {
    //Runs outer loop 5 times
    for (let i = 1; i < 10; i++) {
        //Runs inner loop 10 times
        console.log(i); //1, 2, [...], 10
    }
    //i value returns to outer loop
}
console.log(i); //ReferenceError