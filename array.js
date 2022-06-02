function solution(inputArray) {
  inputArray = [3, 6, -2, -5, 7, 3];
  let min = inputArray[0];
  let max = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (min > inputArray[i] && inputArray[i] > 0) {
      min = inputArray[i]
    } if (max < inputArray[i]) {
      max = inputArray[i]
    }
  };
  return min * max
}
solution();