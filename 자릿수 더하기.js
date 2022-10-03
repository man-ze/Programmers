// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  let answer = 0;
  let a = String(n);
  // a.length : 문자열의 길이만큼 반복
  for (let i = 0; i < a.length; i++) {
    // parseInt : 문자열을 숫자로 반환하는 함수
    answer += parseInt(a[i]);
  }
  return answer;
}

console.log(solution(123));
