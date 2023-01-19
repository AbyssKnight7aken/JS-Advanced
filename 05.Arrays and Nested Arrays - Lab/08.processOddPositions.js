function processOddPositions(inputArray) {

    // const resultArray = [];

    // for (let i = 1; i < inputArray.length; i += 2) {
    //     resultArray.push(inputArray[i] * 2);
    // }

    // return resultArray.reverse();

    return inputArray.filter((a, i) => i % 2 !== 0 ).map((a) => a * 2).reverse();

}
console.log(processOddPositions([10, 15, 20, 25])); 
console.log(processOddPositions([3, 0, 10, 4, 7, 3])); 