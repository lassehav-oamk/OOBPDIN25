function Animal(type, speed, isCute, strength) {
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.strength = strength;
    this.battle = function(opponent) {
        if(this.strength > opponent.strength) {
            return this;
        }
        else if (this.strength === opponent.strength) {
            return null; // it's a tie
        }
        else {
            return opponent;
        }
    }
}

const cat = new Animal("Cat", 12, true, 4);
const dog = new Animal("Dog", 10, true, 5);

const result = cat.battle(dog);
if(result === null) {
    console.log("It's a tie!");
} else {
    console.log("winner is : " + result.type);
}

// function battle(combatant1, combatant2) {
//     // battle logic here
//     if(combatant1.strength > combatant2.strength) {
//         return combatant1;
//     }
//     else if (combatant1.strength === combatant2.strength) {
//         return null; // it's a tie
//     }
//     else {
//         return combatant2;
//     }
// }
// const result = battle(cat, dog);
// console.log("winner is : " + result.type);