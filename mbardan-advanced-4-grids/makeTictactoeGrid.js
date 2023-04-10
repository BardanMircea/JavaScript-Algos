// Write a module makeTictactoeGrid that exports a function makeTictactoeGrid.

// The function makeTictactoeGrid takes no arguments and returns a 3*3 grid filled with "O" and "X".

// function make_tictactoe_grid() {
//     const grid = THE_GRID
//     return grid
// }
// Your job is to replace THE_GRID with a grid that contains exactly the following elements:

// The first list will contain, in order: "O", "X", "O"
// The second list will contain, in order: "O", "O", "X"
// The third list will contain, in order: "X", "O", "X"

const makeTictactoeGrid = () =>{
    const grid = []

    grid[0] = ["O", "X", "O"]
    grid[1] = ["O", "O", "X"]
    grid[2] = ["X", "O", "X"]

    return grid;
}

module.exports = makeTictactoeGrid