const findFn = (rest) => {
  if (rest === 1) return 1;
  if (rest <= 3) return 2;

  const list = [2, 3, 5, 7, 9, 11, 13, 17, 19];
  const obj = {};

  while (rest !== 1) {
    const tmp = list.some((row) => {
      if (rest % row === 0) {
        rest = rest / row;
        if (!obj[row]) obj[row] = 1;
        obj[row] += 1;
        return true;
      }
    });

    if (!tmp) {
      // 소수란 1과 자기자신으로밖에 못나눔. ->
      for (let i = 2; i <= rest; i++) {
        const tmp = rest / i;

        if (tmp % 1 === 0) {
          const row = i;
          rest = rest / row;
          if (!obj[row]) obj[row] = 1;
          obj[row] += 1;
        }
      }
    }
  }

  const q = Object.values(obj);
  const w = q.reduce((prev, curr) => prev * curr, 1);

  return w;
};

const solution = (number, limit, power) => {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const result = findFn(i);
    if (result > limit) {
      answer += power;
      continue;
    }

    answer += result;
  }

  return answer;
};
