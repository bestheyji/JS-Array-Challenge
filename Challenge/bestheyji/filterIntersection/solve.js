//두 배열의 교집합을 출력하세요!

function solution(inputArray1, inputArray2) {
  const result = inputArray1.filter(ele => inputArray2.includes(ele))
  return result;
}

exports.solution = solution;
