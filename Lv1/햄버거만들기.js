function solution(ingredient) {
  var answer = 0;
  const checked = [1, 2, 3, 1];
  let i = 0;

  for (; i < ingredient.length; i++) {
    const item = ingredient[i];
    const nextItem = ingredient[i + 1];

    if (item === 1) {
      if (nextItem === 1) continue;

      // 현재 item이 1일 경우 현재 아이템을 기준으로 4칸 뒤를 탐색한다.

      const tmp = ingredient.slice(i, i + 4);

      const isMatched = checked.every((check, index) => check === tmp[index]);

      if (!isMatched) {
        continue;
      }

      if (isMatched) {
        // i 부터 i + 4 만큼 배열에서 지우고
        // index를 4칸 뒤로 돌린다

        const q = ingredient.splice(i, 4);
        let tmpI = i - 4;

        if (tmpI < 0) {
          i = -1;
        } else {
          i = tmpI;
        }

        answer += 1;
        continue;
      }
    }
  }

  return answer;
}

const res = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
