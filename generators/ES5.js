function myFakeGenerator(initial) {
    var values = [];
    for(var i = 1; i <= 3; i++) {
        initial++;
        values.push(initial);
    }

    return values;
}

var gen = myFakeGenerator(10);
for(var i = 0; i < gen.length; i++) {
    console.log(gen[i]); //11, 12, 13
}