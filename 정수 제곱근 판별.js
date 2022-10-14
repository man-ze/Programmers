// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 출력 : 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
//        3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.


function solution(n) {
  let answer = 0;
  let x = Math.sqrt(n); // Math.sqrt() 제곱근을 구하는 함수

  // n 의 제곱근이 음수인 경우
  if (x % 1 !== 0) {
    answer = -1;
  } else {
    // n 의 제곱근이 양수인 경우
    // Math.pow(값, 제곱승)
    answer = Math.pow(x + 1, 2);
  }
  return answer;
}

console.log(solution(121));
