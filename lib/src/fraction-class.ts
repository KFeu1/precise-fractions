import {
    add as addF,
    divide as divideF,
    multiply as multiplyF,
    power as powerF,
    subtract as subtractF,
} from "./operations";
import { gcd } from "./utils";

/**
 * Represents a fraction with numerator and denominator.
 *
 * Cast it to a number to get the fractional value as a Javascript number type.
 *
 * @property {bigint} numerator
 * @property {bigint} denominator
 *
 */
export class Fraction {
    numerator: bigint;
    denominator: bigint;

    /**
     * Create a fraction
     *
     * @param numerator bigint | number | string
     * @param denominator [bigint | number | string]
     */
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

    toString() {
        return `${this.numerator} / ${this.denominator}`;
    }

    /**
     * Add one ore more fractions or valuee to the caller
     *
     * @param fractions Array with at least 1 of type Fraction | bigint | number | string
     */
    add(...fractions: [Fraction | bigint | number | string, ...Array<Fraction | bigint | number | string>]) {
        const newFraction = addF(this, ...fractions);
        this.numerator = newFraction.numerator;
        this.denominator = newFraction.denominator;
    }

    /**
     * Subtract a fraction or value from the caller
     *
     * @param f Fraction | bigint | number | string
     */
    subtract(f: Fraction | bigint | number | string) {
        if (!(f instanceof Fraction)) {
            f = new Fraction(f);
        }
        const newFraction = subtractF(this, f);
        this.numerator = newFraction.numerator;
        this.denominator = newFraction.denominator;
    }

    /**
     * Multiply one ore more fractions or values
     *
     * @param fractions Array with at least 1 of type Fraction | bigint | number | string
     */
    multiply(...fractions: [Fraction | bigint | number | string, ...Array<Fraction | bigint | number | string>]) {
        const newFraction = multiplyF(this, ...fractions);
        this.numerator = newFraction.numerator;
        this.denominator = newFraction.denominator;
    }

    /**
     * Divide by another fraction or value
     *
     * @param f Fraction | bigint | number | string
     */
    divide(f: Fraction | bigint | number | string) {
        if (!(f instanceof Fraction)) {
            f = new Fraction(f);
        }
        const newFraction = divideF(this, f);
        this.numerator = newFraction.numerator;
        this.denominator = newFraction.denominator;
    }

    /**
     * Raise the fraction to a power
     *
     * @param p
     */
    power(p: bigint | number | string) {
        const newFraction = powerF(this, p);
        this.numerator = newFraction.numerator;
        this.denominator = newFraction.denominator;
    }
}