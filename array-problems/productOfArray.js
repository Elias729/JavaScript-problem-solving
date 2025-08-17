//* Find Product of Array Elements

const array = [10, 20, 30, 40, 50];

let prod = 1;

for (let i = 0; i < array.length; i++) {
    prod *= array[i];
}
console.log(prod);