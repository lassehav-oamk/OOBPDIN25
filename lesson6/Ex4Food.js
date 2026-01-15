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

let banana = new Food('Banana', 4); 
let bread = new Food('Bread', 2);

banana.whatIsThis(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
bread.eatOne();

/*
Banana 
Slurp! One banana eaten. 3 remaining 
Slurp! One banana eaten. 2 remaining 
Slurp! One banana eaten. 1 remaining 
Slurp! One banana eaten. 0 remaining 
Sorry, no more bananas remaining! */