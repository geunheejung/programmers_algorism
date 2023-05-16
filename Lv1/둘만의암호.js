function solution(s, skip, index) {
  const skipMap = {};

  for (let i = 0; i < skip.length; i++) {
    const key = skip[i];
    const code = key.charCodeAt();
    skipMap[code] = key;
  }

  let result = "";

  [...s].forEach((row) => {
    let code = row.charCodeAt();

    let i = 0;
    let end = index;

    while (i < end) {
      i++;
      code += 1;

      // 만약 tmpCode가 123보다 크거나 같으면
      if (code >= 123) {
        // 현재 문자의 아스키코드값을 97로 바꾼다
        code = 97;
      }

      const a = skipMap[code];

      if (a) {
        end++;
      }
    }

    result += String.fromCharCode(code);
  });

  return result;
}
