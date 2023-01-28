function lowestPricesInCities(inputArray) {

    const inputData = inputArray.slice();

    const products = [];

    while (inputData.length > 0) {
        let [city, product, price] = inputData.shift().split(' | ');

        if (products.filter(x => x.product === product).length > 0) {

            const obj = products.find(x => x.product === product);

            if (obj.price > Number(price)) {
                obj.price = Number(price);
                obj.city = city;
            }
        } else {
            const obj = { product, city, price: Number(price) };
            products.push(obj);
        }

    }

    for (const product of products) {
        console.log(`${product.product} -> ${product.price} (${product.city})`);
    }

}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])
