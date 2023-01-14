function sameNumber(num) {

    const arr = String(num).split('').map(Number);
    const isSame = arr.filter(n => n !== arr[0]).length ? false : true;
    const sum = arr.reduce((acc, n) => acc + n, 0);

    console.log(isSame);
    console.log(sum);

}

sameNumber(2222222)
sameNumber(1234)