// Write a module foldable that exports a function foldable.

// The function foldable takes a grid as argument and returns whether that grid can be "folded" on itself along its vertical middle axis without superposing "1" cells.

// You can visualise folding in two a sheet of paper if that helps.

// For example, this grid:
// 0 0 0 1
// 1 0 1 0
// 0 1 1 0
// 1 0 0 0
// cannot be folded, because if we fold the two right-side columns on the two left-side columns, the two 1s of the 3rd row will overlap.

// When the number of columns is odd, we will take the middle column as the folding axis, and its values will be ignored; the following grid can therefore be folded:
// 1 1 1 1 0 0 0
// 1 0 0 0 1 1 0
// 0 0 0 1 0 1 1
// 0 1 0 1 1 0 1
// 0 0 0 0 0 0 0
// 1 1 0 1 1 0 0

// The grid will only hold 1s and 0s, and all its rows will have the same length.

// Examples
// This: foldable([[0, 0, 0, 1], [1, 0, 1, 0], [0, 1, 1, 0]])
// Will return: false

// This: foldable([[1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0]])
// Will return: true

// This: foldable([])
// Will return:true

// This: foldable([[]])
// Will return: true

const foldable = (grid) => {
  if (grid.length === 0) {
    return true;
  }

  // check if grid has pair number of columns and check if it can fold into itself
  if (grid[0].length % 2 === 0) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length / 2; j++) {
        if (grid[i][j] === 1 && grid[i][grid[i].length - 1 - j] === 1) {
          return false;
        }
      }
    }
    return true;
  } else {
    // else, check if it can fold around the middle column
    const middleColNum = parseInt(grid[0].length / 2);
    console.log(middleColNum);
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < middleColNum; j++) {
        if (grid[i][j] === 1 && grid[i][grid[i].length - 1 - j] === 1) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = foldable;
