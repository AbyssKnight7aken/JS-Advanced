function diagonalAttack(inputData) {

    const matrix = inputData.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let reversedDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                mainDiagonalSum += matrix[row][col];
            }
            if (col === matrix.length - 1 - row) {
                reversedDiagonalSum += matrix[row][col];
            }
        }
    }

    if (mainDiagonalSum === reversedDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (col !== row && col !== matrix.length - 1 - row) {
                    matrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));

}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'])