function diagonalSum(matrix) {

    let diagonalSum = 0;
    let reverseDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {

        const currentRow = matrix[row];

        for (let colomn = 0; colomn < currentRow.length; colomn++) {

            const element = Number(currentRow[colomn]);

            if (colomn === row) {
                diagonalSum += element;
            }

            if (colomn === matrix.length - 1 - row) {
                reverseDiagonalSum += element;
            }

        }

    }

    console.log(diagonalSum, reverseDiagonalSum);

}

diagonalSum(
    [[20, 40],
    [10, 60]])

diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])