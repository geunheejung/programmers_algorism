const solution = (list) => {
  let answer = 0;
  list.sort((a, b) => a - b);

  let pattern = [];

  for (let i = 0; i < list.length; i++) {
    let item1 = list[i];

    for (let j = i; j < list.length; j++) {
      if (i === j) continue;

      let item2 = list[j];

      for (let k = j; k < list.length; k++) {
        if (i === k || j === k) continue;

        let item3 = list[k];

        let sum = item1 + item2 + item3;

        if (sum === 0) {
          let r = [i, j, k];

          answer += 1;
        }
      }
    }
  }

  return answer;
};
