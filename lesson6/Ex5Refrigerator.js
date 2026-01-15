class Food {
    constructor(typeOfFood, quantityOfFood) {
        this.type = typeOfFood;
        this.qty = quantityOfFood;
    }

    whatIsThis() {
        console.log(this.type)
    }

    eatOne() {        
        if(this.qty > 0) {   
            this.qty--;             
            console.log("Slurp! One " + this.type.toLowerCase() + " eaten. " + this.qty + " remaining");
        } else {
            console.log('Sorry, no more ' + this.type.toLowerCase() + 's remaining!')
        }
    }
}

class Refrigerator {
    constructor() {
        this.foodStorage = [];
    }

    putFood(food) {
        // add food to the storage in this refrigerator
        this.foodStorage.push(food)
    }


    getAndEatFood(typeOfFood) {}

    getContents() {
        console.log('-----------');

        // print the contents
        for(let i = 0; i < this.foodStorage.length; i++) {
            //console.log(this.foodStorage[i])
            // | Apple 2 
            console.log('| ' + this.foodStorage[i].type + ' ' + this.foodStorage[i].qty)
        }

        console.log('-----------');
    }
}


let r = new Refrigerator(); 
let apple = new Food('Apple',2); 
let bananas = new Food('Banana',3); 
r.putFood(apple); 
r.putFood(bananas); 
r.getContents(); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Banana'); 
r.getAndEatFood('Apple'); 
r.getContents(); 

/*
----------- 
| Apple 2 
| Banana 3 
----------- 
Slurp! One apple eaten. 1 remaining 
Slurp! One apple eaten. 0 remaining 
Slurp! One banana eaten. 2 remaining 
Sorry, no such food in this refrigerator! 
----------- 
| Banana 2 
----------- 
*/