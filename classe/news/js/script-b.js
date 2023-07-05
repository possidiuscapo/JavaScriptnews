`user strict`
// import { z as zScripta } from "./script-a.js";// zScriptA est un alias pour la variable "z" exporter; 

import { z as zScripta, add, soustract, mutiply, divide } from "./script-a.js"
let y = 10;

let z = 20 + zScripta;

console.log(z);
console.log(add(12, 8));
console.log(soustract(12, 5));
console.log(mutiply(12, 5));
console.log(divide(12, 2));