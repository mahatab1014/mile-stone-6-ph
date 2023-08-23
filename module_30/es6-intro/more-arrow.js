const differ = (x, y) => x-y;
const multi = (n1, n2, n3) => n1 * n2 * n3;

const getAge = (person) => person.age;
const student = {name: "Mahtab", age: 23};
// console.log(getAge(student));

const get3rd = numbers => numbers[2];
// console.log(get3rd([1,2,3,4,5]));

const doubleIt = num => num * 2;

// no parameter
const getPi = () => Math.PI;
// console.log(getPi())

// large arrow function
const doMath = (x, y, z) =>{
    const sum = x + y + z;
    const multi = x * y * z;
    return sum + multi;
}
// console.log(doMath(2,2,2))