function townPopulation(inputData) {

    const towns = {};

    for (const line of inputData) {
        let [name, population] = line.split(' <-> ');
        if (name in towns == false) {
            towns[name] = 0;
        }
        towns[name] += Number(population);
    }

    console.log(Object.entries(towns)
        .map(([name, population]) => `${name} : ${population}`)
        .join('\n'));

}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])