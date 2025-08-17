//* 5. Find Sum of Odd Numbers

const arrOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < arrOdd.length; i++) {
    if (arrOdd[i] % 2 !== 0) {
        sum += arrOdd[i];
    }
}
console.log(sum);