import { unitToPx } from './unit-to-px';

describe('unitToPx(input [, unit [,factor]])', () => {
    it('is a function', () => {
        const actual = typeof unitToPx;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when no parameter are given', () => {
        const actual = unitToPx();
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when empty string is given', () => {
        const actual = unitToPx('');
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when input is not of type string', () => {
        const actual = unitToPx(4);
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when optional parameter unit is not of type string', () => {
        const actual = unitToPx('9px', 8);
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns empty string when optional parameter factor is not of type number', () => {
        const actual = unitToPx('9px', 'em', '9');
        const expected = '';
        expect(actual).toEqual(expected);
    });

    it('retruns "16px" when input is "1rem"', () => {
        const actual = unitToPx('1rem');
        const expected = '16px';
        expect(actual).toEqual(expected);
    });

    it('retruns "24px" when input is "1.5rem"', () => {
        const actual = unitToPx('1.5rem');
        const expected = '24px';
        expect(actual).toEqual(expected);
    });

    it('retruns "24px" when input is "1.5rem"', () => {
        const actual = unitToPx('1.5rem');
        const expected = '24px';
        expect(actual).toEqual(expected);
    });

    it('retruns "8px" when input is "0.5rem"', () => {
        const actual = unitToPx('0.5rem');
        const expected = '8px';
        expect(actual).toEqual(expected);
    });

    it('retruns "margin: 24px;" when input is "margin: 1.5rem;"', () => {
        const actual = unitToPx('margin: 1.5rem;');
        const expected = 'margin: 24px;';
        expect(actual).toEqual(expected);
    });

    it('retruns "margin: 24px;" when input is "margin: 1.5em;" and unit is "em"', () => {
        const actual = unitToPx('margin: 1.5em;', 'em');
        const expected = 'margin: 24px;';
        expect(actual).toEqual(expected);
    });

    it(`retruns "margin: 24px;" when input is "margin: 1em;"
        and unit is "em" and factor is 24`, () => {
        const actual = unitToPx('margin: 1em;', 'em', 24);
        const expected = 'margin: 24px;';
        expect(actual).toEqual(expected);
    });

    it('retruns "0" when input is "0rem"', () => {
        const actual = unitToPx('0rem');
        const expected = '0';
        expect(actual).toEqual(expected);
    });

    it('retruns "padding: 0 32px 8px" when input is "padding: 0 2rem 0.5rem"', () => {
        const actual = unitToPx('padding: 0 2rem 0.5rem');
        const expected = 'padding: 0 32px 8px';
        expect(actual).toEqual(expected);
    });

    it(`retruns "margin: 0;" when input is "margin: 0em;"
        and unit is "em" and factor is 24`, () => {
        const actual = unitToPx('margin: 0em;', 'em', 24);
        const expected = 'margin: 0;';
        expect(actual).toEqual(expected);
    });

    it('retruns "margin: 8px;" when input is "margin: .5rem;"', () => {
        const actual = unitToPx('margin: .5rem;');
        const expected = 'margin: 8px;';
        expect(actual).toEqual(expected);
    });
});
