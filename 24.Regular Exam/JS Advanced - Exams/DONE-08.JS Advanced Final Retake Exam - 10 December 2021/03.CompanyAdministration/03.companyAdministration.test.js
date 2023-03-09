const companyAdministration = require('./03.companyAdministration');
const { assert } = require('chai');

describe("Tests companyAdministration funcionality", () => {

    describe("Tests hiringEmployee  funcionality", () => {
        it('throw an error: We are not looking for workers for this position.', () => {
            assert.throw(() => {companyAdministration.hiringEmployee('Don Baston','Izbomber',5)}, Error);
        });
        it('return not approved for this position.', () => {
            assert.equal(companyAdministration.hiringEmployee('Don Baston','Programmer',2), `Don Baston is not approved for this position.`);
        });
        it('return hired for this position.', () => {
            assert.equal(companyAdministration.hiringEmployee('Don Baston','Programmer',3), `Don Baston was successfully hired for the position Programmer.`);
        });
    });

    describe("Tests calculateSalary funcionality", () => {
        it('throw an error: Invalid hours.', () => {
            assert.throw(() => {companyAdministration.calculateSalary(-1)}, Error);
        });
        it('throw an error: Invalid hours.', () => {
            assert.throw(() => {companyAdministration.calculateSalary('1')}, Error);
        });
        it('return return salary', () => {
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });
        it('return return salary', () => {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
    });

    describe("Tests firedEmployee funcionality", () => {
        it('throw an error: Invalid index.', () => {
            assert.throw(() => {companyAdministration.firedEmployee(["Petar", "Ivan", "George"],3)}, Error);
        });
        it('throw an error: Invalid index.', () => {
            assert.throw(() => {companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-1)}, Error);
        });
        it('throw an error: Invalid index.', () => {
            assert.throw(() => {companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'1')}, Error);
        });
        it('throw an error: Invalid array.', () => {
            assert.throw(() => {companyAdministration.firedEmployee(1,1)}, Error);
        });
        it('return string', () => {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0), "Ivan, George");
        });
    });
});