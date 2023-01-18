function smallestTwoNumbers(inputArray) {

    // let newArraw = inputArray.sort((a, b) => { return a - b });
    // console.log(newArraw.slice(0, 2).join(` `));
    
    const resultArray = [inputArray[0], inputArray[1]];

    for (let i = 2; i < inputArray.length; i++) {
        const currentNumber = inputArray[i];
        resultArray.push(currentNumber);
        let BiggestNumber = Math.max(...resultArray);
        let index = resultArray.indexOf(BiggestNumber);
        resultArray.splice(index, 1);
    }

    console.log(resultArray.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])