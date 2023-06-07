function validStartingCity(distances, fuel, mpg) {
  let left = [];
  // calculate what left if start from a city, using fuel of only that city to move to the next
  for (let i = 0; i < distances.length; i++) {
    left.push(fuel[i]*mpg - distances[i]);
  }

  // then check if the left of that city is < 0 => no way we can start from that city, can not even move to the first next one
  // check total left when traveling, util total left is < 0 => the starting point failed
  for (let j = 0; j < left.length; j++) {
    let k = j;
    let having = left[j];
    if (having < 0) {
      continue;
    }
    while(having >= 0) {
      k = k === left.length - 1 ? 0 : k+1;
      having += left[k];
      // after traveling, check if k can be come j again => one circle => return index;
      if (k === j) {
        return j;
      }
    }
  }
}

console.log(validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10));

// [10, 20, 10, 0, 30]

// [ 5, -5, -5, -10, 15 ]

// 5 + 20

// 0 + 10