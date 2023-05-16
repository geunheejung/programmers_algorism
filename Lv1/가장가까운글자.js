function solution(s) {
  var answer = [];

  const textMap = {};

  for (let i = 0; i < s.length; i++) {
    const value = s[i];

    if (textMap[value] === undefined) {
      answer.push(-1);
      textMap[value] = i;
      continue;
    }

    if (textMap[value] !== undefined) {
      const prevIndex = textMap[value];
      const r = i - prevIndex;

      answer.push(r);
      textMap[value] = i;
    }
  }
  return answer;
}
