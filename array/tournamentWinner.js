function tournamentWinner(competitions, results) {
  let map = {};
  let highestScore = 0;
  for (let i = 0; i < competitions.length; i++) {
    let pair = competitions[i];
    const result = results[i];
    map[pair[0]] = (map[pair[0]] != undefined ? map[pair[0]] : 0) + (result ? 3 : 0);
    map[pair[1]] = (map[pair[1]] != undefined ? map[pair[1]] : 0) + (result ? 0 : 3);

    if (highestScore < map[pair[0]]) {
      highestScore = map[pair[0]]; 
    }
    if (highestScore < map[pair[1]]) {
      highestScore = map[pair[1]]; 
    }
  }

  return Object.keys(map).find(key => map[key] === highestScore);
}