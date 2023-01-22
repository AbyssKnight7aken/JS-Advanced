function extractIncreasingSubsequence(array) {

    let maxNumber = array[0];
    // let arrayLength = array.length;
    // let newArray = [array[0]];

    // for (let i = 1; i < arrayLength; i++) {
    //     let currentNumber = array[i];
    //     if (currentNumber >= maxNumber) {
    //         newArray.push(currentNumber);
    //         maxNumber = currentNumber;
    //     }
    // }

    // return newArray;

    return array.reduce((acc, currentElement) => {
        if (maxNumber <= currentElement) {
            acc.push(currentElement);
            maxNumber = currentElement;
        }
        return acc;
    }, []);

}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1])); 