function solution(babbling) {
  var answer = 0;

  const keymap = {
    a: "aya",
    y: "ye",
    w: "woo",
    m: "ma",
  };

  for (let i = 0; i < babbling.length; i++) {
    const item = babbling[i];

    const [firstText] = item;
    let matched = keymap[firstText];

    if (!matched) {
      continue;
    }

    let tmp = item.slice(0, matched.length);

    if (tmp !== matched) continue;

    if (tmp.length === item.length) {
      answer += 1;
      continue;
    }

    let prevMatched = matched;

    for (let j = matched.length; j < item.length; j++) {
      let subItem = item[j];
      let subMatched = keymap[subItem];

      if (prevMatched === subMatched) break;

      if (!subMatched) break;

      let tmp = item.slice(j, j + subMatched.length);

      if (tmp !== subMatched) break;

      prevMatched = subMatched;

      j += subMatched.length - 1;

      if (j + 1 === item.length) {
        answer += 1;
      }
    }
  }

  return answer;
}
