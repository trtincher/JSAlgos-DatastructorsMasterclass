//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  if (num <= 1) return num;
  return num * factorial(num - 1);
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

//Product of Array

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

//Recursive Range

function recursiveRange(num) {
  if (num === 0) return num;
  return num + recursiveRange(num - 1);
}

recursiveRange(6); // 21
recursiveRange(10); // 55

//Fibonacci sequence

function fib(num) {
  if (num <= 2) return 1;
  console.log(`${fib(num - 1)} + ${fib(num - 2)}`);
  return fib(num - 1) + fib(num - 2);
}

// fib(4) // 3
fib(4); // 55
// fib(28) // 317811
// fib(35) // 9227465
