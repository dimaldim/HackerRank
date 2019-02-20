function simpleArraySum(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));