function solution(survey, choices) {
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const arr = [, 3, 2, 1, 0, 1, 2, 3];

  survey.forEach((row, index) => {
    const [a, b] = row;
    const cho = choices[index];
    const point = arr[cho];

    if (cho > 3) {
      obj[b] += point;
    } else {
      obj[a] += point;
    }
  });

  const q = Object.entries(obj);

  let i = 0;
  let mbti = "";

  while (i < q.length) {
    const [aKey, aValue] = q[i];
    const [bKey, bValue] = q[i + 1];
    const aCode = aKey.charCodeAt();
    const bCode = bKey.charCodeAt();

    if (aValue === bValue) {
      mbti += aCode > bCode ? bKey : aKey;
      i += 2;
      continue;
    }

    mbti += aValue > bValue ? aKey : bKey;

    i += 2;
  }

  return mbti;
}
