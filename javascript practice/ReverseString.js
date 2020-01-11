/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

// 1
const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

// 2
const reverse = str => {
  return str.split("").reduce((prev, curr) => curr + prev, "");
};

// 3
const reverse = str => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};

// 4
const reverse = str => {
  const arr = str.split("");
  let newArray = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    newArray.push(arr[index]);
  }

  return newArray.join("");
};
