/**
 * Returns the greatest common divisor of two numbers.
 * 
 * @param a 
 * @param b 
 */
function gcd(a: bigint, b: bigint): bigint {
    while (b !== 0n) {
      const temp = b;
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
function lcm(a: bigint, b: bigint): bigint {
    return (a / gcd(a,b)) * b;
}

export {
    gcd,
    lcm,
};
