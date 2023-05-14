function solution(nameList, yearningList, photo) {
  const result = [];

  const yearningTable = {};

  for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i];
    const yearning = yearningList[i];

    yearningTable[name] = yearning;
  }

  for (const row of photo) {
    let total = 0;

    for (const item of row) {
      const yearning = yearningTable[item] || 0;
      total += yearning;
    }

    result.push(total);
  }
  return result;
}
