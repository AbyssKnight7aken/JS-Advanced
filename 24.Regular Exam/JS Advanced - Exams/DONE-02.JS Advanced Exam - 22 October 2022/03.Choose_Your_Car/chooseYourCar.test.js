const chooseYourCar = require('./chooseYourCar');
const {assert} = require('chai');

describe ('chooseYourCar function tests:', () => {

    describe ('choosingType funcionality tests:', () => {
        it('Should throw error: Invalid Year!', () => {
            assert.throw(() => {chooseYourCar.choosingType('Sedan', 'black', 1899)}, Error, /Invalid Year!/);
        });
        it('Should throw error: Invalid type!', () => {
            assert.throw(() => {chooseYourCar.choosingType('Limo', 'black', 1994)}, Error, /This type of car is not what you are looking for./);
        });
        it('Should return OK', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), 'This red Sedan meets the requirements, that you have.');
        });
        it('Should rreturn too old...', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'white', 2009), 'This Sedan is too old for you, especially with that white color.');
        });
    });

    describe ('brandName funcionality tests:', () => {
        it('Should return redused array', () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0),'Toyota, Peugeot');
        })
        it('Should throw an error: Invalid Information', () => {
            assert.throw(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5)}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid Information', () => {
            assert.throw(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid Information', () => {
            assert.throw(() => {chooseYourCar.brandName(["BMW", "Toyota"], 2)}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid Information', () => {
            assert.throw(() => {chooseYourCar.brandName({name: 'Pedro'}, 2)}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid Information', () => {
            assert.throw(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '2')}, Error, /Invalid Information!/);
        })
    });

    describe ('CarFuelConsumption funcionality tests:', () => {
        it('Should throw an error: Invalid input', () => {
            assert.throw(() => {chooseYourCar.carFuelConsumption(30, 'test')}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid input', () => {
            assert.throw(() => {chooseYourCar.carFuelConsumption(0, 5)}, Error, /Invalid Information!/);
        })
        it('Should throw an error: Invalid input', () => {
            assert.throw(() => {chooseYourCar.carFuelConsumption('5', '5')}, Error, /Invalid Information!/);
        })
        it('Should return: The car burns too much fuel ', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 10), 'The car burns too much fuel - 10.00 liters!');
        })
        it('Should return: The car is efficient enough', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 6), 'The car is efficient enough, it burns 6.00 liters/100 km.');
        })
        it('Should return: The car is efficient enough', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), 'The car is efficient enough, it burns 7.00 liters/100 km.');
        })
    });
});