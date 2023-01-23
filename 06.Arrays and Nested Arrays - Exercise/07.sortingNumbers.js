function sortingNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let newArray = [];

    while (sortedArray.length !== 0) {
        newArray.push(sortedArray.shift());
        newArray.push(sortedArray.pop());
    }

    return newArray;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 