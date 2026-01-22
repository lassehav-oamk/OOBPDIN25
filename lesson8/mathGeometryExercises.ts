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

    moveTo(newX: number, newY: number) {
        this.#x = newX;
        this.#y = newY;
    }

    moveBy(dx: number, dy: number) {
        this.#x = this.#x + dx;
        this.#y = this.#y + dy;
    }

}

let testShape = new Shape(2, 3, "black");