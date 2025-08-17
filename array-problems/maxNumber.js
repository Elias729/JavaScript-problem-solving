//* 3. Find Maximum Number

const numbers = [5, 12, 8, 130, 44, 2, 99];

let maxNum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}
console.log(maxNum);