function evenPositionElement(inputArray) {
    
    const resultArray = [];

    for (let i = 0; i < inputArray.length; i+=2) {
        resultArray.push(inputArray[i]);
    }

    console.log(resultArray.join(' '));

}

evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])