function plusMinus(arr) {
    let positive = arr.filter(x => x > 0).length;
    let negative = arr.filter(x => x < 0).length;
    let zeros = arr.filter(x => x === 0).length;

    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zeros / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);