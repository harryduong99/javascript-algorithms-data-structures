function bestSeat(seats) {
  let bestSeatIdx = -1;
  let currentSpace = 0;
  let bestSpace = 0;

  for (let i = 0; i< seats.length; i++) {
    if (seats[i] === 1) {
      currentSpace = 0;
    } else {
      currentSpace += 1;
      if (currentSpace > bestSpace) {
        bestSpace = currentSpace;
        bestSeatIdx = i - Math.floor(currentSpace/2)
      }
    }
  }
  return bestSeatIdx;
}