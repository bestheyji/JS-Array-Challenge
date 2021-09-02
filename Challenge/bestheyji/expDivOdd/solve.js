
function solution(inputArray) {
  const result = inputArray
    .map(el => el ** 2)
    .reduce((acc, cur) => {
      if(cur % 3 === 1) acc += cur
      return acc
    }, 0)
  return result
}

exports.solution = solution;
