const numbers = [2, 3, 55, 54, 6, 45, 14];
const double = numbers.map(number => number * 2);
const fiveBonus = double.map(number => number + 5);

console.log(fiveBonus);


const friendsName = ['Tom', 'Jerry', 'Pori Moni', 'Raz'];
const legnths = friendsName.map(friend => friend.length);
const firstLetter = friendsName.map(first => first[0])
console.log(legnths);
console.log(firstLetter);