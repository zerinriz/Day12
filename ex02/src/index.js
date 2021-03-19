function myCounter(n) {
    if (n < 1) {
        return []
    } else {

        var counter = myCounter(n - 1);
        counter.unshift(n);
        return counter;
    }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;