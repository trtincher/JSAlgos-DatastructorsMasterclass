function binarySearch(arr, value) {
  const length = arr.length;
  let start = 0;
  let end = length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === value) return middle;
    if (value < arr[middle]) end = middle - 1;
    if (value > arr[middle]) start = middle + 1;
    middle = Math.floor((end + start) / 2);
  }

  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); //5
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); //0
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); //9
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); //2
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); //7
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)); //-1
