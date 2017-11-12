
export const unitToPx = (input = '', unit = 'rem', factor = 16) => {
    const pattern = '([0-9]{0,})(\\.){0,1}([0-9]{0,})';
    const unitRegex = new RegExp(`${pattern}${unit}`, 'g');

    if (
        typeof input !== 'string' ||
        typeof unit !== 'string' ||
        typeof factor !== 'number'
    ) {
        return '';
    }

    const result = input.replace(unitRegex, (match) => {
        if (match === `${0}${unit}`) {
            return '0';
        }

        const num = parseFloat(match.replace(unit, ''), 10);

        return `${parseInt(num * factor)}px`;
    });

    return result;
};
