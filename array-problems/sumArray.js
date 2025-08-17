//* 2. Find Sum of All Numbers
const numbers = [5, 12, 8, 130, 44, 2, 99];

let totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}
console.log(totalSum);