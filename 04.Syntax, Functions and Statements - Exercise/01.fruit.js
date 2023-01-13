function fruit(type, weight, price) {
    
    const weightKG = weight / 1000;
    const finalPrice = weightKG * price;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${type}.`);

}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)