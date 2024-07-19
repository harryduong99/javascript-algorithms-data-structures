function collidingAsteroids(asteroids) {
  for (let i = 0; i< asteroids.length -1; i++) {
    if (asteroids[i] > 0 && asteroids[i+1] < 0) {
      if (Math.abs(asteroids[i]) === Math.abs(asteroids[i+1])) {
        asteroids.splice(i, 2);
        i =-1;
      }
      if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])) {
        asteroids.splice(i+1, 1);
        i =-1;
      }
      if (Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])) {
        asteroids.splice(i, 1);
        i =-1;
      }
    } 
  }

  return asteroids;
}