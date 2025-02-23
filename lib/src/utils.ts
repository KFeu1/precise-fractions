/**
 * Returns the greatest common divisor of two numbers.
 * 
 * @param a 
 * @param b 
 */
function gcd(a: number, b: number): number;
function gcd(a: bigint, b: bigint): bigint;
function gcd<T extends bigint | number>(a: T, b: T): T {
    while (b !== 0n) {
      const temp = b;
      // @ts-expect-error
      b = a % b;
      a = temp;
    }
    return a;
}

/**
 * Returns the least common multiple of two numbers.
 * 
 * @param a 
 * @param b 
 */
function lcm(a: number, b: number): number;
function lcm(a: bigint, b: bigint): bigint;
function lcm<T extends bigint | number>(a: T, b: T): T {
    // @ts-expect-error
    return (a / gcd(a,b)) * b;
}

export {
    gcd,
    lcm,
};
