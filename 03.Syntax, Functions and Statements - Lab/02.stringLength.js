function stringLength(firstString, secondString, thirdString) {

    const sum = firstString.length + secondString.length + thirdString.length;
    const averageSum = sum / 3;

    console.log(sum);
    console.log(Math.round(averageSum));

}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')