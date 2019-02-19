function jumpingOnClouds(c) {
    let jumps = 0, i = 0;
    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] !== 1) {
            i += 1;
        }
        jumps += 1;
        i += 1;
    }
    return jumps;
}