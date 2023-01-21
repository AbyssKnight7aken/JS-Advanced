function printEveryNElementFromArray(array, number) {

    // const result = [];

    // for (let i = 0; i < array.length; i += number) {
    //     result.push(array[i]);
    // }

    // return result;

    return array.filter((_, index) => index % number === 0);

}

console.log(printEveryNElementFromArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));

console.log(printEveryNElementFromArray([
    'dsa',
    'asd',
    'test',
    'tset'],
    2));

console.log(printEveryNElementFromArray([
    '1',
    '2',
    '3',
    '4',
    '5'],
    6)); 