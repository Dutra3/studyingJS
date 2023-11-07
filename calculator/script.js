let calc = require("./calc");
let calc2 = require("./calc2");

let mult = calc2.mult;
let sum = calc2.sum;
let minus = calc2.minus;
let div = calc2.div;

let args = process.argv.slice(2);

const a = Number(args[1]);
const b = Number(args[2]);
let c = "";

if (args[0] == 's') {
    c = calc.sum(a, b);
} else if (args[0] == 'm') {
    c = calc.mult(a,b);
} else if (args[0] == 'n') {
    c = calc.minus(a, b);
} else if (args[0] == 'd') {
    c = calc.div(a, b);
} else if (args[0] == 'sum') {
    c = sum(a, b);
} else if (args[0] == 'mult') {
    c = mult(a,b);
} else if (args[0] == 'minus') {
    c = minus(a, b);
} else if (args[0] == 'divi') {
    c = div(a,b);
} else {
    c = "Invalid Option";
}

console.log(c);