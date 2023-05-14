function solution(wallpaper) {
  let h = 0;
  let w = 0;

  const startPoint = {
    h: -1,
    w: -1,
  };

  while (w < wallpaper[0].length) {
    // h를 찾으려면 h를 전진 시킬 때 현재 줄에 #이 있는지 알아야함
    while (h < wallpaper.length) {
      const row = wallpaper[h];

      if (row.indexOf("#") !== -1 && startPoint.h === -1) {
        startPoint.h = h;
      }
      const item = wallpaper[h][w];
      if (item === "#") {
        startPoint.w = w;
        break;
      }
      // 만약 item이 #일 경우
      ++h;
    }
    h = 0;
    if (startPoint.w !== -1) break;
    ++w;
  }

  // 위 과정을 역순으로 한다 치면, h, w를 각 length로 하고 -1 해가면서 찾으면 됨.

  const initialEndPoint = {
    h: wallpaper.length - 1,
    w: wallpaper[0].length - 1,
  };

  h = initialEndPoint.h;
  w = initialEndPoint.w;

  const endPoint = {
    h: -1,
    w: -1,
  };

  while (w >= 0) {
    while (h >= 0) {
      const row = wallpaper[h];

      if (row.indexOf("#") !== -1 && endPoint.h === -1) {
        endPoint.h = h + 1;
      }
      const item = wallpaper[h][w];

      if (item === "#") {
        endPoint.w = w + 1;
        break;
      }
      --h;
    }
    h = initialEndPoint.h;

    if (endPoint.w !== -1) break;

    --w;
  }

  return [startPoint.h, startPoint.w, endPoint.h, endPoint.w];
}
