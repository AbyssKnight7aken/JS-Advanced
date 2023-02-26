const mathEnforcer = require('./04.mathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer function tests', () => {
    describe('addFive function tests', () => {
        //Incorrect input tests:
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.addFive(['TEST']) === undefined);
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return undefined with undefinded', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        //Correct input tests:
        it('Positive integer number +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Negative integer number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });
        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });
    describe('subtractTen function tests', () => {
        //Incorrect input tests:
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.subtractTen(['TEST']) === undefined);
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return undefined with undefinded', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        //Correct input tests:
        it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });
        it('Negative integer number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });
    describe('sum of two numbers function tests', () => {
        //Correct input tests:
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        });
        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(7.6, 2.4) === 10);
        });
        //Incorrect input tests:
        it('Test with string and number', () => {
            assert(mathEnforcer.sum('URGAZMUS', 63) === undefined);
        });
        it('Test with number and string', () => {
            assert(mathEnforcer.sum(999, 'HOMING STITS') === undefined);
        });
    });
});