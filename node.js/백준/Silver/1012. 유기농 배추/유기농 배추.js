const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const caseCount = input.shift();

const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

const bfs = (map, visited, x, y) => {
  visited[x][y] = true;
  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX < 0 || newX >= map.length || newY < 0 || newY >= map[0].length) continue;
      if (!map[newX][newY] || visited[newX][newY]) continue;
      visited[newX][newY] = true;
      queue.push([newX, newY]);
    }
  }
};

for (let i = 0; i < caseCount; i++) {
  const [width, height, cabbageCount] = input[i];
  const cabbages = input.splice(i + 1, cabbageCount);

  const map = Array.from({ length: width }).map(() => Array.from({ length: height }).fill(false));
  const visited = [...map.map((column) => [...column])];

  cabbages.forEach(([x, y]) => {
    map[x][y] = true;
  });

  let worms = 0;

  map.forEach((row, x) => {
    row.forEach((_, y) => {
      if (map[x][y] && !visited[x][y]) {
        worms++;
        bfs(map, visited, x, y);
      }
    });
  });

  console.log(worms);
}
