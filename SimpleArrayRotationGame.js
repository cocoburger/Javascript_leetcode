function getMaxElementIndexes(a, rotate) {
  const indices = []; // 최대값 인덱스 저장할 변수

  for (let i = 0; i < rotate.length; i++) {
    const rotations = rotate[i] % a.length; //회전횟수
    const rotatedArray = a.slice(rotations).concat(a.slice(0, rotations));
    //회전 수의 인덱스부터 끝까지 잘라낸다.
    // 잘라낸 인덱스에 회전 수 전까지의 인덱스를 붙인다.
    // 예시) [6, 1, 2], [1,2,3,4] -> 1번인덱스부터 마지막인덱스까지 자른다.[1,2] 그리고 0번인덱스 부터 1번인덱스까지 [6] 잘라서 붙인다.
    // [1,2,6]이 된다.
    const maxIndex = rotatedArray.indexOf(Math.max(...rotatedArray));//최대값 인덱스

    indices.push(maxIndex); // 저장
  }
  return indices;
}


// a = [1, 2, 3], rotate = [1, 2, 3, 4], indices = [1, 0, 2, 1];
// a = [6, 1, 2], rotate = [1, 2, 3, 4], indices = [2, 1, 0, 2];
// a = [4, 7, 3], rotate = [2, 2, 1, 1], indices = [2, 2, 0, 0];
console.log(getMaxElementIndexes( [6, 1, 2], [1, 2, 3, 4])); //[2, 1, 0, 2];
console.log(getMaxElementIndexes( [4, 7, 3], [2, 2, 1, 1])); // [2, 2, 0, 0];
console.log(getMaxElementIndexes( [1, 2, 3], [1, 2, 3, 4])); //[1, 0, 2, 1];
