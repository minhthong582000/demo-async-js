
function printSecond() {
    console.log("Second");
}

// Ham print voi tham so la mot callback Function
function print(callback) {
    console.log("First");

    callback();
}

print(printSecond);