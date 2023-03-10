function subSum(arr, start, end) {

    if (Array.isArray(arr) === false) {
        return NaN;
    }

    const startIndex = Math.max(Number(start), 0);
    const endIndex = Math.min(Number(end), arr.length - 1);

    let result = arr.slice(startIndex, endIndex + 1)
    .reduce((a, x) => {
        if (typeof x !== 'number') {
            return NaN;
        }
        return a + x;
    }, 0);

    return result;

}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); //150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));  //3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); //NaN
console.log(subSum([], 1, 2)); //0
console.log(subSum('text', 0, 2)); //NaN