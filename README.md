# What this library does
It allows you to work with precise fractions, by keeping their nominator and denominator values when doing operations.

## Usage

Import the package
```ts
import { createFraction as f } from 'fraction';
```

Create a fraction
```ts
// The fraction can be initialized with numbers, strings and bigints
const myFraction = f(2,3);
const myFraction = f("2","3");
const myFraction = f(2n,3n);
const myFraction = f(2n,"3");
```

Use any of the provided operations:
- add
- subtract
- multiply
- divide
- power

by either importing them from the package, or directly on the fraction, but this will alter the fraction you are calling the method with:

```ts
import { add } from 'fraction';
const f1 = f(2,3);
const f2 = f(3,4);
const summedFraction = add(f1,f2);
```

or to alter the caller-fraction
```ts
const f1 = f(2,3);
f1.add(3)
// or
f1.add(f(3)); // If the denominator is omitted, it becomes 1 by default.
```

If you want to get the value of a fraction as a number, just cast is as such:

```ts
const f1 = f(2,3);
console.log(+f1) // Outputs 0.6666666666666666
```

You can also cast it to a string:

```ts
const f1 = f(2,3);
console.log(`${f1}`) // Outputs '2 / 3'
```

