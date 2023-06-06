function solution(board, moves) {
  const normalize = (list = []) => {
    const obj = {};

    for (let y = 0; y < list.length; y++) {
      const key = y + 1;

      if (!obj[key]) obj[key] = [];

      for (let x = 0; x < list.length; x++) {
        const item = list[x][y];

        obj[key].push(item);
      }
    }

    return obj;
  };

  const play = (obj = {}, moves = []) => {
    let arr = [];

    for (let i = 0; i < moves.length; i++) {
      const yIndex = moves[i];

      const pick = obj[yIndex];

      for (let j = 0; j < pick.length; j++) {
        const item = pick[j];
        if (item !== 0) {
          arr.push(item);
          obj[yIndex][j] = 0;
          break;
        }
      }
    }

    return arr;
  };

  const sum = (arr = []) => {
    let answer = 0;
    let i = 0;

    for (i; i < arr.length; i++) {
      const row = arr[i];
      const nextIndex = i + 1;
      const next = arr[nextIndex];

      let removeIndex = new Set();

      if (!next) continue;

      if (row === next) {
        removeIndex.add(i);
        removeIndex.add(i + 1);

        if (arr[nextIndex + 1]) {
          for (let j = nextIndex; j < arr.length; j++) {
            const sub = arr[j];
            if (row === sub) {
              removeIndex.add(j);
            }

            if (row !== sub) {
              break;
            }
          }
        }
      }

      if (removeIndex.size) {
        let q = arr.filter((row, index) => {
          return !removeIndex.has(index);
        });
        arr = q;
        answer += removeIndex.size;
        removeIndex = new Set();
        i = i - 2;
      }
    }

    return answer;
  };

  const obj = normalize(board);
  const result = play(obj, moves);
  const point = sum(result);

  return point;
}
