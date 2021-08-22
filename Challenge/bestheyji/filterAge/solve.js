// 배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요.

// write your codes
function solution(inputArray) {
  const result = inputArray.filter(item => 30 <= item.age && item.age < 50);
  return result;
}

exports.solution = solution;
