function carFactory(inputObject) {

    const carriage = {};
    const model = inputObject.model;
    const engine = {};
    let volume = 0;
    let power = Number(inputObject.power);

    if (power <= 90) {
        power = 90;
        volume = 1800;
    } else if (power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    engine.power = power;
    engine.volume = volume;

    carriage.type = inputObject.carriage;
    carriage.color = inputObject.color;

    const wheelsize = inputObject.wheelsize % 2 === 0 ? --inputObject.wheelsize : inputObject.wheelsize;

    const wheels = Array(4).fill(wheelsize);


    const car = { model, engine, carriage, wheels };

    return car;

}

console.table(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.table(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})); 