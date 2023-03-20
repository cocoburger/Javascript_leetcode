function countSubArrSumOfx(arr,x  ) {
  let count,sum, right, left = 0;

  while(right <= arr.length) {
    if ( sum === x ) {
      count++;
      sum -= arr[left];
      left++;
    } else if ( sum < x ) {
      sum += arr[right];
      right++;
    } else if ( sum > x ) {
      sum -= arr[left];
      left++;
    }
  }
  return count;
}
