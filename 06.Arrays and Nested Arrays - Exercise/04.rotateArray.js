function rotateArray(array, rotations) {

    let r = rotations;

    if (rotations > array.lenght) {
        r = Math.ceil(rotations / array.lenght);
    }

    for (let i = 0; i < r; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));

}

rotateArray([
    '1',
    '2',
    '3',
    '4'],
    2)

rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)