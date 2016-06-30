(function() {
    for(var i = 50; i < 55; i++) {
        //Create a new scope so our inner definition of i does not override our outer definition 
        (function() {
            for (var i = 1; i < 10; i++) {
                //i has value from 1 to 10
                console.log(i);
            }
        })();
        //i has value from 50 to 55
    }
})();

console.log(i); //Throws a ReferenceError as our i is no longer in scope