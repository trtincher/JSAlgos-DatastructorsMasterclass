//nested solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) false;
  for (num of arr1) {
    let correctIndex = arr2.indexOf(num ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log("same([1,2,3], [9,1,4]", same([1, 2, 3], [9, 1, 4])); // true
console.log("same([1,2,3], [9,1,4]", same([1, 2, 3], [9, 1, 4])); // true
console.log("same([1,2,3,4], [9,1,4,4])", same([1, 2, 3, 4], [9, 1, 4, 4])); // false

//non-nested solution
//psuedo code
//make function takes two arrays
//make counter object for each array
//loop through array1 and create counter object
//loop through array2 and create counter object
//loop through keys in coutner object one
//if value of key in counter1 does not equal value of key in counter2 then
//return false
//end loop
//return true

function same2(arr1, arr2) {
  let counter1 = {};
  let counter2 = {};

  for (num of arr1) counter1[num] = (counter1[num] || 0) + 1;
  for (num of arr2) counter2[num] = (counter2[num] || 0) + 1;

  for (let key in counter1) {
    if (counter1[key] !== counter2[key ** 2]) return false;
  }

  return true;
}

console.log("same2([1,2,3], [9,1,4]", same2([1, 2, 3], [9, 1, 4])); // true
console.log("same2([1,2,3], [9,1,4]", same2([1, 2, 3], [9, 1, 4])); // true
console.log("same2([1,2,3,4], [9,1,4,4])", same2([1, 2, 3, 4], [9, 1, 4, 4])); // false

console.log("-----------------------------------");
console.log("Practice Problems");
console.log("-----------------------------------");

console.log("Problem1");
// Write a funciton called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time: O(n)
// Sample inpute:
// console.log(sameFrequency(182, 281)) //true
// console.log(sameFrequency(34, 14)) //false
// console.log(sameFrequency(3589878, 5879385)) //true
// console.log(sameFrequency(22, 222)) //false

//Pseudo
//create function that takes two postive integers
//convert numbers to arrays
//if num arrays are not same length then return false
//create two counter objects
//loop through each number array and create key of num with val of count
//loop through count1 keys and use to check if values of count2 keys are equal
//if any not equal then return false
//return true

function sameFrequency(num1, num2) {
  num1 = `${num1}`.split("");
  num2 = `${num2}`.split("");

  if (num1.length !== num2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let num of num1) count1[num] = (count1[num] || 0) + 1;
  for (let num of num2) count2[num] = (count2[num] || 0) + 1;

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
console.log(sameFrequency(0, 0)); //true

console.log("-----------------------------------");
console.log("Problem2");
console.log("-----------------------------------");

function areThereDuplicates(...arr) {
  let counter1 = {};

  for (let element of arr) {
    counter1[element] = (counter1[element] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
