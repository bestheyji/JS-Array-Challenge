// write your codes
function solution(inputArray) {
  let resultSum = 0
  const result = inputArray.forEach(el => resultSum += el)
  return resultSum
}

exports.solution = solution;
