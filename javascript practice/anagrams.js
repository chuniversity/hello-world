/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

//1

function anagrams(stringA, stringB) {
  let arr1 = stringA
    .toLowerCase()
    .split("")
    .filter(char => char.match(/[a-zA-z]/));
  let arr2 = stringB
    .toLowerCase()
    .split("")
    .filter(char => char.match(/[a-zA-z]/));
  if (arr1.length === arr2.length) {
    arr1.forEach(element => {
      arr1 = arr1.filter(el => (el === element ? false : true));
      arr2 = arr2.filter(el => (el === element ? false : true));
    });
    console.log(arr1, arr2);

    return arr1.length == arr2.length;
  } else {
    return false;
  }
}
anagrams();
// 2
function anagrams(stringA, stringB) {
  let arr1 = stringA
    .toLowerCase()
    .split("")
    .sort()
    .filter(char => char.match(/[a-zA-z]/))
    .join("");
  let arr2 = stringB
    .toLowerCase()
    .split("")
    .sort()
    .filter(char => char.match(/[a-zA-z]/))
    .join("");

  return arr1 === arr2;
}

// 3
function anagrams2(stringA, stringB) {
  let arr1 = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let arr2 = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return arr1 === arr2;
}

// 4
function anagrams3(stringA, stringB) {
  let str1 = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let str2 = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  let map1 = {};
  let map2 = {};

  for (let char of str1) {
    map1[char] ? map1[char]++ : (map1[char] = 1);
  }
  for (let char of str2) {
    map2[char] ? map2[char]++ : (map2[char] = 1);
  }

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }

  for (char in map1) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }

  return true;
}
