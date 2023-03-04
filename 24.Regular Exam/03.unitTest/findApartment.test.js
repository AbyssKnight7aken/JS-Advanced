const findNewApartment = require('./findApartment');
const { assert } = require('chai');

describe('findNewApartment function tests:', () => {

    describe('isGoodLocation  funcionality tests:', () => {
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isGoodLocation(1, true) }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isGoodLocation('Sofia', 'NO') }, Error, /Invalid input!/);
        });
        it('Should return: This location is not suitable for you.', () => {
            assert.equal(findNewApartment.isGoodLocation('Caelid', true), 'This location is not suitable for you.');
        });
        it('Should return: There is no public transport in area.', () => {
            assert.equal(findNewApartment.isGoodLocation('Varna', false), 'There is no public transport in area.');
        });
        it('Should return: You can go on home tour!', () => {
            assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!');
        });
    });

    describe('isLargeEnough  funcionality tests:', () => {
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isLargeEnough(1, 80) }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isLargeEnough([], 80) }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isLargeEnough([40, 50, 60], '1') }, Error, /Invalid input!/);
        });
        it('Should return: return the changed array of apartments', () => {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 50), '50, 60');
        });
    });

    describe('isItAffordable  funcionality tests:', () => {
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isItAffordable('1', 1) }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isItAffordable(1, '1') }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isItAffordable(0, 1) }, Error, /Invalid input!/);
        });
        it('Should throw error: Invalid input!', () => {
            assert.throw(() => { findNewApartment.isItAffordable(1, 0) }, Error, /Invalid input!/);
        });
        it('Should return: You do not have enough money for this house!', () => {
            assert.equal(findNewApartment.isItAffordable(2,1), "You don't have enough money for this house!");
        });
        it('Should return: You can afford this home!', () => {
            assert.equal(findNewApartment.isItAffordable(1,2), 'You can afford this home!');
        });
        it('Should return: You can afford this home!', () => {
            assert.equal(findNewApartment.isItAffordable(1,1), 'You can afford this home!');
        });
    });
});