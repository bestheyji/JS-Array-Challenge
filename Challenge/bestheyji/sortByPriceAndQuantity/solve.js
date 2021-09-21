// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => {
    if(a.price - b.price === 0) return a.quantity - b.quantity
    return a.price - b.price
  })
}

exports.solution = solution;
