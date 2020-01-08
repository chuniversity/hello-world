/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("fizzbuzz");
        continue;
      }
      console.log("fizz");
      continue;
    } else if (i % 5 === 0) {
      console.log("buzz");
      continue;
    } else {
      console.log(i);
    }
  }
}

// 2
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log("fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("buzz");
      continue;
    }
    console.log(i);
  }
}

// 3
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    i % 15 === 0
      ? console.log("fizzbuzz")
      : i % 3 === 0
      ? console.log("fizz")
      : i % 5 === 0
      ? console.log("buzz")
      : console.log(i);
  }
}
