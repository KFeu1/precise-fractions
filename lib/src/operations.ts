import { Fraction } from "./fraction-class";
import { _toFraction } from "./helper";
import { lcm } from "./utils";

/**
 * Create a new fraction.
 *
 * If the denominator is omitted, it becomes 1 by default.
 *
 * @param numerator bigint | number | string
 * @param denominator bigint | number | string
 * @returns Fraction
 */
function createFraction(numerator: bigint | number | string, denominator?: bigint | number | string) {
    return new Fraction(numerator, denominator);
}

/**
 * Add two or more fractions
 *
 * @param fractions Array with at least 1 of type Fraction | bigint | number | string
 * @returns
 */
function add(...fractions: [Fraction | bigint | number | string, ...Array<Fraction | bigint | number | string>]) {
    if (fractions.length === 1) return _toFraction(fractions[0]);

    let newFraction = _add(fractions[0], fractions[1]);

    for (let i = 2; i < fractions.length; i++) {
        newFraction = _add(newFraction, fractions[i]);
    }

    return newFraction;
}

function _add(f1: Fraction | bigint | number | string, f2: Fraction | bigint | number | string) {
    f1 = _toFraction(f1);
    f2 = _toFraction(f2);

    const newDenominator = lcm(f1.denominator, f2.denominator);
    const factor1 = newDenominator / f1.denominator;
    const factor2 = newDenominator / f2.denominator;
    const newNumerator = factor1 * f1.numerator + factor2 * f2.numerator;

    return new Fraction(newNumerator, newDenominator);
}

/**
* Subtract a fraction from another
*
* @param f1 Fraction
* @param f2 Fraction
* @returns Fraction
*/
function subtract(f1: Fraction | bigint | number | string, f2: Fraction | bigint | number | string) {
    f1 = _toFraction(f1);
    f2 = _toFraction(f2);

    const newDenominator = lcm(f1.denominator, f2.denominator);
    const factor1 = newDenominator / f1.denominator;
    const factor2 = newDenominator / f2.denominator;
    const newNumerator = factor1 * f1.numerator - factor2 * f2.numerator;

    return new Fraction(newNumerator, newDenominator);
}

/**
 * Multiply two or more fractions
 *
 * @param fractions Array with at least 1 of type Fraction | bigint | number | string
 * @returns
 */
function multiply(...fractions: [Fraction | bigint | number | string, ...Array<Fraction | bigint | number | string>]) {
    let numerator = 1n;
    let denominator = 1n;

    for (let i = 0; i < fractions.length; i++) {
        const f = _toFraction(fractions[i]);
        numerator *= f.numerator;
        denominator *= f.denominator;
    }

    return new Fraction(numerator, denominator);
}

/**
 * Divide a fraction by another
 *
 * @param f1 Fraction
 * @param f2 Fraction
 * @returns Fraction
 */
function divide(f1: Fraction | bigint | number | string, f2: Fraction | bigint | number | string) {
    f1 = _toFraction(f1);
    f2 = _toFraction(f2);
    return new Fraction(f1.numerator * f2.denominator, f1.denominator * f2.numerator);
}

/**
 * Raise a fraction to a power
 *
 * @param f Fraction
 * @param power Exponent
 * @returns Fraction
 */
function power(f: Fraction | bigint | number | string, power: bigint | number | string) {
    f = _toFraction(f);
    power = BigInt(power);
    return new Fraction(f.numerator ** power, f.denominator ** power);
}

export {
    createFraction,
    add,
    subtract,
    multiply,
    divide,
    power,
};
