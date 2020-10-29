//SumZero problem
//function takes a sorted arr of integers positive and negative
// find integer pairs where sum equals zero

//Solution 1
//O(n^2)
//loop through arr
//for each number in loop loop through the rest of the numbers
//if first number + secound number equals sumZero
//then return an arr of the pair

function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

//Solution 2
//O(n)
//pointers start on opposite sides and work towards middle

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 5])); // [-1,1]
console.log(sumZero2([-4, -3, -2, -1, 0, 5])); // undefined

//Count Unique Values problem
//Solution1
//O(n)
// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//output should be a positive number or zero if no unique values exist

//Solution1
//with counter variable
//original arr is not altered
//create two pointers
//while pointer2 is not undefined

function countUniqueValues1(arr) {
  let pointer1 = 0;
  let pointer2 = 1;
  let counter = 0;

  while (pointer2 <= arr.length) {
    if (arr[pointer2] !== arr[pointer1]) {
      counter++;
    }
    pointer1++;
    pointer2++;
  }

  return counter;
}

console.log(countUniqueValues1([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues1([])); //0
console.log(countUniqueValues1([-2, -1, -1, 0, 1])); //4

//Solution2
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues2([])); //0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); //4

console.log("-----------------------------------");
console.log("Problem1, areThereDuplicates");
console.log("-----------------------------------");

//pointer1 is statice
//pointer2 moves and compairs to pointer 1
//pointer1 moves one then repeate

function areThereDuplicates(...arr) {
  arr.sort();
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer2] === arr[pointer1]) return true;

    pointer1++;
    pointer2++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

console.log("-----------------------------------");
console.log("Problem2: isSubsequence");
console.log("-----------------------------------");

//Multiple Pointers - isSubsequence

//Write a funciton called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequenc eof characters in teh second string. In tother words, the funciton should chekc whether the characters in the first string arppear somewhere in the second string, without their order changing.

console.log("Solution1: Iterative");

function isSubsequence(str1, str2) {
  let p1 = 0;
  let p2 = 0;
  if (!str1) return true;
  while (p2 < str2.length) {
    if (p1 === str1.length - 1) return true;
    if (str2[p2] === str1[p1]) p1++;
    p2++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "string")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false

console.log("Solution2: Recursive");

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "string")); //true
console.log(isSubsequence2("abc", "abracadabra")); //true
console.log(isSubsequence2("abc", "acb")); //false

console.log("-----------------------------------");
console.log("Problem3, Average pair");
console.log("-----------------------------------");

//Average pair
//Write a funciton called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//Time: 0(N)
//Space: O(1)

//function takes args arr and avg
//if arr is empty then return false
// create two pointer variables
//set point1 to 0 and point2 to 1
//while point1 is not equal to arr length -1
//if avg of point1 and point2 equals target avg
//then return true
//if point2 equals arr lenght -1
//then point1++ and point2 equals point1 +1

console.log("Solution1");
//this one works sorted or unsorted
//but is probably slower even though time complexity is the same

function averagePair1(arr, avg) {
  if (!arr[0]) return false;

  let point1 = 0;
  let point2 = 1;

  while (point1 < arr.length - 1) {
    if ((arr[point1] + arr[point2]) / 2 === avg) return true;
    point2++;
    if (point2 === arr.length) {
      point1++;
      point2 = point1 + 1;
    }
  }

  return false;
}

console.log(averagePair1([1, 2, 3], 2.5)); // true
console.log(averagePair1([1, 3, 3, 5, 6, 7, 19, 12, 10], 8)); // true
console.log(averagePair1([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair1([], 4)); // false

console.log("Solution1");
//this one relies on sorted

function averagePair2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair2([1, 2, 3], 2.5)); // true
console.log(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair2([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair2([], 4)); // false
