class Shape {
    #x: number;
    #y: number;
    #color: string;

    constructor(x: number, y: number, color: string) {
        this.#x = x;
        this.#y = y;
        this.#color = color;
    }

    set x(newX: number) {
        this.#x = newX;
    }

    get x(): number {
        return this.#x;
    }

    set y(newY: number) {
        this.#y = newY;
    }
    get y(): number {
        return this.#y;
    }

    moveTo(newX: number, newY: number) {
        this.#x = newX;
        this.#y = newY;
    }

    moveBy(dx: number, dy: number) {
        this.#x = this.#x + dx;
        this.#y = this.#y + dy;
    }

    calculateArea(): number {
        throw new Error("Area calculation not implemented for generic shape");
    }

    calculatePerimeterLength(): number {
        throw new Error("Perimeter length calculation not implemented for generic shape");
    }

}

class Circle extends Shape {
    #radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        super(x,y,color);
        if(radius > 0) {
            this.#radius = radius;
        }
        else {
            throw new Error("Negative circle radius not allowed");
        }
    }

    getRadius(): number {
        return this.#radius;
    }

    calculateArea(): number {
        return Math.PI * this.#radius * this.#radius;
    }

    calculatePerimeterLength(): number {
        return 2 * Math.PI * this.#radius;
    }

    getDiameter(): number {
        return 2 * this.#radius;
    }

    setDiameter(newDiameter: number) {
        if(newDiameter > 0) {
            this.#radius = newDiameter / 2;
        } else {
            throw new Error("Negative circle diameter not allowed");
        }
    }
}


let testShape = new Shape(2, 3, "black");
testShape.moveBy(3, 4);
console.log(testShape.x); // Expected output: 5 
console.log(testShape.y); // Expected output: 7

testShape.moveBy(-2, -3);
console.log(testShape.x); // Expected output: 3
console.log(testShape.y); // Expected output: 4

let testCirc1 = new Circle(2,4,"red", 4);

 try {
    let testCirc2 = new Circle(5,7,"Blue", -3);
} catch (e) {
    console.log('Catched an exception, now i can do something about it');
    console.log('Error handling completed');
}

console.log('Application continues....');

console.log('TestCirlce 1 area: ' + testCirc1.calculateArea());
console.log('TestCirlce 1 perimeter: ' + testCirc1.calculatePerimeterLength());
console.log('TestCircle 1 radius: ' + testCirc1.getRadius());
console.log('TestCircle 1 diameter: ' + testCirc1.getDiameter());

testCirc1.setDiameter(20);
console.log('New diameter set to 20');

console.log('TestCirlce 1 area: ' + testCirc1.calculateArea());
console.log('TestCirlce 1 perimeter: ' + testCirc1.calculatePerimeterLength());
console.log('TestCircle 1 radius: ' + testCirc1.getRadius());
console.log('TestCircle 1 diameter: ' + testCirc1.getDiameter());