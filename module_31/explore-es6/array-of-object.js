const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'HP', price: 86999},
    {id: 3, name: 'Asus', price: 386999},
    {id: 4, name: 'iMac', price: 216999},
];
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p => p.price);
// console.log(prices);


// :: For Each
products.forEach(p => console.log(p.id));

// :: filter
const expensive = products.filter(p => p.price > 100000);
console.log(expensive)

// :: Find
const affordable = products.find(p=> p.price < 100000);
console.log(affordable);

// :: reduce
const total = products.reduce((p, c)=> p + c.price, 0)
console.log(total);