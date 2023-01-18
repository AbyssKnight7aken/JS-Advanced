function biggerHalf(inputArray) {
    
    const half = Math.floor(inputArray.length / 2);
    const sortedArray = inputArray.sort((a, b) => a - b);
    const result = sortedArray.slice(half);
    return result;

}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));