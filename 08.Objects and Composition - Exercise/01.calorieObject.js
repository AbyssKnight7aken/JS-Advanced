function calorieObject(inputData) {

    return inputData.reduce((acc, current, index) => {
        if (index % 2 === 0) {
            acc[current] = Number(inputData[index + 1])
        }
        return acc;
    }, {})

}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])); 