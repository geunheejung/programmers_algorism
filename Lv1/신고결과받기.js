/**
 * 2022 KAKAO BLIND RECRUITMENT 신고 결과 받기
 * @param {string[]} id_list
 * @param {<string, string>[]} report
 * @param {number} k
 * @returns
 */
function solution(id_list, report, k) {
  var answer = [];

  const idObj = {};

  id_list.forEach((row) => {
    idObj[row] = 0;
  });

  const obj = {};

  for (let i = 0; i < report.length; i++) {
    const item = report[i];

    const [a, b] = item.split(" ");

    if (!obj[b]) {
      obj[b] = {
        list: new Set(),
        count: 0,
      };
    }

    if (!obj[b].list.has(a)) {
      obj[b].count += 1;
    }
    obj[b].list.add(a);
  }

  Object.values(obj).forEach((row) => {
    const { list, count } = row;

    if (count >= k) {
      for (let sub of list) {
        idObj[sub] += 1;
      }
    }
  });

  answer = Object.values(idObj);

  return answer;
}
