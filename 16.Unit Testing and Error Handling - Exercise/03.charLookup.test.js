const lookupChar = require('./03.charLookup');
const { assert } = require('chai');

describe('lookupChar function test', () => {
    //If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
    it('Return undefined if the first papameter is not string', () => {
        assert(lookupChar(100, 10) === undefined);
    });
    it('Return undefined if the first papameter is string and the second is decimal', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });
    it('Return undefined if the two papameters are of wrong types', () => {
        assert(lookupChar(100, '10.5') === undefined);
    });
    //If both parameters are of the correct type but the value of the index is incorrect
    //(bigger than or equal to the string length or a negative number) - return "Incorrect index". 
    it('The index is bigger than string lenght', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });
    it('The index is negative', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index');
    });
    it('Empty string as input', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });
    //If both parameters have correct types and values - return the character at the specified index in the string.
    it('Should return tha char at the given index', () => {
        assert(lookupChar('Love', 1) === 'o');
    });
    it('Should return tha char at the given index', () => {
        assert(lookupChar('L', 0) === 'L');
    });
});