function twoSumSorted( arr, x ) {
  let left = 0, right = arr.length - 1;
  while( left < right) {
    let sum = arr[left] + arr[right];
    if ( sum === x ) {
      return [left, right];
    } else if ( sum < x ) {
      left++
    } else if ( sum > x ) {
      right--;
    }
  }
  return [-1, -1]; // 아무런 값을 못 찾았을 때
}

console.log(twoSumSorted([2,4,5,6,11,15],15))
