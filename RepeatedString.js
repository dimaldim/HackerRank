function repeatedString(s, n) {
    let count = (str) => str.split('').filter(x => x === 'a').length;

    let d = Math.floor(n / s.length);
    let r = n - (s.length * d);

    return d * count(s) + count(s.substr(0, r));
}