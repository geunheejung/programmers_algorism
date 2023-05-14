function solution(park, routes) {
  const routeTable = {
    N: { h: -1, w: 0 }, // 위
    S: { h: +1, w: 0 }, // 아래
    W: { h: 0, w: -1 }, // 왼쪽
    E: { h: 0, w: +1 }, // 오른쪽
  };

  const player = { h: 0, w: 0 };

  console.log(park);

  const parkTable = park.map((h, hIndex) => {
    const startPoint = h.indexOf("S");

    if (startPoint !== -1) {
      player.h = hIndex;
      player.w = startPoint;
    }

    return h;
  });

  const parkSize = {
    h: parkTable.length,
    w: parkTable[0].length,
  };

  for (const route of routes) {
    const [pos, step] = route.split(" ");

    // step만큼 player의 위치에서 pos 방향값을 적용한다

    const tmpPlayer = {
      h: player.h,
      w: player.w,
    };

    const currentPos = routeTable[pos];

    let isPass = false;

    const _step = parseInt(step);
    // 여기서 방향만 알아내면 굳이 다 안돌려도됨

    const rangeCheck = {
      h: currentPos.h * _step + tmpPlayer.h,
      w: currentPos.w * _step + tmpPlayer.w,
    };

    // 미리 현재 위치에서 전부 이동할 시 공원 밖을 벗어나는지 측정.
    if (rangeCheck.h < 0 || rangeCheck.w < 0) continue;
    if (rangeCheck.h >= parkSize.h || rangeCheck.w >= parkSize.w) continue;

    for (let i = 0; i < step; i++) {
      tmpPlayer.h += currentPos.h;
      tmpPlayer.w += currentPos.w;

      // 진행 도중 지뢰를 만날 경우 현재 명령어를 패스하고 다음 명령어를 진행한다
      const currentPoint = parkTable[tmpPlayer.h][tmpPlayer.w];
      if (currentPoint === "X") {
        isPass = true;
        break;
      }
    }

    if (isPass) continue;

    player.h = tmpPlayer.h;
    player.w = tmpPlayer.w;
  }

  return [player.h, player.w];
}
