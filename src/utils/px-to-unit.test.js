import { pxToUnit } from './px-to-unit';

describe('pxToUnit(input [, unit [,factor]])', () => {
    it('is a function', () => {
        const actual = typeof pxToUnit;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when no parameter are given', () => {
        const actual = pxToUnit();
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when empty string is given', () => {
        const actual = pxToUnit('');
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when input is not of type string', () => {
        const actual = pxToUnit(4);
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when optional parameter unit is not of type string', () => {
        const actual = pxToUnit('9px', 8);
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when optional parameter factor is not of type number', () => {
        const actual = pxToUnit('9px', 'em', '9');
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns "1rem" when input is "16px"', () => {
        const actual = pxToUnit('16px');
        const expected = '1rem';
        expect(actual).toEqual(expected);
    });

    it('retruns "1.5rem" when input is "24px"', () => {
        const actual = pxToUnit('24px');
        const expected = '1.5rem';
        expect(actual).toEqual(expected);
    });

    it('retruns "margin: 1.5rem;" when input is "margin: 24px;"', () => {
        const actual = pxToUnit('margin: 24px;');
        const expected = 'margin: 1.5rem;';
        expect(actual).toEqual(expected);
    });

    it('retruns "margin: 1.5em;" when input is "margin: 24px;" and unit is "em"', () => {
        const actual = pxToUnit('margin: 24px;', 'em');
        const expected = 'margin: 1.5em;';
        expect(actual).toEqual(expected);
    });

    it(`retruns "margin: 1em;" when input is "margin: 24px;"
        and unit is "em" and factor is 24`, () => {
        const actual = pxToUnit('margin: 24px;', 'em', 24);
        const expected = 'margin: 1em;';
        expect(actual).toEqual(expected);
    });

    it('retruns "0" when input is "0px"', () => {
        const actual = pxToUnit('0px');
        const expected = '0';
        expect(actual).toEqual(expected);
    });

    it(`retruns "margin: 0;" when input is "margin: 0px;"
        and unit is "em" and factor is 24`, () => {
        const actual = pxToUnit('margin: 0px;', 'em', 24);
        const expected = 'margin: 0;';
        expect(actual).toEqual(expected);
    });
});
