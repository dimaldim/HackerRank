function compareTriplets(a, b) {
    let alicePts = 0;
    let bobPts = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePts++;
        } else if (a[i] < b[i]) {
            bobPts++;
        }
    }
    return [alicePts, bobPts];
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));