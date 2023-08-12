import Artist from '../src/Artist.js'

export function testRegistrations(n) {
    return fibonacci(n);
}


export function testArtists(n) {
    const results = [];
    for (var i = 1; i < (n + 1); i++) {
        results.push(new Artist(i, `John Doe ${i}`));
    }
    return results;
}


// returns an array with the fibonacci sequence of a particular length with duplicates removed
// ex fibonacci(10) = 0, 1, 2, 3, 5, 8, 13, 21, 34, 55
function fibonacci(length) {
    const results = [0, 1];
    var current = 2;
    var next = 3;
    for (var i = 0; i < length - 2; i++) {
        results.push(current);  
        const temp = next;
        next = current + next;
        current = temp;
    }
    return results;
}