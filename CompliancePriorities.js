function reassignedPriorities(priorities) {
  const counts = new Array(100).fill(0);

  // 100개중 입력값 마킹
  for (const priority of priorities) {
    counts[priority]++;
  }

  let reducedPriority = 1; //우선순위는 1부터 시작

  // 마킹된 값을 reducedPriority++으로 변경
  for (let index = 1; index < counts.length; index++) {
    if (counts[index] > 0) {
      counts[index] = reducedPriority++;
    }
  }

  // 입력 값의 순서대로 배열입력.
  // 예시) 10,8,2,4 -> priorities[index]의 값은 10이다.
  // counts[10]은 위에서 reducedPriority++로 우선순위를 재할당했으므로
  // couts[10]의 값은 4다.
  // 첫번째 반복문에서는 시작 index가 0이므로 priorities[0]이다.
  // priorities[0]에 4를 대입한다.
  // priorities.length의 길이만큼 반복한다.
  for (let index = 0; index < priorities.length; index++) {
    priorities[index] = counts[priorities[index]];
  }
  return priorities;
}




console.log(reassignedPriorities([5, 1, 9, 9])); // [2, 1, 3, 3]
console.log(reassignedPriorities([10, 8, 2, 4])); // [4, 3, 1, 2]
console.log(reassignedPriorities([22, 24, 55, 2])); // [2, 3, 4, 1]
