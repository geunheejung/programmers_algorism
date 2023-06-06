function solution(n, arr1, arr2) {
  var answer = [];

  const fn = (text) => {
    if (text.length === n) return text;

    let prefix = "";

    for (let i = 0; i < n - text.length; i++) {
      prefix += "0";
    }

    return `${prefix}${text}`;
  };

  for (let i = 0; i < arr1.length; i++) {
    const a = fn(arr1[i].toString(2));
    const b = fn(arr2[i].toString(2));

    let tmp = "";

    for (let j = 0; j < n; j++) {
      const sa = a[j] || 0;
      const sb = b[j] || 0;
      if (sa === "1" || sb === "1") {
        tmp += "#";
        continue;
      }

      tmp += " ";
    }

    answer.push(tmp);
    tmp = "";
  }

  return answer;
}
