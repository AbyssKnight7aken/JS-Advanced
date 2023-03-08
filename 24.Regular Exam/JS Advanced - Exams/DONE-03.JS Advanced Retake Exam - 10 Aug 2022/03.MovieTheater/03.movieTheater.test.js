const movieTheater = require('./03.movieTheater');
const { assert } = require('chai');

describe("movie theater", () => {

  describe("ageRestrictions", () => {

    it("should check age", () => {
      assert.equal(movieTheater.ageRestrictions("G"), `All ages admitted to watch the movie`);
    });

    it("should check age", () => {
      assert.equal(movieTheater.ageRestrictions("PG"), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
    });

    it("should check age", () => {
      assert.equal(movieTheater.ageRestrictions("R"), `Restricted! Under 17 requires accompanying parent or adult guardian`);
    });

    it("should check age", () => {
      assert.equal(movieTheater.ageRestrictions("NC-17"), `No one under 17 admitted to watch the movie`);
    });

    it("no age restrictions", () => {
      assert.equal(movieTheater.ageRestrictions("NASDF"), `There are no age restrictions for this movie`);
    });
  });

  describe("moneySpent", () => {
    it("purchase with applied discount", () => {
      assert.equal(movieTheater.moneySpent(5, ["Nachos"], ["Soda", "Water"]), "The total cost for the purchase with applied discount is 68.00");
    });

    it("purchase with applied discount", () => {
      assert.equal(movieTheater.moneySpent(3, ["Popcorn"], ["Soda", "Water"]), "The total cost for the purchase with applied discount is 42.80");
    });

    it("purchase with applied discount", () => {
      assert.equal(movieTheater.moneySpent(3, ["Popcorn"], ["Soda"]), "The total cost for the purchase with applied discount is 41.60");
    });

    it("purchase with applied discount", () => {
      assert.equal(movieTheater.moneySpent(3, ["Popcorn", "Nachos"], ["Water"]), "The total cost for the purchase with applied discount is 45.60");
    });

    it("purchase with applied discount", () => {assert.equal(movieTheater.moneySpent(3, ["Popcorn", "Nachos"], ["Soda"]), "The total cost for the purchase with applied discount is 46.40");
    });

    it("purchase with applied discount", () => {
      assert.equal(movieTheater.moneySpent(1, ["Popcorn"], ["Soda", "Water"]), "The total cost for the purchase is 23.50");
    });

    it("should throw Invalid input", () => {
      assert.throw(() => movieTheater.moneySpent(["adsf"], ["Popcorn"], ["Soda", "Water"]), "Invalid input");
      assert.throw(() => movieTheater.moneySpent(1, "sdfadf", ["Soda", "Water"]), "Invalid input");
      assert.throw(() => movieTheater.moneySpent(1, ["Popcorn"], 3), "Invalid input");
    });
  });

  describe("reservation", () => {

    it("valid check", () => {
      assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 2 }], 1), 2);
    });

    it("Invalid input", () => {
      assert.throw(() => movieTheater.reservation("string", 4), "Invalid input");
      assert.throw(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }], "ahsdkfafd"), "Invalid input");
    });
  });
});
