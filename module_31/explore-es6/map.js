/*
map ==> loops through each element of the array and do
the operation that you passed in the call back function and hold
the result from each operation in an array and finally returns 
you the array
*/
const numbers = [5, 6, 7, 4, 3, 2];

const double2 = n => n*2;
const result2 = numbers.map(double2);
const result3 = numbers.map(kalu => kalu * 2);
console.log(result3);


/*********************************************
function doubleIT(number){
    console.log("number", number)
    return number * 2;
}
const result = numbers.map(doubleIT);
console.log(result);
*/



/*********************************************
const doubled = [];
for (const number of numbers) {
    const double = number *2;
    doubled.push(double);
}
console.log(doubled);
*/