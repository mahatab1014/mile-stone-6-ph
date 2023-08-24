// filter selects elements based on a condition and returns an array
// with the elements that fulfilled the condition
const numbers = [2, 3, 55, 54, 6, 45, 14];
const playersHight = [66, 45, 69, 60, 788, 68, 45, 44, 61, 62];
const results = playersHight.filter(h => h >= 60);
const oddHight = playersHight.filter(h => h % 2 === 1);
console.log(oddHight);