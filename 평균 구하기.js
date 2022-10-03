// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

arr = [1, 2, 3, 4];

let sum = 0;
let solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
};

console.log(solution(arr));
