//QuickSort
//complexity
//time: O(n log n)
//space: O(n log n)

//Concept
//Pivot point
//move all numbers less than to the left and greater than to the right
//recursively repeat on each side
//each time you know that your pivot is in the right index

//Pivot Helper
//Pseudo
//It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

// console.log(pivot([5,1,7,4,3,9,8]))

//QuickSort
//Pseudo
//Call the pivot helper onthe array
//When the helper returns to you the updated pivot index, recursively call the pivot helper ont he subarray to the left of that index, and the subarray to the righ tof that index
//Your base case occurs when you consider a subarray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([5, 1, -5, 7, 4, 3, 9, 8]));
