function greatestCommonDivisor(inputA, inputB) {

    const a = Math.abs(inputA);
    const b = Math.abs(inputB);
    const divisor = GetDivisor(a, b);

    function GetDivisor(a, b) {

        if (b > a) {
            let temp = a;
            a = b;
            b = temp;
        }

        while (true) {
            if (b === 0) return a;
            a %= b;
            if (a === 0) return b;
            b %= a;
        }
    }

    console.log(divisor);

}


greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)