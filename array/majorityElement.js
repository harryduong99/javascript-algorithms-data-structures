function majorityElement(array) {
  let answer = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] == answer) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      answer = array[++i];
      count = 1;
    }
  }

  return answer;
}
