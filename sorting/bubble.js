/**
 * This is the bubble sorting algorith.
 * In this we compare the elements which are next to each other and if the element is greater than its
 * neighbour we swap the element.
 */
function bubbleSortingAlgorithm(unSortedList) {
  for (let i = 0; i < 7; i++) {
    if (unSortedList[i] > unSortedList[i + 1]) {
      let temp = unSortedList[i];
      unSortedList[i] = unSortedList[i + 1];
      unSortedList[i + 1] = temp;
    }
  }
  console.log(unSortedList);
}

const unSortedList = [45, 10, 36, 1, 87, 6, 9];
bubbleSortingAlgorithm(unSortedList);
