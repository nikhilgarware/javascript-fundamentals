const data = [2, 9, 7, 6, 1, 36, 1, 59, 4];
function quickSort(arr) {
  let data1 = [];
  let data2 = [];
  const arrayLength = arr.length;
  if (arrayLength % 2 == 0) {
    return "Cannot perform this operation";
  }
  const pivot = arr[(arrayLength - 1) / 2];
  console.log(pivot);
}
console.log(quickSort(data));
