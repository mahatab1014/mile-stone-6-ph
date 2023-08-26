const user = { id: 1, name: "Hero ALOM", job: "Actor" };
// JavaScript Object Notation  (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{id: 1, name: 'Hero ALOM', job: 'Actor'}  ---------JS
{"id":1,"name":"Hero ALOM","job":"Actor"} ---------JSON
*/

const shop = {
  owner: "Ali BaBa",
  address: {
    street: "Kallu 32/1, Jamalpur",
    city: "Jamalpur",
    conutry: "BD",
  },
  products: ["laptop", "mobile", "monitor", "keyboard"],
  revenue: 50060,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);