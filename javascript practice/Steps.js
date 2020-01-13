/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

// 1
function steps(n) {
  let word;

  for (let i = 1; i <= n; i++) {
    word = "";
    for (let x = 1; x <= n; x++) {
      if (x <= i) {
        word = word + "#";
      } else {
        word = word + " ";
      }
    }

    console.log(word);
  }
}

// 2
function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${"#".repeat(i)}${" ".repeat(n - i)}`);
  }
}

// 3
function steps(n) {
  let word;

  for (let i = 1; i <= n; i++) {
    word = "";
    for (let x = 1; x <= i; x++) {
      word = word + "#";
    }
    for (let x = 1; x <= n - i; x++) {
      word = word + " ";
    }
    console.log(word);
  }
}

// 4
function steps(n) {
  let word;

  for (let i = 1; i <= n; i++) {
    word = "";
    for (let x = 1; x <= n; x++) {
      if (x <= i) {
        word = word + "#";
      } else {
        word = word + " ";
      }
    }

    console.log(word);
  }
}
