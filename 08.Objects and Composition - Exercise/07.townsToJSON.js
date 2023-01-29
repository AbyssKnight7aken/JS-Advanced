function townsToJSON(inputData) {

    const towns = [];

    for (let i = 1; i < inputData.length; i++) {
        const tokens = inputData[i].split(/\s*\|\s*/g);
        let [town, latitude, longitude] = [tokens[1], tokens[2], tokens[3]];
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        const currentObject = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        towns.push(currentObject);
    }

    console.log(JSON.stringify(towns));

}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])