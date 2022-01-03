// Project Euler Problem 2
function sumEvenFibonacci() {
    var sumVals = 0;
    var a = 1 
    var b = 2;

    sumVals += b;

    while (a + b < 4000000) {
        let newVal = a + b;

        if (newVal % 2 === 0) {
            sumVals += newVal;
            console.log(sumVals);
        }
        a = b;
        b = newVal;
    }

    return sumVals;
}

console.log(sumEvenFibonacci())