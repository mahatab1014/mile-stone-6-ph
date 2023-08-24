const person = {
  name: "Kodom Ali",
  job: "Badam Saler",
  "add-dress": "Kallu Mama 4/5",
  5: "hello",
};
const prop = "job";
console.log(person.job);
console.log(person["name"]);
console.log(person[prop]);
console.log(person["add-dress"]);
// console.log(person.5);   :: error
console.log(person[5])
