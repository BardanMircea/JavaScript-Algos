// Write a module generateRoomNumbers that exports a function generateRoomNumbers.

// The function generateRoomNumbers takes a hash as an argument. The hash represents the number of rooms per floor of a hotel.

// The function will generate an array containing all the room numbers according to the following rule:

// A room number starts with the floor number, followed by the room number written with 2 digits.

// For example, room 7 on floor 3 will have the number 307.

// The room numbers will start at 0 and they will be integers (not strings!).

// The array returned by the function will be sorted.

// Examples
// This:

// generateRoomNumbers({
//   1: 10,
//   2: 5,
//   3: 2
// })
// Will return:

//[100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 200, 201, 202, 203, 204, 300, 301]
const generateRoomNumbers = (roomsPerFloor) => {
    let resultArr =  [];
    for(let [floor, numOfRooms] of Object.entries(roomsPerFloor)) {
        for(let i = 0; i < numOfRooms; i++){
            if(i < 10){
                resultArr.push(parseInt(floor + "0" + i))
            } else {
                resultArr.push(parseInt(floor + i))
            }
        }
    }
    return resultArr.sort()
}


module.exports = generateRoomNumbers;
