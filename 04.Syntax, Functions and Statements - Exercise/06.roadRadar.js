function roadRadar(speed, zoneType) {

    const zones = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    };

    let differences = 0;
    let status = '';

    if (speed <= zones[zoneType]) {
        console.log(`Driving ${speed} km/h in a ${zones[zoneType]} zone`);
    } else {
        differences = speed - zones[zoneType];
        status = 'reckless driving';
        if (differences <= 20) {
            status = 'speeding';
        } else {
            if (differences <= 40) {
                status = 'excessive speeding';
            }
        }

        console.log(`The speed is ${differences} km/h faster than the allowed speed of ${zones[zoneType]} - ${status}`)
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')