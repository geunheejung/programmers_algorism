function solution(players, callings) {
  const map = new Map();

  players.forEach((row, index) => {
    map.set(row, index);
  });

  callings.forEach((calling, index) => {
    const currentRank = map.get(calling);

    map.set(calling, currentRank - 1);

    const tmp = players[currentRank];

    players[currentRank] = players[currentRank - 1];
    players[currentRank - 1] = tmp;

    map.set(players[currentRank], currentRank);
  });

  let arr1 = [];

  for (let [key, val] of map.entries()) {
    arr1[val] = key;
  }

  return arr1;
}
