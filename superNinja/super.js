class Ninja {
    health = "health"
    name = "name"
    speed = 3
    strength = 3
    constructor (name){
        this.name = name
    }
    showStats(){
        console.log(this.health, this.speed,this.strength)
    }
    drinkSake(){
        this.health += 10
    }
    sayName(){
        console.log(this.name)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    health = 200
    name = "name"
    speed = 10
    strength = 10
    wisdom = 10
    speakWisdom(){
        this.drinkSake();
        console.log("A man who stand on toilet get high on pot")
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"