function solution(food) {
  var answer = "";

  food.shift();

  let leftPlayer = "";
  let rightPlayer = "";

  for (let i = 0; i < food.length; i++) {
    const row = food[i];
    const rRow = food[food.length - i - 1];

    const rest = Math.floor(row / 2);
    const rRest = Math.floor(rRow / 2);

    if (rest >= 1) {
      for (let j = 0; j < rest; j++) {
        const index = i + 1;
        leftPlayer += `${index}`;
      }
    }

    if (rRest >= 1) {
      for (let j = rRest; j > 0; j--) {
        rightPlayer += `${food.length - i}`;
      }
    }
  }

  answer = `${leftPlayer}${0}${rightPlayer}`;

  return answer;
}
