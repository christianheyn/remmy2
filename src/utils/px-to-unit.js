export const pxToUnit = (input = '', unit = 'rem', factor = 16) => {
    const pxRegex = /([0-9]{0,}px)/g;

    if (
        typeof input !== 'string' ||
        typeof unit !== 'string' ||
        typeof factor !== 'number'
    ) {
        return '';
    }

    return input.replace(pxRegex, (match) => {
        if (match === '0px') {
            return '0';
        }

        const num = parseFloat(match.replace('px', ''), 10);

        const result = `${(num/factor)}${unit}`;

        return result.replace('NaN', '0');
    });
};
