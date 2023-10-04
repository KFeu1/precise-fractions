import { Fraction } from "./fraction-class";

export function _toFraction(f: Fraction | bigint | number | string) {
    return (f instanceof Fraction) ? f : new Fraction(f);
}
