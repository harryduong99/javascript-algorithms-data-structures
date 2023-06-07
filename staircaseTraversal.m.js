function staircaseTraversal(height, maxSteps) {
  return travel(height, maxSteps);
}

// key is: with height = k; maxStep = s => number of way is numWays[k-1] + numWays[k-2] + ... + numWays[k-s];
// then with numWays[k-s] for example, gonna equal numWays[k-s-1] + ... + numWay[k-s-s]
function travel(height, maxSteps) {
  if (height <= 1) {
    return 1;
  }

  let maxNumberOfWays = 0;

  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    console.log(height);
    maxNumberOfWays += travel(height-step, maxSteps);
  }

  return maxNumberOfWays;
}

console.log(staircaseTraversal(2, 1));