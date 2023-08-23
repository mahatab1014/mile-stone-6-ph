// : Normal Function
function normalFun(a1, a2) {
    const doSum = a1 + a2;
    return doSum;
}

// : Normal Function Shorthand
function normalShortFunction(n1, n2){
    return n1 + n2;
}

// : Functon Expression
const sumExpression = function(s1, s2){
    return s1 + s2;
}

// : Arrow Function
/* 
:: Arrow function is one of the features introduced in the ES6
:: version of JavaScript. It allows you to create function in cleaner
:: way compared to regular functions.
*/

const arrowFun = (n1, n2) => n1 + n2;

// :: 3 Ways To Write Arrow Function
const arrowNoPera = () => console.log(`Hi MahTab!`);
const arrowWithOnePera = (a) => console.log(`Hi MahTab! ${a}`);
const arrowWithMultiPera = (a, b, c, d) => console.log(`Hi MahTab! ${a+b+c+d}`);