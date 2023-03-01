function juiceFlavors(inputArray) {

    const juiceMap = new Map();
    const bottleMap = new Map();
    const input = inputArray.slice();


    while (input.length) {
        let entry = input.shift();
        const [fruit, quantity] = entry.split(' => ');

        if (!juiceMap.has(fruit)) {
            juiceMap.set(fruit, 0);
        }
        let qurrentQuantity = juiceMap.get(fruit);
        juiceMap.set(fruit, qurrentQuantity += Number(quantity));
        if (juiceMap.get(fruit) >= 1000) {
            let bottlesNumber = Math.floor(juiceMap.get(fruit) / 1000);
            bottleMap.set(fruit, bottlesNumber);
        }
    }

    const result = Array.from(bottleMap)
        .forEach(x => {
            console.log(`${x[0]} => ${x[1]}`)
        });
}


juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])