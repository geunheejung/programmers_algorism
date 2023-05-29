function solution(a, b, n) {
  var answer = 0;

  if (a > n) {
    return 0;
  }

  while (n >= a) {
    const mock = Math.floor(n / a);
    const mock2 = mock * a;
    const restCook = mock * b;
    answer += restCook;
    n = n - mock2 + restCook;
  }
  return answer;
}
