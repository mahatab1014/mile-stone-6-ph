/**
***| 1.
  You have an odd array (array with odd numbers).
  [1, 3, 5, 7, 9]. Now covvert this array into an even array
  (array with even numbers). [2, 3, 6, 8, 10].
  Do this using forLoop & array.map() method.
  HINTS: add one to any odd number and it will become an even number
*/

const oddNumbers = [1, 3, 5, 7, 9];
for (const evenNumber of oddNumbers) {
  if (evenNumber % 2 === 1) {
    console.log(evenNumber + 1);
  }
}
const makeEvenNumbers = oddNumbers.map((plus) => plus + 1);
console.log(makeEvenNumbers);

/**
***| 2.
  You are given an array say : [33, 50, 79, 90, 101, 30]. Now
  return/get all elements which are divisible by 10 using
  array.filter() method.

  Now do the same task of question 2. But do this using array.find()
  method. Then compare the output of question 2 & question 3
*/

const jerseyNumber = [33, 50, 79, 90, 101, 30];
const divisible = jerseyNumber.filter((divi) => divi % 10 === 0);
console.log(divisible);

const divisibleFind = jerseyNumber.find((f) => f % 10 === 0);
console.log(divisibleFind);

/*
***| 3.
  You have an array of objects:
----------------------------
const instructor = [
  { name: "Nodi", age: 24, position: "Senior" },
  { name: "Akhi", age: 19, position: "Junior" },
  { name: "Shobuj", age: 59, position: "Senior" },
];
-----------------------------
  Your task is to display the instructor names that has the
  position senior using filter
*/

const instructor = [
  { name: "Nodi", age: 24, position: "Senior" },
  { name: "Akhi", age: 19, position: "Junior" },
  { name: "Shobuj", age: 59, position: "Senior" },
];
const filterSenior = instructor.filter(
  (senior) => senior.position === "Senior"
);
console.log(filterSenior);
