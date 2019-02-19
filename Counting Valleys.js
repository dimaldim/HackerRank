function countingValleys(n, s) {
    let valleys = 0;
    let level = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') ++level;
        if (s[i] === 'D') --level;

        if (level === 0 && s[i] === 'U')
            ++valleys;
    }

    return valleys;
}