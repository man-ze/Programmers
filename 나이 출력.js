// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때,
// 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

// 제한사항 : 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

let answer = 0;
function solution(age) {
  return 2022 - (age - 1);
}

// 아래는 코드가 정상적으로 실행되는지에 대한 확인 코드임
console.log(solution(20));
