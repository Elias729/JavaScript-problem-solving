//* 4. Print Numbers Greater Than 5

const arrEven = [3, 7, 2, 9, 4, 5];
let total = 0;

for (let i = 0; i < arrEven.length; i++) {
    if (arrEven[i] > 5) {
        total += arrEven[i];
    }
}
console.log(total);