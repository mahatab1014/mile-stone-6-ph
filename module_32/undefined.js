/*
*****: 8 ways to get undefine
1. variable that is not initialized will give undefined
2. function with no returns
3. parameter that is not passed wil be undefined
4. if return has nothing on the right side will return undefined
5. property that doesnt exists on an object will give you undefined
6. accessing aray elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/

let first;
console.log(first);

// ::: 2
function second(a, b) {
  const total = a + b;
}
console.log(second());

// ::: 3
function third(a, b, c, d) {
  console.log(a, b, c, d);
}
third(1, 2);

// ::: 4
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegative(2, -3));

// ::: 5
const fifth = { id: 2, name: "MahTab Hossain", age: 23 };
console.log(fifth.age, fifth.wife);

// ::: 6,7
const sixth = [4, 5, 6, 77, 67, 2];
// you should not do it. Instead use splice
delete sixth[1];
console.log(sixth[1], sixth[4], sixth[23]);

// ::: 8
const eighth = undefined;
console.log(undefined);

const ninth = null;
const data = { result: [], updated: null };

console.log(typeof undefined);
console.log(typeof null);