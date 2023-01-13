function aggregateElements(inputArray) {

    const sum = inputArray.reduce((a, b) => a + b, 0);
    let invertedSum = 0;
    inputArray.forEach(el => { invertedSum += 1 / el });
    const concatSum = inputArray.reduce((a, b) => a.concat(b), '');
    console.log(sum);
    console.log(invertedSum);
    console.log(concatSum);

}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])