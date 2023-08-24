class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity(){
    this.sleep();
  }
}
const kodom = new Person("Kodom ALi", 22);
console.log(kodom);
kodom.sleep();

const badam = new Person("Kacha Badam", 12);
console.log(badam);
badam.sleep();


// -----------------------
const lazy = kodom.sleep;
lazy(); // Sleeping now Kodom ALi