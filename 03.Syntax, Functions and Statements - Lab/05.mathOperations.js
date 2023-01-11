function mathOperations(num1, num2, operator) {

    const operators = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '**': num1 ** num2,
        '%': num1 % num2,
    }

    console.log(operators[operator]);

}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')