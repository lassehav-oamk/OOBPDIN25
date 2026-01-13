function Animal(type, speed, isCute) {
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.someOtherProperty = "Hello World";
}

/* let x = {
    type: "Dog",
    speed: 10,
    isCute: true
} */

const a = new Animal("Dog", 10, true);
const b = new Animal("Cat", 12, true);
const c = new Animal("Crocodile", 5, false);

console.log(b.type)
console.log(c);