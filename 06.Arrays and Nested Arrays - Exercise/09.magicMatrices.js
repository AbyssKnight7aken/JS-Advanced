function magicMatrices(matrix) {

    const sum = matrix[0].reduce((a, b) => a + b);

    for (let row = 0; row < matrix.length; row++) {

        if (matrix[row].reduce((a, b) => a + b) !== sum) {
            return console.log(false);
        }

        let colSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            colSum += matrix[row][col];
        }

        if (colSum !== sum) {
            return console.log(false);
        }

    }

    console.log(true);

}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])