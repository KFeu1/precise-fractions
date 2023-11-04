function gcd(a: bigint, b: bigint) {
    while (b !== 0n) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
}

function lcm(a: bigint, b: bigint) {
    return (a / gcd(a,b)) * b;
}

export {
    gcd,
    lcm,
};
