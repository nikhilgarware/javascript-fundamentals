const data = [9, 5, 3, 1, 6, 7, 9];
/**
 *
 * @param {object} arr Array of objects with numbers to sort
 */
function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr); // [ 1, 3, 5, 6, 7, 9, 9 ]
}

bubbleSort(data);
