const numbers = [1,2,3,4,5,6,7,8,9];
/*
*** For loop
for (let i = 0; i < numbers.length; i++) {
    const element = array[i];
    console.log(element);
}

*** For OF
for (const number of numbers) {
   console.log(number) 
}
*/

/**
*  For In
*/

for (const number in numbers) {
    console.log(number);
}