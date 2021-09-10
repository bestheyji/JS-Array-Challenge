// write your codes
function solution(inputArray) {
  const result = inputArray.map((el,inx) => ({name: el, order: inx + 1}))
  return result
}

exports.solution = solution;
