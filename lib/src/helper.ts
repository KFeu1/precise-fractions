import { Fraction } from "./fraction-class";

export function _toFraction(f: Fraction | bigint | number | string) {
    if (f instanceof Fraction) return f;
    return new Fraction(f);
}
