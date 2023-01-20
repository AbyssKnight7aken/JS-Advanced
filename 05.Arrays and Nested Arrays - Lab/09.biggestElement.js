function biggestElement(matrix) {

    const biggestNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        biggestNumbers.push(Math.max(...matrix[i]));
    }

    return Math.max(...biggestNumbers);

}

console.log(biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]));

console.log(biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])); 