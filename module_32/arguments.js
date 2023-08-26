function sum(a, b, c) {
  const argu = [...arguments];
//   console.log(argu);
  const result = a + b + c;
  return result;
}

const total = sum(2, 2, 2, 2, 5, 2, 2);
console.log("total:", total);

console.log(sum.length)