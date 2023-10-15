function solution(lottos, win_nums) {
  var answer = [];
  const _getRank = (matchedCount) => {
    const resultTable = {
      6: 1,
      5: 2,
      4: 3,
      3: 4,
      2: 5,
    };

    const rank = resultTable[matchedCount] || 6;
    return rank;
  };

  const winNumsSet = new Set(win_nums);

  let matchedCount = 0;
  let damagedDataCount = 0;

  lottos.forEach((row) => {
    if (winNumsSet.has(row)) {
      matchedCount += 1;
    } else if (row === 0) {
      damagedDataCount += 1;
    }
  });

  let lowestRank = _getRank(matchedCount);
  let highestRank = _getRank(matchedCount + damagedDataCount);

  answer.push(highestRank, lowestRank);

  return answer;
}
