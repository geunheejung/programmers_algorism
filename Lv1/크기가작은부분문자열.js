function solution(t, p) {
  var answer = 0;

  let i = 0;
  let j = 0;
  let tLen = t.length;
  let pLen = p.length;
  let q = pLen;

  while (i < tLen) {
    let currText = "";

    while (j < q) {
      currText += t[j];

      j++;
    }

    if (q > tLen) break;
    if (currText <= p) {
      answer++;
    }

    i++;
    j = i;
    q += 1;
  }
  return answer;
}
