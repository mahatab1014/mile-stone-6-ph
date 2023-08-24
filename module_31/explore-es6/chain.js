const data = [{id: 1, name: "Abul", address: "Hazi Para"}];
console.log(data[0].address);

const products = {
    count: 9000,
    data: [
        {"name": "iPen", price: "$25"},
    ]
}

console.log(products.data[0].price)



const sakib = {
    firstName : 'Sakib',
    lastName : 'Al Hasan',
    age :  34 ,
    country: 'Bangladesh',
    address: [
        {street:'Mirpur', city:"Dhaka", country:"Bangladesh", home:[
            {'house':"House#876/A", 'floor':'Ground Floor'},
        ]},
    ]
}
const sakib2 = {
    firstName : 'Sakib',
    lastName : 'Al Hasan',
    age :  34 ,
    country: 'Bangladesh',
    address: [
        {street:'Mirpur', city:"Dhaka", country:"Bangladesh"},
    ]
}
console.log(sakib.address[0].home[0].house);
console.log(sakib2.address[0].home?.house);