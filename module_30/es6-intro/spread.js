// :: Get normal number from Array using (...)
const newArray = [22, 3, 44, 55, 6, 7, 88];
console.log(newArray); // With Out Spread
console.log(...newArray); // With Spread
// console.log(Math.max(...newArray)); // Example how works

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Merges two arrays
console.log(mergedArray)