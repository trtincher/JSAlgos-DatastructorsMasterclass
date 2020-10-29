//best for nearly sorted data
//or for a live algo, sorting as numbers come in
//time: O(n^2)
//space: O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return arr;
}

console.log(insertionSort([2, 4, 5, 6, 1, 7, 8, 9]));
console.log(insertionSort([2, 7, 3, 4]));
