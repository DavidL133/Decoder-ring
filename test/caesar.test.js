// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("caesar tests", () => {
    it('Should return "wklv lv d vhfuhw"', () => {
    const actual = caesar("this is a secret", 3);
    const expected = "wklv lv d vhfuhw";
    expect(actual).to.equal(expected);
    });
    it("Should return false if the shift value is equal to 0" , () => {
    const actual = caesar("wklv lv d vhfuhw", 0);
    expect(actual).to.be.false; 
    });
    it("Should return false if the shift value is less than -25", () => {
        const actual = caesar("wklv lv d vhfuhw", -26);
        expect(actual).to.be.false; 
    });
    it("Should return false if the shift value is greater than 25", () => {
        const actual = caesar("wklv lv d vhfuhw", 26);
        expect(actual).to.be.false; 
    });  
    it("Should return false if the shift value is not present", () => {
        const actual = caesar("wklv lv d vhfuhw", );
        expect(actual).to.be.false; 
    });  
    it('Should return "david"', () => {
        const actual = caesar("david", -3);
        const expected = 'axsfa';
        expect(actual).to.equal(expected);
    });
});
