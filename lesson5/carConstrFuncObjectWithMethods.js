function Car(make) {
    this.make = make;
    this.registration = "ABC-123";
    this.speed = 0;
    this.accelerate = function() {
        this.speed += 5;
    }
}

let car1 = new Car("Toyota");
let car2 = new Car("Audi");
let car3 = new Car("Ford");

console.log(car1.speed);
console.log(car2.speed);
car2.accelerate();
console.log(car1);
console.log(car2);