// primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(n1, n2) {
  n1 = 10;
  const result = n1 * n2;
  return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(num1);

// Object & array pass by reference

let student1 = { name: "Johnkar", parter: "Johnka" };
let student2 = { name: "Raj", parter: "Pori" };

function makeMovie(c1, c2) {
  c1.name = "Onnoto";
  c2.parter = "mim";
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2)
