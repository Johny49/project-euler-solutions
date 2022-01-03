// Project Euler Problem 1
function sumMultiplesThreeFive() {
    var sumVals = 0;

    for (var i = 0; i < 1000; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sumVals += i;
        }
    }



    return sumVals;
}

console.log(sumMultiplesThreeFive());