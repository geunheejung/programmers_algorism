function solution(s) {
  const findAnswer = (s, answer = 1) => {
    let starterNum = 0;
    let otherNum = 0;

    const starter = s[0];

    let conditionNum = 0;

    for (let i = 0; i < s.length; i++) {
      const value = s[i];

      if (value === starter) {
        starterNum += 1;
        continue;
      }

      if (value !== starter) otherNum += 1;

      if (starterNum === otherNum) {
        conditionNum = starterNum + otherNum;
      }

      if (conditionNum) {
        const w = s.slice(conditionNum);

        w;

        if (w.length) {
          // w의 길이가 1개라면 +1 하고 종료하기
          if (w.length === 1) {
            return findAnswer(w, answer + 1);
          }
          return findAnswer(w, answer + 1);
        }
      }
    }
    return answer;
  };
  // conditionNum이 현재 분해 단위이다. 다음 문자를 보낼때는 conditionNum에서 문자를 잘라서 보낸다.

  // 1. 범위를 찾는다. 2. 범위를 찾은만큼 잔여 텍스트가 존재하는 지 체크한다.
  // 3. 잔여 텍스트가 범위보다 작을 경우 다시 분해한다.
  // 위 과정을 더 이상 단어가 없을 때 까지 반복한다.

  // 현재 단어, 초기 answser를 인자로 보내고 더 이상 단어가 없을때까지 return 호출하며,
  // 리턴값에 answer를 담는다?
  // 재귀함수를 만들기 위해서는 종료조건이 필요하며, 종료 조건이 성립하지 않을 경우 다음 함수로 이동 시켜줘야 한다.
  // 현재 종료 조건은 분해 했을 시 더이상 문자가 없는 경우이다.

  const answer = findAnswer(s, 1);

  return answer;
}
