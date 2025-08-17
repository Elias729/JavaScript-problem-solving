//* 1. Print Even Numbers Only

const numbers = [5, 12, 8, 130, 44, 2, 99];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}