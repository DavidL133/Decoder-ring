// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require('../src/polybius');
describe('polybius tests', () => {
    it("should translates the letters i and j to 42", () => {
        let actual = polybius('Jupiter Jumping Jacks');
        let expected = '42545342445124 42542353423322 4211315234';
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to i/j", () => {
        expect(polybius('42', false)).to.eql('i/j');
    });
    it("should leave spaces as is when decoding", () => {
        let actual = polybius('Room for milk');
        let expected = '24434323 124324 23421352';
        expect(actual).to.equal(expected);
    });
    it("should ignore Capital letters", () => {
        let actual = polybius('CAPItal aNd LoWeR CaSe');
        let expected = '31115342441113 113341 1343255124 31113451';
        expect(actual).to.equal(expected);
    });
});