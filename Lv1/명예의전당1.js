const solution = (a, b) => {
  const answer = [];
  let test = [];

  for (let i = 0; i < b.length; i++) {
    const row = b[i];

    // 현재 점수를 앞에서 부터 추가한다.
    test.unshift(row);

    for (let j = 0; j < test.length; j++) {
      const index = j;
      const nextIndex = j + 1;

      const curr = test[index];
      const nextItem = test[nextIndex];

      if (nextItem > curr) {
        // 현재 요소가 더 작을 경우 정렬을 멈춘다.
        break;
      }

      if (curr > nextItem) {
        test[index] = nextItem;
        test[nextIndex] = curr;
      }
    }

    // 정렬을 한 다음, test에서 가장 낮은 요소를 추가해줘야한다.
    if (a >= test.length) {
      // 명예의 전당 자리가 남았을 경우 정렬된 요소에서 가장 낮은 순위의 요소를 추가한다.
      answer.push(test[0]);
    }

    if (test.length === a + 1) {
      // 배열의 길이가 a를 초과할 경우 명예의 전당이 꽉 찼으므로 out이 될 요소는 삭제한다.
      // 이미 정렬이 완료되어있기에 가장 앞의 요소를 지운다
      test.shift();
      const [lastPlayer] = test;
      answer.push(lastPlayer);
    }
  }

  return answer;
};
