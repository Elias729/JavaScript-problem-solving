//* Convert Array Elements to Uppercase

const arr = ["a", "b", "c", "d", "e"];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
}
console.log(newArr);