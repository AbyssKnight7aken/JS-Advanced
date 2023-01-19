function pieceOfPie(stringArray, startSection, endSection) {

    const startIndex = stringArray.indexOf(startSection);
    const endIndex = stringArray.indexOf(endSection);
    const resultArray = stringArray.slice(startIndex, endIndex + 1);
    return resultArray;

}

pieceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
pieceOfPie(
    [
        'Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')