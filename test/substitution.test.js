// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');
describe('substitution tests', () =>{
    it('should be a function', () => {
        expect(substitution).to.be.a("function");
    });
    it('should return false if alphabet is null', () =>{
        let actual = substitution('testtesttest', '');
        expect(actual).to.be.false;
    });
    it('should have parameter of exactly 26 characters', () =>{
        let actual = substitution('password', '<bc$efghijklmn@pqr!tuvw^-*');
        expect(actual).to.equal('p<!!w@r$');
    });
    it('should have spaces when decoding', () =>{
        let actual = substitution('pda wbosbp cbwwynb', 'pemo*nijbuhvygctfxrdz-swaq');
        expect(actual).to.equal('top secret message');
    });
    it('should ignore capital letters', () =>{
        let actual = substitution('CaPiTaL', '$emo*nijsuhvyqct@xrdz-bwag');
        expect(actual).to.equal('m$tsd$v');
    });
});