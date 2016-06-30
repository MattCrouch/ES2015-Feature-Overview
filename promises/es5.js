/* Simply use callbacks instead */
function useCallbacks(success, error) {
    var randomiser = Math.random();
    if(randomiser >= 0.5) {
        success(randomiser);
    } else {
        error(Error("too low"));
    }
}

function success(result) {
    result = result.toFixed(2);
    console.log(result);
}

function error(error) {
    console.warn(error);
}

useCallbacks(success, error);