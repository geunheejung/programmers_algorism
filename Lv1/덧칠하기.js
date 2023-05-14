function solution(n, m, section) {
  let start = section[0];
  let end = m === 1 ? 1 : start + (m - 1);
  let painted = 0;

  if (n === m) return 1;
  if (n === 1 || section.length === 1) return 1;

  section.forEach((row, index) => {
    const nextItem = section[index + 1];
    if (row > end) {
      start = row;
      end = start + (m - 1);
    }

    if (start <= row && end >= row) {
      start += m;
      if (nextItem > start) {
        start = row;
        end = start + (m - 1);
      } else {
        end += m;
      }
      painted += 1;
    }

    if (nextItem > start) {
      start = nextItem;
      end = start + (m - 1);
    }
    // 아래 코드를 넣은 이유는 다음 요소와 간격이 벌어질 경우
    if (nextItem - row >= m) {
      start = row;
      end = start + (m - 1);
    }
  });

  return painted;
}
