//Big O of mergeSort
//time : O(n log n)
//space : O(n)

//log review
// log base 2 of n
//2 of what power gives us n
//then each merge is O(n) so  O(n) + O(log n) = O(n log n)???

//Merging Arrays
//Step one is to know how to merge two SORTED Arrays
//O(n+m)

//output should be [1,2,10,14,50,99,100]

//Psuedo
//start index valiables i and j at 0
//make return array output
//while i < length of arr1 or j < length or arr2 (e.g., run as long as the longest arr)
//if arr1 at i is less than arr2 at j then push arr1 at i into return arr and increment i
//else push arr2 at j into return arr and incrament j
//end loop
//return output

function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const output = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  return output;
}

// console.log(mergeArrays([1,10, 50], [2,14,99,100]))
// console.log(mergeArrays([], [1,4,3]))
// console.log(mergeArrays([1,3,5,4], []))
// console.log(mergeArrays([10, 11], [1,3,4]))

//Sorting part
//uses recursion
//easiest way to have sorted arrays is to split the arr until its length = 0 or 1
//an array of 1 is sorted by default
//then you just merge those all the way up and you are good to go

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
}

console.log(mergeSort([24, 10, 76, 73, 1]));
