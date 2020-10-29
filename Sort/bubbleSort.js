//O(n^2)

//Unoptimized version
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 4, 5, 2, 1, 8, 9]));

//version 2
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort2([3, 4, 5, 2, 1, 8, 9]));

//version 3
function bubbleSort3(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(bubbleSort3([3, 4, 5, 2, 1, 8, 9]));

//version 4 (optimized, checks if arr is sorted already)
function bubbleSort4(arr) {
  let noSwap;
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort4([3, 4, 5, 2, 1, 8, 9]));
