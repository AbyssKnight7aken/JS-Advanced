function heroicInventory(inputData) {

    const heroes = inputData.reduce((acc, curr) => {
        const [name, level, items] = curr.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        }
        acc.push(hero);
        return acc;
    }, []);

    return JSON.stringify(heroes);

}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])); 