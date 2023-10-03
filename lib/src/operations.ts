
class Fraction {
    numerator: bigint;
    denominator: bigint;

    constructor(numerator: bigint | number | string, denominator?: bigint | number | string) {
        if (typeof numerator !== "bigint") {
            numerator = BigInt(numerator);
        }
        if (typeof denominator !== "bigint") {
            denominator = BigInt(denominator || 1);
        }

        // Make both numerator and denominator as small as possible
        const gcdValue = gcd(numerator, denominator);

        this.numerator = numerator / gcdValue;
        this.denominator = denominator / gcdValue;
    }

    valueOf() {
        return Number(this.numerator) / Number(this.denominator);
    }
}

function createFraction(numerator: bigint | number | string, denominator?: bigint | number | string) {
    return new Fraction(numerator, denominator);
}

function gcd(a: bigint, b: bigint) : bigint {
    if (b === 0n) {
      return a;
    }

    return gcd(b, a % b);
}

function lcm(a: bigint, b: bigint) : bigint {
    return a * b / gcd(a,b);
}

function add(f1: Fraction, f2: Fraction) {
    const newDenominator = lcm(f1.denominator, f2.denominator);
    const factor1 = newDenominator / f1.denominator;
    const factor2 = newDenominator / f2.denominator;
    const newNumerator = factor1 * f1.numerator + factor2 * f2.numerator;

    return new Fraction(newNumerator, newDenominator);
}

function subtract(f1: Fraction, f2: Fraction) {
    const newDenominator = lcm(f1.denominator, f2.denominator);
    const factor1 = newDenominator / f1.denominator;
    const factor2 = newDenominator / f2.denominator;
    const newNumerator = factor1 * f1.numerator - factor2 * f2.numerator;

    return new Fraction(newNumerator, newDenominator);
}

function multiply(f1: Fraction, f2: Fraction) {
    return new Fraction(f1.numerator * f2.numerator, f1.denominator * f2.denominator);
}

function divide(f1: Fraction, f2: Fraction) {
    return new Fraction(f1.numerator * f2.denominator, f1.denominator * f2.numerator);
}

function power(f: Fraction, power: bigint | number | string) {
    if (typeof power !== "bigint") {
        power = BigInt(power);
    }
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
