// write your codes

function solution(inputArray) {
  return inputArray.reduce((acc, cur, inx) => {
      if (acc.maxValue < cur) {
        acc.maxValue = cur
        acc.idx = inx
      }
      return acc
    },{maxValue: -Infinity, idx: 0});
}

exports.solution = solution;
