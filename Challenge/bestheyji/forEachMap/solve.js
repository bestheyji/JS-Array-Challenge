// write your codes
function solution(inputArray) {
  const array = []
  const result = inputArray.forEach(el => array.push(el + '%'))
  return array
}

exports.solution = solution;
