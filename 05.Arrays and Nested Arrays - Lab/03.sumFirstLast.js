function sumFirstLast(inputData) {

    const inputArray = inputData.slice();
    let firstElement = Number(inputArray.shift());
    let lastElement = Number(inputArray.pop());
    let result = firstElement + lastElement;
    console.log(result);
    
}

sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])