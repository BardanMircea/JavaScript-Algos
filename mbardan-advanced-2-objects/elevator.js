// Write a module elevator that exports an object elevator.

// The object elevator has a property floor initially set to 0.

// It also has several methods:

// a resetFloor method that resets the object's floor property to 0.
// an up method that increments the floor.
// a down method that decrements the floor.
// a printFloor method that prints the floor.
// This:

// const elevator = require("./elevator");
// elevator.up();
// elevator.up();
// elevator.down();
// elevator.printFloor();
// `elevator` is the object you defined.

// The `up` method is called, so internally the `floor` property is incremented. Since you initialised `floor` to 0, it's now 1.

// The `floor` property becomes 2.

// The `down` method is called, so now the `floor` property is decremented. It was 2, now it's 1.

// Will print: 1

// And this:

// const elevator = require("./elevator");
// elevator.down();
// elevator.down();
// elevator.resetFloor();
// elevator.printFloor();
// Will print: 0

// Don't forget to use the keyword this to access the object's floor property.

const elevator =  {
    floor : 0,
    resetFloor() {
        this.floor  = 0;
    },
    
    up(){
        this.floor += 1
    },
    down(){
        this.floor -= 1
    },
    printFloor() {
        console.log(this.floor)
    }
}
module.exports = elevator