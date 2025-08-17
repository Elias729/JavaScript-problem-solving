//* Create New Array with Square Roots

const number = [4, 9, 16, 25, 36, 49];
let sqr = [];

for (let i = 0; i < number.length; i++) {
    sqr.push(Math.sqrt(number[i]));
}
console.log(sqr);