//* Find Minimum Number

const arr = [5, 15, 25, 35, 45];
let minNum = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i]
    }
}
console.log(minNum);
