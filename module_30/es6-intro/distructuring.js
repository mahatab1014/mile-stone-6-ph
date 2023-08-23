// : Simple Distructuring 
const person = {name: "MahTab Hossain", age: 21};
const {name, age} = person;
// console.log(name);
// console.log(age);


// ::: Nested Objects
const actor = {
    actorName: "John Cena",
    actorAge: 43,
    address: {
        city:"London",
        country :"England"
    }
}
const {actorName, address:{city} } = actor;
// console.log(actorName);
// console.log(city);


// ::: Function Parameters:
function displayInfo({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}
const person1 = {name: "Johnny", age: 33};
// displayInfo(person1);


// ::: Array Destructuring
const numbers = [1, 2, 3, 4];
const [first, second]=numbers;
// console.log(first)
// console.log(second)



// ::: Default Values
const person2 = {name2: "Johnny Depp"};
const {name2, age2= 33} = person2;
// console.log(name2)
// console.log(age2)


// ::: Swaping Variables
let a = 5, b = 10;
[a, b] = [b, a];
// console.log(a);
// console.log(b);



// ::: Rest Pattern
const digits = [1, 2, 3, 4, 5, 6];
const [first1, second2, ...rest] = digits;
// console.log(first1);
// console.log(second2);
// console.log(rest);


// ::: Renaming Variables
const person3 = {
    firstName : "Depp",
    lastName : "Honey"
}
const {firstName: fName, lastName: lName} = person3;
// console.log(fName);
// console.log(lName);



// ::: Skipping Elements
const numberOfDigits = [1,2,3,4,5,6];
const [,,,,, digit6] = numberOfDigits;
console.log(digit6)