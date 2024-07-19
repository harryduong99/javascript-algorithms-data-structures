function twoColorable(graph) {
  const colors = new Array(graph.length).fill(null);

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === null) {
      if (dfs(i, 1) === false) return false;
    }
  }

  function dfs(node, color) {
    if (colors[node] === color) return true;

    colors[node] = color;

    const neighbours = graph[node];

    for (const neighbour of neighbours) {
      if (colors[neighbour] === color) return false;
      if (dfs(neighbour, -color) === false) return false;
    }
  }

  return true;
}
