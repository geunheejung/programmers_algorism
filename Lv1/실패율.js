function solution(N, stages) {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    let a = 0;
    let b = 0;

    for (let item of stages) {
      if (i === item) a += 1;
      if (i <= item) b += 1;
    }

    let r = a / b;
    arr.push([r, i]);
  }

  const e = arr
    .sort((a, b) => {
      const [a1, a2] = a;
      const [b1, b2] = b;

      if (a1 === b1) {
        return a2 - b2;
      }

      return b1 - a1;
    })
    .map((row) => row[1]);

  return e;
}
