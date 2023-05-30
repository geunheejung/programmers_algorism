function solution(number) {
  var answer = 0;

  number.sort((a, b) => a - b);

  let list1 = [];
  let list2 = [];

  number.forEach((row) => {
    if (row <= 0) list1.push(row);
    else list2.push(row);
  });

  const pattern = [];

  // 정수 또는 음수로만 이뤄질 경우에는?
  // 근데 0이면?
  // 0 으로만 이뤄질 경우 인덱스로 구해야함

  for (let i = 0; i < list1.length; i++) {
    const item1 = list1[i];
    const nextItem = list1[i + 1];

    if (item1 === 0 && nextItem === 0) {
      for (let j = 0; j < list1.length; j++) {
        if (i === j) continue;

        const item2 = list1[j];

        let sum = item1 + item2;

        // sum이 0인 경우 음수에서 i, j와 다른 0을 찾아야함

        if (sum === 0) {
          for (let k = 0; k < list1.length; k++) {
            if (k === i || k === j) continue;

            const item3 = list1[k];

            const r = [-i, -j, -k];

            const q = pattern.find((row) => {
              const [a, b, c] = row;

              const w = a === -i && b === -j && c !== -k;

              return w;
            });

            console.log(q);

            pattern.push(r);
          }
        }

        if (sum > 0) {
          // 양수일 경우 음수를 더한다

          for (let k = 0; k < list1.length; k++) {
            if (i === k) continue;

            const item3 = list1[k];

            sum = item1 + item2 + item3;

            if (sum === 0) {
              // 0이 완성될 경우 배열에 패턴을 저장한다.

              // 해당 배열에 현재 수식 3가지가 하나라도 존재하면 패스해야함.
              // 인덱스와 무관하게
              // 배열을 some으로
              const r = [-i, j, -k];

              const q = pattern.find((row) => {
                const [a, b, c] = row;

                const w = b === j && (a === -k || c === -i);

                return w;
              });

              if (!q) {
                answer += 1;
              }

              pattern.push(r);
            }
          }
        }

        if (sum < 0) {
          // 음수일 경우 양수를 더한다
          for (let k = 0; k < list2.length; k++) {
            // 양수끼리 학생 번호가 겹치면 안됨.
            if (j === k) {
              continue;
            }

            const item3 = list2[k];
            let sum = item1 + item2 + item3;

            if (sum === 0) {
              const r = [-i, j, k];

              const q = pattern.find((row) => {
                const [a, b, c] = row;

                const w = a === -i && (b === k || c === j);

                return w;
              });

              if (q) {
                answer += 1;
              }

              pattern.push(r);
            }
          }
        }
      }
    }

    for (let j = 0; j < list2.length; j++) {
      const item2 = list2[j];
      let sum = item1 + item2;

      if (sum > 0) {
        // 양수일 경우 음수를 더한다

        for (let k = 0; k < list1.length; k++) {
          if (i === k) continue;

          const item3 = list1[k];

          sum = item1 + item2 + item3;

          if (sum === 0) {
            // 0이 완성될 경우 배열에 패턴을 저장한다.

            // 해당 배열에 현재 수식 3가지가 하나라도 존재하면 패스해야함.
            // 인덱스와 무관하게
            // 배열을 some으로
            const r = [-i, j, -k];

            const q = pattern.find((row) => {
              const [a, b, c] = row;

              const w = b === j && (a === -k || c === -i);

              return w;
            });

            if (!q) {
              answer += 1;
            }

            pattern.push(r);
          }
        }
      }

      if (sum < 0) {
        // 음수일 경우 양수를 더한다
        for (let k = 0; k < list2.length; k++) {
          // 양수끼리 학생 번호가 겹치면 안됨.
          if (j === k) {
            continue;
          }

          const item3 = list2[k];
          let sum = item1 + item2 + item3;

          if (sum === 0) {
            const r = [-i, j, k];

            const q = pattern.find((row) => {
              const [a, b, c] = row;

              const w = a === -i && (b === k || c === j);

              return w;
            });

            if (q) {
              answer += 1;
            }

            pattern.push(r);
          }
        }
      }
    }
  }

  return answer;
}
