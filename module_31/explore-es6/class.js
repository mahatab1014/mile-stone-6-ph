const products = [
  { id: 1, name: "Lenovo", price: 65000 },
  { id: 2, name: "HP", price: 86999 },
  { id: 3, name: "Asus", price: 386999 },
  { id: 4, name: "iMac", price: 216999 },
];

// :: similar
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
const lenovo = new Product("Le Lo Podinahhhhhh");
// console.log(lenovo);
// lenovo.speak("Kih????");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir teaching us Math");
  }
}

const riponSir = new Teacher("Ripon Broh", "Math");
console.log(riponSir);

const bonanai = new Teacher("Bonanai Mam", "English");
console.log(bonanai);
