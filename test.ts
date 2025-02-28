import { createFraction as f } from "./lib/main";


const f1 = f(2,2);
const f2 = f(1);

console.log("Equals:", f1.equals(f2));