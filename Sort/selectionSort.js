//O(n^2)
//only better than Bubble sort if you want to minimize the number of swaps you are making.
//saves memory writes

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 6, 7, 8, 9, 2, 1]));
