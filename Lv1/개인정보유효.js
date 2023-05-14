function solution(today, terms, privacies) {
  const termsTable = {};

  for (const item of terms) {
    const [key, value] = item.split(" ");
    termsTable[key] = parseInt(value);
  }

  const result = [];

  const todayDate = new Date(today);

  for (let i = 0; i < privacies.length; i++) {
    const item = privacies[i];

    const [day, key] = item.split(" ");

    const orignDate = new Date(day);

    const term = termsTable[key];

    orignDate.setMonth(orignDate.getMonth() + term);

    if (todayDate >= orignDate) {
      const docNo = i + 1;
      result.push(docNo);
      continue;
    }
  }

  return result;
}
