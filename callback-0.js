
function printSecond () {
    console.log("Second");
}

function print (callback) {
    console.log("First");

    callback();
}

print( printSecond );