class Food {
    type: string;
    qty: number;

    constructor(typeOfFood: string, quantityOfFood: number) {
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
    foodStorage: Food[];

    constructor() {
        this.foodStorage = [];
    }

    putFood(food: Food) {
        // add food to the storage in this refrigerator
        this.foodStorage.push(food)
    }


    getAndEatFood(typeOfFood: string) {
        // we want to eat food described by the typeOfFood parameter
        let found = false;
        for(let i = 0; i < this.foodStorage.length; i++) {
            // check the names, if they are same, then we have found our food
            if(this.foodStorage[i].type == typeOfFood) {
                // we have found the food, what then? -> we eat the food
                found = true;
                this.foodStorage[i].eatOne();
                if(this.foodStorage[i].qty == 0)
                {
                    // remove the food when its quantity is zero
                    this.foodStorage.splice(i, 1);
                }     
                break;           
            }
        }
        if(!found) {
            console.log('Sorry, no such food in this refrigerator! ');
        }
        
    }

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