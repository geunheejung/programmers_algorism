/**
 *
 * @param k 가장 좋은 품질 사과
 * @param m 한 상자에 담길 수 있는 개수
 * @param score 사과 점수 배열
 * @returns
 */
function solution(k, m, score) {
  var answer = 0;

  const arr = score.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (i % m === 0) {
      const tmp = arr.slice(i, m + i);
      if (tmp.length === m) {
        const e = tmp.pop();
        answer += e * m;
      }
    }
  }

  return answer;
}

const a = [3, 4, [1, 2, 3, 1, 2, 3, 1]];
const b = [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2, 2]];

const res = solution(...b);
