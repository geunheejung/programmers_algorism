function solution(keymap, targets) {
  var answer = [];

  const hash = {};

  for (let row of keymap) {
    // 1. row를 순회한다
    // 2. 현재 value를 key로 한다
    // 3. 현재 index를 비교한 다음 현재 key의 value보다 작으면 변경한다
    // 4. 현재 index를 비교한 다음 현재 key의 value보다 크다면 pass한다 우리는 최소한의 변경 횟수를 원하니깐

    for (let i = 0; i < row.length; i++) {
      const key = row[i];
      const index = i + 1;

      if (!hash[key]) {
        hash[key] = index;
        continue;
      }

      const currentValue = index;
      const hashValue = hash[key];

      if (currentValue < hashValue) {
        hash[key] = currentValue;
      }
    }
  }

  for (let row of targets) {
    let tmp = 0;

    if ([...row].some((row) => !hash[row])) {
      answer.push(-1);
      continue;
    }

    for (const key of row) {
      const currentKeymapNum = hash[key];

      if (!currentKeymapNum) {
        tmp = -1;
        continue;
      }

      tmp += currentKeymapNum;
    }

    if (tmp === 0) tmp = -1;

    answer.push(tmp);
  }

  return answer;
}

const res = solution(
  ["ABACD", "BCEFD", "D"],
  [
    "ABCDABCDABCDABCDABCDABCDABCDAQBCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDAABB",
    "AABB",
    "FA",
  ]
);
