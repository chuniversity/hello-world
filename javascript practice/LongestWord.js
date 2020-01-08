/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

// 1
function longestWord(sen) {
  var arr = sen.match(/[a-z0-9]+/gi);
  var newArr = [];
  var max = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      newArr.unshift(arr[i]);
    }
  }

  return newArr[0];
}

// 2
function longestWord(sen) {
  var arr = sen.match(/[a-z0-9]+/gi);

  var newArr = arr.sort(function(a, b) {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return 0;
    }
  });

  return newArr[0];
}

// 3
function longestWord(sen) {
  var arr = sen.match(/[a-z0-9]+/gi);

  var newArr = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  return newArr[0];
}

// 4
const r = /([a-zA-Z]*)/g;
const longestWord = s =>
  s.match(r).reduce((p, n) => (n.length <= p.length ? p : n));
