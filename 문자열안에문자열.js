// includes() 메서드는 인자로 전달된 값이 배열에 포함되어 있을 경우 true 를 반환한다. 

function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'));
