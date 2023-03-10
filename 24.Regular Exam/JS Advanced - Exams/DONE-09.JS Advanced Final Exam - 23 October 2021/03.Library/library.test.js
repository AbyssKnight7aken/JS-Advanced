const library = require('./library');
const { assert } = require('chai');

describe("Tests library funcionality", () => {

    describe("Tests calcPriceOfBook funcionality", () => {
        it('throw an error: "Invalid input', () => {
            assert.throw(() => {library.calcPriceOfBook(1, 1990)}, Error);
        });
        it('throw an error: "Invalid input', () => {
            assert.throw(() => {library.calcPriceOfBook('Ti li si tova', 19.90)}, Error);
        });
        it('should return price with 50% dicount', () => {
            assert.equal(library.calcPriceOfBook('Ti li si tova', 1980), `Price of Ti li si tova is 10.00`);
        });
        it('should return full price', () => {
            assert.equal(library.calcPriceOfBook('Ti li si tova', 1981), `Price of Ti li si tova is 20.00`);
        });
    });

    describe("Tests findBook  funcionality", () => {
        it('throw an error: No books currently available', () => {
            assert.throw(() => {library.findBook([],'Ti li si tova')}, Error);
        });
        it('should return: The book you are looking for is not here!', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Ti li si tova'), 'The book you are looking for is not here!');
        });
        it('should return: "We found the book you want."', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), 'We found the book you want.');
        });
    });

    describe("Tests arrangeTheBooks  funcionality", () => {
        it('throw an error: "Invalid input"', () => {
            assert.throw(() => {library.arrangeTheBooks(5.5)}, Error);
        });
        it('throw an error: "Invalid input"', () => {
            assert.throw(() => {library.arrangeTheBooks(-1)}, Error);
        });
        it('should return: "Great job, the books are arranged."', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });
        it('should , return: "Insufficient space, more shelves need to be purchased."', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        });
    });
});
