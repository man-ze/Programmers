// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

let answer = 0;
let solution = (num1, num2) => {
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer;
};

// 아래는 코드가 제대로 작동하는지에 대한 확인 코드임
console.log(solution(5, 5));
