let car = {
    make: "Toyota",
    registration: "ABC-123",
    speed: 0,
    accelerate: function() {
        this.speed += 5;
    }
}

let car2 = {
    make: "Audi",
    registration: "DEF-456",
    speed: 0,
    accelerate: function() {
        this.speed += 5;
    }
}


console.log(car.speed);
console.log(car2.speed);
car.accelerate();
car.accelerate();
console.log(car.speed);
console.log(car2.speed);