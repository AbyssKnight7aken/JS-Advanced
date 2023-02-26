const isOddOrEven = require('./02.evenOrOdd');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    //invalid input tests:
    it('should return undefined if the parameter is a number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined if the parameter is an object', () => {
        assert.equal(isOddOrEven({ name: 'Pedro', lastName: 'Sanchez' }), undefined);
    });
    it('should return undefined if the parameter is an arrray', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if the parameter is unefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    //valid input tests
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});