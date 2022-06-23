const testArray = [1, 6, 5];

// Map
function map(arr, callback) {
  let sol = [];
  for (let i = 0; i < arr.length; i++) {
    sol[i] = callback(arr[i]);
  }
  return sol;
}

// Test case should return [1, 36, 25]
console.log(map(testArray, (n) => n ** 2));

// Filter
function filter(arr, predicate) {
  let sol = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      sol[i] = arr[i];
    }
  }
  return sol;
}

// Test case should return [2, 6]
console.log(filter([2, 6, 5], (n) => n % 2 === 0));

// Digits-sum-root
// Create a function that takes a number and returns one
// digit that is the result of summing all the digits of the
// input number. When the sum of the digits consists of more
// than one digit, repeat summing until you get one digit.

// Make your function recursive

function rootDigit(n) {
  const digits = n.toString().split("");
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((acc, b) => acc + b, 0);
  if (sum < 10) {
    return sum;
  } else {
    return rootDigit(sum);
  }
}

console.log(rootDigit(999888777)); // expect 9

// repeat string

function repeat(txt, n) {
  if (n < 1) return "";
  else if (n === 1) return txt;
  else {
    return txt + repeat(txt, n - 1);
  }
}

console.log(repeat("cherry", 3));
