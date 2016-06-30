/* Basic promise creation */
var myPromise = new Promise(function(resolve, reject) {
    var randomiser = Math.random();
    if(randomiser >= 0.5) {
        resolve(randomiser); //Promise is fulfilled
    } else {
        reject(Error("too low")); //Promise is rejected
    }
});

/* Promise usage */
myPromise.then(function(result) {
    //Transform the data for later usage
    return result.toFixed(2);
}).then(function(result) {
    console.log(result);
}).catch(function(error) {
    //Catch rejections anywhere within .then() calls
    console.warn(error)
});

/* Promise.all() and Promise.race() */
var takes1s = new Promise(function(resolve, reject) {
    //Resolve after 1 second
    setTimeout(resolve, 1000, "1 second promise");
});

var takes2s = new Promise(function(resolve, reject) {
    //Resolve after 2 seconds
    setTimeout(resolve, 2000, "2 second promise");
});

var takes3s = new Promise(function(resolve, reject) {
    //Resolve after 3 seconds    
    setTimeout(resolve, 3000, "3 second promise");
});

Promise.all([takes1s, takes2s, takes3s]).then(function(values) {
    //Waits for all promises to be fulfilled, or one to reject
    console.log(values); //["1 second promise", "2 second promise", "3 second promise"]
});

Promise.race([takes1s, takes2s, takes3s]).then(function(value) {
    //Acts on the first promise to be resolved (either fulfilled or rejected)
    console.log(value); //"1 second promise"
});