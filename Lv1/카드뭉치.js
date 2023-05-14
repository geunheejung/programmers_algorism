function solution(cards1, cards2, goal) {
  let list = [];

  let answer = "Yes";

  for (let index = 0; index < goal.length; index++) {
    const row = goal[index];

    const card1 = cards1.some((crd) => crd === row);

    card1 ? list.push(cards1.shift()) : list.push(cards2.shift());

    const saved = list[index];

    saved;

    if (row !== saved) {
      answer = "No";
      break;
    }
  }

  return answer;
}
