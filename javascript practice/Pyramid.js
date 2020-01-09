/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

// 1
const pyradmid = levels => {
  for (i = 1; i <= levels; i++) {
    // Levels
    const arr = [];
    for (l = 0; l < levels - i; l++) {
      arr.push(" ");
    }
    for (l = 0; l < 2 * i - 1; l++) {
      arr.push("#");
    }
    for (l = 0; l < levels - i; l++) {
      arr.push(" ");
    }
    console.log(arr.join(""));
  }
};

// 2
const pyradmid = n => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (row = 0; row < n; row++) {
    var level = "";

    for (column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};
