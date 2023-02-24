function argumentInfo() {

    const data = {};

    const input = Array.from(arguments)
        .forEach(arg => {
            console.log(`${typeof arg}: ${arg}`);
            if (!data[typeof arg]) {
                data[typeof arg] = 0;
            }
            data[typeof arg]++;
        });

    const keys = Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .forEach(key => { console.log(`${key} = ${data[key]}`); });

}

//argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)