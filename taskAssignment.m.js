function taskAssignment(k, tasks) {
  let result = [];
  let hashTable = {};
  for (let k = 0; k < tasks.length; k++) {
    if (hashTable[tasks[k]] !== undefined) {
      hashTable[tasks[k]].push(k);
    } else {
      hashTable[tasks[k]] = [k];
    }
  }

  let sortedTasks = tasks.sort((a, b) => a - b);

  for (let i = 0; i < Math.ceil(sortedTasks.length / 2); i++) {
    result.push([hashTable[sortedTasks[i]][0], hashTable[sortedTasks[sortedTasks.length - i - 1]][0]]);
    hashTable[sortedTasks[i]].shift();
    hashTable[sortedTasks[sortedTasks.length - i - 1]].shift();
  }

  return result;
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
