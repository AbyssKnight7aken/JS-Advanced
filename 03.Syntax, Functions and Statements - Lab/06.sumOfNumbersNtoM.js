function sumOfNumbersNtoM(n, m) {

    let sum = 0;
    const num1 = Number(n);
    const num2 = Number(m);

    for (let index = num1; index <= num2; index++) {
        sum += index;
    }

    console.log(sum);

}

sumOfNumbersNtoM('1', '5')
sumOfNumbersNtoM('-8', '20')