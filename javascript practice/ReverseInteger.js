/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

// 1
const reverse = int => {
  let arr = Math.abs(int)
    .toString()
    .split("")
    .reverse();
  let removeZero = true;

  let newInt = arr.filter(element => {
    if (element !== "0") {
      removeZero = false;
    }

    if (element === "0" && removeZero === true) {
      return false;
    } else {
      return true;
    }
  });

  if (int < 0) {
    return -parseInt(newInt.join(""));
  } else {
    return parseInt(newInt.join(""));
  }
};

// 2
const reverse = int => {
  const arr = int
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(arr) * Math.sign(int);
};
