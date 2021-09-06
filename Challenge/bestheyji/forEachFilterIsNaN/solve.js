// write your codes
function solution(inputArray) {
  const result = inputArray.filter(el => !isNaN(el) && typeof el === 'number')
  return result
}

exports.solution = solution;
