function sunsetViews(buildings, direction) {
  if (buildings.length === 0) {
    return buildings;
  }
  let result = [];
  let sortedResult = [];
  if (direction === 'EAST') {
    let min = buildings[buildings.length - 1];
    result.push(buildings.length-1);
    for (let i = buildings.length - 2; i >= 0; i--) {
      if (buildings[i] > min) {
        min = buildings[i];
        result.push(i);
      }
    }

    for (let j = result.length - 1; j>=0;j--) {
      sortedResult.push(result[j]);
    }
    return sortedResult;

  }

  let min = buildings[0];
  result.push(0);
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i] > min) {
      min = buildings[i];
      result.push(i);
    }
  }

  return result;
}

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], 'WEST'));