class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const products = [];
        for (const product of vegetables) {
            let [type, quantity, price] = product.split(' ');

            const obj = this.availableProducts.find(x => x.type == type);

            if (obj) {
                obj.quantity += Number(quantity);
                if (Number(price) > obj.price) {
                    obj.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity: Number(quantity), price: Number(price) });
                products.push(type);
            }
        }
        return 'Successfully added' + ' ' + products.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            const obj = this.availableProducts.find(x => x.type == type);

            if (!obj) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (Number(quantity) > obj.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`); 
            }

            totalPrice += quantity * obj.price;
            obj.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const obj = this.availableProducts.find(x => x.type == type);

        if (!obj) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > obj.quantity) {
            obj.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            obj.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        const result = ['Available vegetables:'];
        this.availableProducts.sort((a, b) => a.price - b.price)
        .map(x => result.push(`${x.type}-${x.quantity}-$${x.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

