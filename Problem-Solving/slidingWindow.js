//maxSubarraySum
//Write a function called maxSubarraySum which accepts a array of integers  and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//return null on empty arr
//create max variable
//loop through array
//loop through sub array to sum
//if sum of sub is greater than max then max equals sum
//return max

//Solution1
//O(n^2)

function maxSubarraySum1(arr, n) {
  if (arr[1] === undefined) return null;
  let max = -Infinity;
  let total = 0;

  for (let i = 0; i <= arr.length - n; i++) {
    total = 0;
    for (let j = 0; j < n; j++) {
      total += arr[i + j];
    }
    if (max < total) max = total;
  }

  return max;
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum1([4, 3, 1, 6], 1)); //6
console.log(maxSubarraySum1([], 4)); //null

console.log("------------------------------------------");

//Solution2
//O(n)

function maxSubarraySum2(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum2([4, 3, 1, 6], 1)); //6
console.log(maxSubarraySum2([], 4)); //null

console.log("------------------------------------------");
console.log("Problem1 maxSubarraySum");
console.log("------------------------------------------");

//given an array of integers and a number, write a funciton called maxSubarray Sum , which finds the maximum sum of a a subarray with the length of the number passed to the funciton.

//O(n)
//sliding window technique
//define function that takes an arr, num
//loop
//sum the first sub array and put into maxSum
//set tempSum = maxSum
//loop
//tempSum equal to tempSum - arr[i] and + arr[i+num]
//if maxSum < tempSum then maxSum equals tempSum
//return maxSum

function maxSubarraySum3(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = 0; i < arr.length; i++) {
    tempSum = tempSum - arr[i] + arr[i + num];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

console.log(maxSubarraySum3([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum3([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum3([2, 3], 3)); //null

console.log("------------------------------------------");
console.log("Problem2 minSubArrayLen");
console.log("------------------------------------------");

//write a funciton called minSubArrayLen which accepts two parameters = an array of positive integers and a positive integer.
//This funciton should return the minimal length of contiguous sub array of which the sum is greater than or equal to the integer passed to the funciton. If there isn't one, return 0 instead.

//
//if sum of subarray >= int
//return subarray.lenth
//check pairs
//checks triplets
//...

//return 0

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 --> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 - because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62 is greater than 52]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
